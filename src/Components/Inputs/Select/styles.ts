import { CSSObjectWithLabel, OptionProps, StylesConfig } from "react-select";

import { Option } from "./types";

/**
 * @url https://react-select.com/styles
 */

const color = "rgb(var(--color-secondary))";

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
      backgroundColor: "rgb(var(--color-background))",
      borderWidth: "2px",
      borderColor: "rgb(var(--color-border))",
      borderRadius: 6,
      boxShadow: "none",
      color,
      "&:hover": {
        borderColor: "rgb(var(--color-border))"
      }
    };
  },
  option: (
    base: CSSObjectWithLabel,
    props: OptionProps<Option | undefined, false | true>
  ) => ({
    ...base,
    backgroundColor: props.isDisabled
      ? "rgba(var(--color-background), 0.5)"
      : "rgb(var(--color-background))",
    color: props.isDisabled ? "rgba(var(--color-secondary), 0.5)" : color,
    cursor: props.isDisabled ? "not-allowed" : "default",
    "&:active": {
      backgroundColor: !props.isDisabled
        ? "rgb(var(--color-background))"
        : undefined,
      color: !props.isDisabled ? "#fff" : undefined
    }
  }),
  multiValueRemove: (base: CSSObjectWithLabel) => {
    return {
      ...base,
      color: "rgb(var(--color-secondary))",
      cursor: "pointer",
      "&:hover": {
        color: "rgb(var(--color-text))",
        backgroundColor: "rgb(var(--color-error))"
      }
    };
  },
  multiValue: (base: CSSObjectWithLabel) => {
    return {
      ...base,
      backgroundColor: "rgb(var(--color-background))",
      color
    };
  },
  singleValue: (base: CSSObjectWithLabel) => {
    return {
      ...base,
      backgroundColor: "rgb(var(--color-background))",
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
      color: "rgb(var(--color-secondary))"
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
      backgroundColor: "rgb(var(--color-background))",
      color,
      boxShadow: "none",
      borderWidth: "2px",
      borderColor: "rgb(var(--color-border))",
      borderRadius: 0,
      zIndex: 99999999
    };
  },
  indicatorSeparator: (base: CSSObjectWithLabel) => {
    return {
      ...base,
      backgroundColor: "rgb(var(--color-border))"
    };
  },
  clearIndicator: (base: CSSObjectWithLabel) => {
    return {
      ...base,
      color: "rgb(var(--color-border))",
      cursor: "pointer",
      "&:hover": {
        color: "rgb(var(--color-error))"
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
      background: "rgb(var(--color-background))"
    },
    "::-webkit-scrollbar-thumb": {
      background: "rgb(var(--color-border))"
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "rgb(var(--color-border))"
    }
  }),
  groupHeading: (base: CSSObjectWithLabel) => ({
    ...base,
    color: "rgb(var(--color-border))",
    padding: "5px 10px",
    fontSize: "0.75rem"
  })
};
