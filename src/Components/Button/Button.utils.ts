import classNames from "classnames";

import {
  ButtonSizeEnum,
  ButtonVariantEnum,
  IGetButtonClassesArgs
} from "./types";

export const getSizeClasses = (
  size: ButtonSizeEnum = ButtonSizeEnum.MD,
  isIconOnly?: boolean
) => {
  if (isIconOnly) {
    switch (size) {
      case ButtonSizeEnum.SM:
        return {
          padding: "yl:p-2",
          minDimensions: "yl:min-w-[2rem] yl:min-h-[2rem]",
          iconSize: "yl:w-4 yl:h-4"
        };
      case ButtonSizeEnum.LG:
        return {
          padding: "yl:p-3",
          minDimensions: "yl:min-w-[3rem] yl:min-h-[3rem]",
          iconSize: "yl:w-6 yl:h-6"
        };
      default: // MD
        return {
          padding: "yl:p-2.5",
          minDimensions: "yl:min-w-[2.5rem] yl:min-h-[2.5rem]",
          iconSize: "yl:w-5 yl:h-5"
        };
    }
  }

  switch (size) {
    case ButtonSizeEnum.SM:
      return {
        padding: "yl:px-2 yl:py-1",
        fontSize: "yl:text-xs",
        iconSize: "yl:w-4 yl:h-4"
      };
    case ButtonSizeEnum.LG:
      return {
        padding: "yl:px-4 yl:py-3",
        fontSize: "yl:text-base",
        iconSize: "yl:w-6 yl:h-6"
      };
    default: // MD
      return {
        padding: "yl:px-3 yl:py-2",
        fontSize: "yl:text-sm",
        iconSize: "yl:w-5 yl:h-5"
      };
  }
};

export const getStyles = (
  isLoading: boolean,
  isIconOnly?: boolean,
  size: ButtonSizeEnum = ButtonSizeEnum.MD
) => {
  const sizeClasses = getSizeClasses(size, isIconOnly);
  const padding = sizeClasses.padding;
  const fontSize = "fontSize" in sizeClasses ? sizeClasses.fontSize : "";
  const minDimensions =
    "minDimensions" in sizeClasses ? sizeClasses.minDimensions : "";

  return {
    base: classNames(
      "yl:select-none yl:font-semibold yl:tracking-tight yl:rounded-md yl:border yl:transition-all yl:duration-200 yl:transform yl:hover:scale-105",
      padding,
      fontSize,
      minDimensions
    ),
    disabled: "yl:cursor-not-allowed yl:opacity-70",
    enabled: classNames({
      "yl:cursor-pointer": !isLoading
    }),
    primary: {
      default: "yl:border-primary yl:bg-primary yl:text-background",
      outlined:
        "yl:border-primary yl:bg-transparent yl:text-primary yl:fill-primary",
      hover: classNames({
        "yl:hover:bg-transparent yl:hover:text-primary": !isLoading,
        "yl:hover:fill-background": isLoading
      }),
      hoverOutlined: classNames({
        "yl:hover:bg-primary yl:hover:text-background yl:hover:fill-background":
          !isLoading
      })
    },
    error: {
      default: "yl:border-error yl:bg-error yl:text-background yl:fill-bg",
      outlined: "yl:border-error yl:bg-transparent yl:text-error yl:fill-error",
      hover: classNames({
        "yl:hover:bg-transparent yl:hover:text-error yl:hover:fill-error":
          !isLoading
      }),
      hoverOutlined: classNames({
        "yl:hover:bg-error yl:hover:text-background yl:hover:fill-background":
          !isLoading
      })
    },
    success: {
      default:
        "yl:border-success yl:bg-success yl:text-background yl:fill-background",
      outlined:
        "yl:border-success yl:bg-transparent yl:text-success yl:fill-success",
      hover: classNames({
        "yl:hover:bg-transparent yl:hover:text-success yl:hover:fill-success":
          !isLoading,
        "yl:hover:fill-background": isLoading
      }),
      hoverOutlined: classNames({
        "yl:hover:bg-success yl:hover:text-background yl:hover:fill-background":
          !isLoading
      })
    },
    warning: {
      default:
        "yl:border-warning yl:bg-warning yl:text-background yl:fill-background",
      outlined:
        "yl:border-warning yl:bg-transparent yl:text-warning yl:fill-warning",
      hover: classNames({
        "yl:hover:bg-transparent yl:hover:text-warning yl:hover:fill-warning":
          !isLoading,
        "yl:hover:fill-background": isLoading
      }),
      hoverOutlined: classNames({
        "yl:hover:bg-warning yl:hover:text-background yl:hover:fill-background":
          !isLoading
      })
    },
    secondary: {
      default: "yl:border-text/20 yl:text-text/20 yl:fill-text/20",
      hover: classNames({
        "yl:hover:border-text/30 yl:hover:text-text/30 yl:hover:fill-text/30 yl:hover:bg-background/20":
          !isLoading
      })
    },
    ghost: {
      primary: "yl:text-primary yl:fill-primary",
      secondary: "yl:text-text/60 yl:fill-text/60",
      error: "yl:text-error yl:fill-error",
      success: "yl:text-success yl:fill-success",
      warning: "yl:text-warning yl:fill-warning",
      hover: classNames({
        "yl:hover:bg-text/5": !isLoading
      }),
      hoverPrimary: classNames({
        "yl:hover:bg-primary/10": !isLoading
      }),
      hoverError: classNames({
        "yl:hover:bg-error/10": !isLoading
      }),
      hoverSuccess: classNames({
        "yl:hover:bg-success/10": !isLoading
      }),
      hoverWarning: classNames({
        "yl:hover:bg-warning/10": !isLoading
      })
    }
  };
};

export const getVariantClasses = (
  variant: ButtonVariantEnum,
  disabled: boolean,
  outlined: boolean,
  isLoading: boolean,
  ghost?: boolean
) => {
  const styles = getStyles(isLoading, false);

  if (ghost) {
    const ghostClasses = [styles.ghost.hover];
    switch (variant) {
      case ButtonVariantEnum.PRIMARY:
        ghostClasses.push(styles.ghost.primary, styles.ghost.hoverPrimary);
        break;
      case ButtonVariantEnum.SECONDARY:
        ghostClasses.push(styles.ghost.secondary);
        break;
      case ButtonVariantEnum.ERROR:
        ghostClasses.push(styles.ghost.error, styles.ghost.hoverError);
        break;
      case ButtonVariantEnum.SUCCESS:
        ghostClasses.push(styles.ghost.success, styles.ghost.hoverSuccess);
        break;
      case ButtonVariantEnum.WARNING:
        ghostClasses.push(styles.ghost.warning, styles.ghost.hoverWarning);
        break;
    }
    return classNames(...ghostClasses);
  }

  if (variant === ButtonVariantEnum.PRIMARY) {
    return outlined
      ? `${styles.primary.outlined} ${!disabled && styles.primary.hoverOutlined}`
      : `${styles.primary.default} ${!disabled && styles.primary.hover}`;
  } else if (variant === ButtonVariantEnum.ERROR) {
    return outlined
      ? `${styles.error.outlined} ${!disabled && styles.error.hoverOutlined}`
      : `${styles.error.default} ${!disabled && styles.error.hover}`;
  } else if (variant === ButtonVariantEnum.SUCCESS) {
    return outlined
      ? `${styles.success.outlined} ${!disabled && styles.success.hoverOutlined}`
      : `${styles.success.default} ${!disabled && styles.success.hover}`;
  } else if (variant === ButtonVariantEnum.WARNING) {
    return outlined
      ? `${styles.warning.outlined} ${!disabled && styles.warning.hoverOutlined}`
      : `${styles.warning.default} ${!disabled && styles.warning.hover}`;
  } else if (variant === ButtonVariantEnum.SECONDARY) {
    return `${styles.secondary.default} ${!disabled && styles.secondary.hover}`;
  }

  return "";
};

export const getButtonClasses = (args: IGetButtonClassesArgs) => {
  const {
    variant,
    disabled,
    outlined,
    isLoading,
    className,
    isIconOnly,
    size = ButtonSizeEnum.MD,
    ghost = false,
    fullWidth = false
  } = args;

  const styles = getStyles(isLoading, isIconOnly, size);

  return classNames(
    styles.base,
    disabled ? styles.disabled : styles.enabled,
    ghost ? "yl:bg-transparent yl:border-transparent" : "",
    getVariantClasses(variant, disabled, outlined, isLoading, ghost),
    fullWidth ? "yl:w-full" : "",
    className
  );
};
