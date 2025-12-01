import { IColorOption } from "./ColorDropdown.types";

// Color IDs that map to CSS classes
export const TEXT_COLOR_IDS = {
  DEFAULT: "default",
  PRIMARY: "primary",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
  PURPLE: "purple",
  PINK: "pink",
  CYAN: "cyan",
  GRAY: "gray"
} as const;

export type TextColorId = (typeof TEXT_COLOR_IDS)[keyof typeof TEXT_COLOR_IDS];

// CSS class mapping for each color (used for rendering in editor and sanitizer)
export const TEXT_COLOR_CLASSES: Record<string, string> = {
  [TEXT_COLOR_IDS.PRIMARY]: "yl:text-color-primary",
  [TEXT_COLOR_IDS.SUCCESS]: "yl:text-color-success",
  [TEXT_COLOR_IDS.WARNING]: "yl:text-color-warning",
  [TEXT_COLOR_IDS.ERROR]: "yl:text-color-error",
  [TEXT_COLOR_IDS.PURPLE]: "yl:text-color-purple",
  [TEXT_COLOR_IDS.PINK]: "yl:text-color-pink",
  [TEXT_COLOR_IDS.CYAN]: "yl:text-color-cyan",
  [TEXT_COLOR_IDS.GRAY]: "yl:text-color-gray"
};

// Preview colors for the dropdown swatches (visual only, not used in output)
export const TEXT_COLOR_PREVIEW: Record<string, string> = {
  [TEXT_COLOR_IDS.PRIMARY]: "oklch(65% 0.19 250)",
  [TEXT_COLOR_IDS.SUCCESS]: "oklch(70% 0.25 140)",
  [TEXT_COLOR_IDS.WARNING]: "oklch(70% 0.19 60)",
  [TEXT_COLOR_IDS.ERROR]: "oklch(60% 0.22 30)",
  [TEXT_COLOR_IDS.PURPLE]: "oklch(65% 0.22 310)",
  [TEXT_COLOR_IDS.PINK]: "oklch(70% 0.18 350)",
  [TEXT_COLOR_IDS.CYAN]: "oklch(75% 0.15 200)",
  [TEXT_COLOR_IDS.GRAY]: "oklch(60% 0.02 264)"
};

export const COLOR_OPTIONS: IColorOption[] = [
  {
    id: TEXT_COLOR_IDS.DEFAULT,
    label: "Default",
    color: null
  },
  {
    id: TEXT_COLOR_IDS.PRIMARY,
    label: "Primary",
    color: TEXT_COLOR_IDS.PRIMARY
  },
  {
    id: TEXT_COLOR_IDS.SUCCESS,
    label: "Green",
    color: TEXT_COLOR_IDS.SUCCESS
  },
  {
    id: TEXT_COLOR_IDS.WARNING,
    label: "Orange",
    color: TEXT_COLOR_IDS.WARNING
  },
  {
    id: TEXT_COLOR_IDS.ERROR,
    label: "Red",
    color: TEXT_COLOR_IDS.ERROR
  },
  {
    id: TEXT_COLOR_IDS.PURPLE,
    label: "Purple",
    color: TEXT_COLOR_IDS.PURPLE
  },
  {
    id: TEXT_COLOR_IDS.PINK,
    label: "Pink",
    color: TEXT_COLOR_IDS.PINK
  },
  {
    id: TEXT_COLOR_IDS.CYAN,
    label: "Cyan",
    color: TEXT_COLOR_IDS.CYAN
  },
  {
    id: TEXT_COLOR_IDS.GRAY,
    label: "Gray",
    color: TEXT_COLOR_IDS.GRAY
  }
];
