/**
 * @url https://react-select.com/styles
 */
export const styles = () => {
  const color = "var(--text-color)";
  return {
    input: styles => {
      return {
        ...styles,
        outline: "none",
        focus: "none",
        padding: "2px",
        color
      };
    },
    control: styles => {
      return {
        ...styles,
        backgroundColor: "transparent",
        borderWidth: "2px",
        borderColor: "var(--text-color)",
        borderRadius: 0,
        boxShadow: "none",
        color,
        "&:hover": {
          borderColor: "var(--text-color)"
        }
      };
    },
    option: (styles, { isDisabled }) => {
      return {
        ...styles,
        backgroundColor: "transparent",
        color,
        cursor: isDisabled ? "not-allowed" : "default",
        "&:active": {
          backgroundColor: "var(--color-primary)",
          color: "#fff"
        }
      };
    },
    multiValueRemove: styles => {
      return {
        ...styles,
        "&:hover": {
          backgroundColor: "var(--color-primary)",
          color: "#fff"
        }
      };
    },
    multiValue: styles => {
      return {
        ...styles,
        backgroundColor: "transparent",
        color
      };
    },
    singleValue: styles => {
      return {
        ...styles,
        backgroundColor: "transparent",
        color
      };
    },
    multiValueLabel: styles => {
      return {
        ...styles,
        color
      };
    },
    placeholder: styles => {
      return {
        ...styles,
        color: "var(--text-color)"
      };
    },
    valueContainer: styles => {
      return {
        ...styles,
        "&:focus-visible": {
          outline: "none",
          boxShadow: "none"
        }
      };
    },
    menu: styles => {
      return {
        ...styles,
        backgroundColor: "var(--color-bg)",
        color,
        boxShadow: "none",
        borderWidth: "2px",
        borderColor: "var(--text-color)",
        borderRadius: 0,
        zIndex: 99999999
      };
    },
    menuList: base => ({
      ...base,
      padding: 0,
      "::-webkit-scrollbar": {
        width: "10px"
      },
      "::-webkit-scrollbar-track": {
        background: "##"
      },
      "::-webkit-scrollbar-thumb": {
        background: "var(--text-color)"
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "var(--text-color)"
      }
    }),
    groupHeading: base => ({
      ...base,
      color: "var(--text-color)",
      padding: "5px 10px",
      fontSize: "0.75rem"
    })
  };
};
