import { headers } from "next/headers";
import { readDrafts } from "./store.server";
import { EditorProvider } from "./EditorContext";
import EditorToolbar from "./EditorToolbar";

/**
 * Server component that:
 *  - Reads draft state from disk
 *  - Wraps children in EditorProvider + floating toolbar
 *
 * Drag offsets are stored as % of the parent container, so we don't need a
 * fixed-width canvas — the page can be fully responsive with Tailwind as usual.
 */
export default async function EditorShell({
  pathname,
  children,
}: {
  pathname: string;
  children: React.ReactNode;
}) {
  const file = await readDrafts();
  await headers();
  return (
    <EditorProvider initialFile={file} pathname={pathname}>
      {children}
      <EditorToolbar />
    </EditorProvider>
  );
}
