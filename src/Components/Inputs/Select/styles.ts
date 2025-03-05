import { CSSObjectWithLabel, OptionProps, StylesConfig } from "react-select";

import { Option } from "./types";

const getCssVar = (varName: string): string => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(varName)
    .trim();
};

const text = getCssVar("--color-text") || "oklch(0.85 0.02 240)";
const background = getCssVar("--color-background") || "oklch(0.1 0.02 240)";
const border = getCssVar("--color-border") || "oklch(0.3 0.02 240)";
const muted = getCssVar("--color-muted") || "oklch(0.5 0.05 240)";
const primary = getCssVar("--color-primary") || "oklch(0.8 0.2 80)";
const secondary = getCssVar("--color-secondary") || "oklch(0.65 0.05 270)";
const error = getCssVar("--color-error") || "oklch(0.6 0.2 30)";
const accent = getCssVar("--color-accent") || "oklch(0.6 0.2 250)";

export const styles: StylesConfig<Option | undefined, false | true> = {
  input: (base: CSSObjectWithLabel) => ({
    ...base,
    outline: "none",
    boxShadow: "none",
    padding: "4px 0",
    color: text,
    "input:focus": {
      boxShadow: "none"
    }
  }),
  control: (base: CSSObjectWithLabel) => {
    return {
      ...base,
      backgroundColor: background,
      borderWidth: "2px",
      borderColor: border,
      borderRadius: 6,
      boxShadow: "none",
      color: text,
      "&:hover": {
        borderColor: border
      }
    };
  },
  option: (
    base: CSSObjectWithLabel,
    props: OptionProps<Option | undefined, false | true>
  ) => ({
    ...base,
    backgroundColor: props.isDisabled ? muted : background,
    color: props.isDisabled ? muted : text,
    cursor: props.isDisabled ? "not-allowed" : "default",
    "&:active": {
      backgroundColor: !props.isDisabled ? primary : undefined,
      color: !props.isDisabled ? background : undefined
    }
  }),
  multiValueRemove: (base: CSSObjectWithLabel) => {
    return {
      ...base,
      color: secondary,
      cursor: "pointer",
      "&:hover": {
        color: text,
        backgroundColor: error
      }
    };
  },
  multiValue: (base: CSSObjectWithLabel) => {
    return {
      ...base,
      backgroundColor: background,
      color: text
    };
  },
  singleValue: (base: CSSObjectWithLabel) => {
    return {
      ...base,
      backgroundColor: background,
      color: text
    };
  },
  multiValueLabel: (base: CSSObjectWithLabel) => {
    return {
      ...base,
      color: text
    };
  },
  placeholder: (base: CSSObjectWithLabel) => {
    return {
      ...base,
      color: muted
    };
  },
  valueContainer: (base: CSSObjectWithLabel) => {
    return {
      ...base,
      "&:focus-visible": {
        outline: "none",
        boxShadow: "none"
      }
    };
  },
  menu: (base: CSSObjectWithLabel) => {
    return {
      ...base,
      backgroundColor: background,
      color: text,
      boxShadow: "none",
      borderWidth: "2px",
      borderColor: border,
      borderRadius: 0,
      zIndex: 99999999
    };
  },
  indicatorSeparator: (base: CSSObjectWithLabel) => {
    return {
      ...base,
      backgroundColor: border
    };
  },
  clearIndicator: (base: CSSObjectWithLabel) => {
    return {
      ...base,
      color: border,
      cursor: "pointer",
      "&:hover": {
        color: error
      }
    };
  },
  menuList: (base: CSSObjectWithLabel) => ({
    ...base,
    padding: 0,
    "::-webkit-scrollbar": {
      width: "10px"
    },
    "::-webkit-scrollbar-track": {
      background: background
    },
    "::-webkit-scrollbar-thumb": {
      background: border
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: accent
    }
  }),
  groupHeading: (base: CSSObjectWithLabel) => ({
    ...base,
    color: muted,
    padding: "5px 10px",
    fontSize: "0.75rem"
  })
};
