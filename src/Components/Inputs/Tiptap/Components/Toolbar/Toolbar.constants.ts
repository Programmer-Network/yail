import type { Placement } from "@floating-ui/dom";

const FALLBACK_PLACEMENTS: Placement[] = [
  "bottom",
  "top-start",
  "top-end",
  "bottom-start",
  "bottom-end"
];

export const BUBBLE_MENU_OPTIONS = {
  placement: "top" as Placement,
  offset: 8,
  flip: {
    fallbackPlacements: FALLBACK_PLACEMENTS,
    padding: 12
  },
  shift: {
    padding: 12,
    crossAxis: true
  }
};

export const TYPOGRAPHY_LABELS: Record<number, string> = {
  1: "H1",
  2: "H2",
  3: "H3",
  4: "H4",
  5: "H5",
  6: "H6"
};

export const DEFAULT_TYPOGRAPHY_LABEL = "¶";
