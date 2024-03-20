import { CSSObjectWithLabel, OptionProps, StylesConfig } from "react-select";

import { Option } from "./types";

/**
 * @url https://react-select.com/styles
 */

const color = "rgb(var(--text-color))";

export const styles: StylesConfig<Option | undefined, false | true> = {
  input: (base: CSSObjectWithLabel) => ({
    ...base,
    outline: "none",
    boxShadow: "none",
    color,
    "input:focus": {
      boxShadow: "none"
    }
  }),
  control: (base: CSSObjectWithLabel) => {
    return {
      ...base,
      backgroundColor: "rgb(var(--color-bg))",
      borderWidth: "2px",
      borderColor: "rgb(var(--text-color))",
      borderRadius: 6,
      boxShadow: "none",
      color,
      "&:hover": {
        borderColor: "rgb(var(--text-color))"
      }
    };
  },
  option: (
    base: CSSObjectWithLabel,
    props: OptionProps<Option | undefined, false | true>
  ) => ({
    ...base,
    backgroundColor: props.isDisabled
      ? "rgba(var(--color-bg), 0.5)"
      : "rgb(var(--color-bg))",
    color: props.isDisabled ? "rgba(var(--text-color), 0.5)" : color,
    cursor: props.isDisabled ? "not-allowed" : "default",
    "&:active": {
      backgroundColor: !props.isDisabled
        ? "rgb(var(--color-primary))"
        : undefined,
      color: !props.isDisabled ? "#fff" : undefined
    }
  }),
  multiValueRemove: (base: CSSObjectWithLabel) => {
    return {
      ...base,
      color: "rgb(var(--text-color))",
      cursor: "pointer",
      "&:hover": {
        color: "rgb(var(--color-bg))",
        backgroundColor: "rgb(var(--text-color))"
      }
    };
  },
  multiValue: (base: CSSObjectWithLabel) => {
    return {
      ...base,
      backgroundColor: "rgb(var(--color-bg))",
      color
    };
  },
  singleValue: (base: CSSObjectWithLabel) => {
    return {
      ...base,
      backgroundColor: "rgb(var(--color-bg))",
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
      color: "rgb(var(--text-color))"
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
      backgroundColor: "rgb(var(--color-bg))",
      color,
      boxShadow: "none",
      borderWidth: "2px",
      borderColor: "rgb(var(--text-color))",
      borderRadius: 0,
      zIndex: 99999999
    };
  },
  indicatorSeparator: (base: CSSObjectWithLabel) => {
    return {
      ...base,
      backgroundColor: "rgb(var(--text-color))"
    };
  },
  clearIndicator: (base: CSSObjectWithLabel) => {
    return {
      ...base,
      color: "rgb(var(--text-color))",
      cursor: "pointer",
      "&:hover": {
        color: "rgb(var(--color-primary))"
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
      background: "##"
    },
    "::-webkit-scrollbar-thumb": {
      background: "rgb(var(--text-color))"
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "rgb(var(--text-color))"
    }
  }),
  groupHeading: (base: CSSObjectWithLabel) => ({
    ...base,
    color: "rgb(var(--text-color))",
    padding: "5px 10px",
    fontSize: "0.75rem"
  })
};
