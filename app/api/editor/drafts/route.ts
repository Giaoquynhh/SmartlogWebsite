import { NextRequest, NextResponse } from "next/server";
import { readDrafts, writeDraft, resetDraft, resetAll } from "../../../editor/store.server";

export const dynamic = "force-dynamic";

export async function GET() {
  const file = await readDrafts();
  return NextResponse.json(file);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { pathname, id, kind, text, src, offset, original, hidden } = body ?? {};
  if (typeof pathname !== "string" || typeof id !== "string" || !kind) {
    return NextResponse.json({ error: "missing pathname/id/kind" }, { status: 400 });
  }
  const file = await writeDraft(pathname, id, {
    kind,
    text,
    src,
    offset,
    original,
    hidden,
  });
  return NextResponse.json(file);
}

export async function DELETE(req: NextRequest) {
  const url = new URL(req.url);
  const all = url.searchParams.get("all");
  if (all === "1") {
    const file = await resetAll();
    return NextResponse.json(file);
  }
  const pathname = url.searchParams.get("pathname");
  const id = url.searchParams.get("id");
  if (!pathname || !id) {
    return NextResponse.json({ error: "missing pathname/id" }, { status: 400 });
  }
  const file = await resetDraft(pathname, id);
  return NextResponse.json(file);
}
