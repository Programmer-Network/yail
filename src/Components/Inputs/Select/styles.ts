import { CSSObjectWithLabel, OptionProps, StylesConfig } from "react-select";

import { Option } from "./types";

/**
 * @url https://react-select.com/styles
 */

const color = "oklch(0.85 0.02 240)";

export const styles: StylesConfig<Option | undefined, false | true> = {
  input: (base: CSSObjectWithLabel) => ({
    ...base,
    outline: "none",
    boxShadow: "none",
    padding: "4px 0",
    color,
    "input:focus": {
      boxShadow: "none"
    }
  }),
  control: (base: CSSObjectWithLabel) => {
    return {
      ...base,
      backgroundColor: "oklch(0.1 0.02 240)",
      borderWidth: "2px",
      borderColor: "oklch(0.3 0.02 240)",
      borderRadius: 6,
      boxShadow: "none",
      color,
      "&:hover": {
        borderColor: "oklch(0.3 0.02 240)"
      }
    };
  },
  option: (
    base: CSSObjectWithLabel,
    props: OptionProps<Option | undefined, false | true>
  ) => ({
    ...base,
    backgroundColor: props.isDisabled
      ? "oklch(0.5 0.05 240)"
      : "oklch(0.1 0.02 240)",
    color: props.isDisabled ? "oklch(0.5 0.05 240)" : color,
    cursor: props.isDisabled ? "not-allowed" : "default",
    "&:active": {
      backgroundColor: !props.isDisabled ? "oklch(0.6 0.2 250)" : undefined,
      color: !props.isDisabled ? color : undefined
    }
  }),
  multiValueRemove: (base: CSSObjectWithLabel) => {
    return {
      ...base,
      color: "oklch(0.65 0.05 270)",
      cursor: "pointer",
      "&:hover": {
        color: color,
        backgroundColor: "oklch(0.6 0.2 30)"
      }
    };
  },
  multiValue: (base: CSSObjectWithLabel) => {
    return {
      ...base,
      backgroundColor: "oklch(0.1 0.02 240)",
      color
    };
  },
  singleValue: (base: CSSObjectWithLabel) => {
    return {
      ...base,
      backgroundColor: "oklch(0.1 0.02 240)",
      color
    };
  },
  multiValueLabel: (base: CSSObjectWithLabel) => {
    return {
      ...base,
      color
    };
  },
  placeholder: (base: CSSObjectWithLabel) => {
    return {
      ...base,
      color: "oklch(0.5 0.05 240)"
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
      backgroundColor: "oklch(0.1 0.02 240)",
      color,
      boxShadow: "none",
      borderWidth: "2px",
      borderColor: "oklch(0.3 0.02 240)",
      borderRadius: 0,
      zIndex: 99999999
    };
  },
  indicatorSeparator: (base: CSSObjectWithLabel) => {
    return {
      ...base,
      backgroundColor: "oklch(0.3 0.02 240)"
    };
  },
  clearIndicator: (base: CSSObjectWithLabel) => {
    return {
      ...base,
      color: "oklch(0.3 0.02 240)",
      cursor: "pointer",
      "&:hover": {
        color: "oklch(0.6 0.2 30)"
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
      background: "oklch(0.1 0.02 240)"
    },
    "::-webkit-scrollbar-thumb": {
      background: "oklch(0.3 0.02 240)"
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "oklch(0.6 0.2 250)"
    }
  }),
  groupHeading: (base: CSSObjectWithLabel) => ({
    ...base,
    color: "oklch(0.5 0.05 240)",
    padding: "5px 10px",
    fontSize: "0.75rem"
  })
};
