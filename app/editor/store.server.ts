import { promises as fs } from "node:fs";
import path from "node:path";
import type { DraftsFile, DraftRecord } from "./types";

const STORE_PATH = path.join(process.cwd(), ".editor-state", "drafts.json");

const EMPTY: DraftsFile = { version: 2, updatedAt: null, drafts: {} };

async function ensureFile(): Promise<void> {
  try {
    await fs.access(STORE_PATH);
  } catch {
    await fs.mkdir(path.dirname(STORE_PATH), { recursive: true });
    await fs.writeFile(STORE_PATH, JSON.stringify(EMPTY, null, 2), "utf8");
  }
}

export async function readDrafts(): Promise<DraftsFile> {
  await ensureFile();
  const raw = await fs.readFile(STORE_PATH, "utf8");
  try {
    const parsed = JSON.parse(raw) as DraftsFile;
    // Older v1 drafts used pixel offsets — incompatible with v2 %. Discard.
    if (parsed.version !== 2 || !parsed.drafts) return { ...EMPTY };
    return parsed;
  } catch {
    return { ...EMPTY };
  }
}

export function draftKey(pathname: string, editableId: string): string {
  return `${pathname}::${editableId}`;
}

export async function writeDraft(
  pathname: string,
  editableId: string,
  patch: Partial<DraftRecord> & { kind: DraftRecord["kind"] }
): Promise<DraftsFile> {
  const file = await readDrafts();
  const key = draftKey(pathname, editableId);
  const existing = file.drafts[key];
  const now = new Date().toISOString();
  file.drafts[key] = {
    ...(existing ?? {}),
    ...patch,
    kind: patch.kind ?? existing?.kind ?? "text",
    updatedAt: now,
  } as DraftRecord;
  file.updatedAt = now;
  await fs.writeFile(STORE_PATH, JSON.stringify(file, null, 2), "utf8");
  return file;
}

export async function resetDraft(
  pathname: string,
  editableId: string
): Promise<DraftsFile> {
  const file = await readDrafts();
  delete file.drafts[draftKey(pathname, editableId)];
  file.updatedAt = new Date().toISOString();
  await fs.writeFile(STORE_PATH, JSON.stringify(file, null, 2), "utf8");
  return file;
}

export async function resetAll(): Promise<DraftsFile> {
  const fresh: DraftsFile = {
    version: 2,
    updatedAt: new Date().toISOString(),
    drafts: {},
  };
  await fs.writeFile(STORE_PATH, JSON.stringify(fresh, null, 2), "utf8");
  return fresh;
}
