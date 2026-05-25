/**
 * A single override for one editable element on a page.
 * `id` is the dotted path declared via <Editable id="..."> in the source.
 */
export type EditableKind = "text" | "image";

export type DraftRecord = {
  /** new text content if kind === "text" */
  text?: string;
  /** new image path (e.g. /uploads/abc.png) if kind === "image" */
  src?: string;
  /**
   * Drag offset as a PERCENTAGE of the element's parent container.
   * `xPct: 5` means "shift right by 5% of parent's width".
   * Stored as % so it stays valid across screen sizes and layout changes.
   */
  offset?: { xPct: number; yPct: number };
  /**
   * If true, this element is hidden — `<Editable>` renders nothing.
   * Dev uses this signal in the exported JSON to delete the corresponding
   * code in production.
   */
  hidden?: boolean;
  /** last-updated timestamp */
  updatedAt: string;
  /** dev-facing breadcrumb */
  kind: EditableKind;
  /** original value at the time of first edit, for export diff */
  original?: string;
};

export type DraftsFile = {
  version: 2;
  updatedAt: string | null;
  /** keyed by `${pathname}::${editableId}` */
  drafts: Record<string, DraftRecord>;
};
