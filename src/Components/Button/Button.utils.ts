import classNames from "classnames";

import { ButtonVariantEnum, IGetButtonClassesArgs } from "./types";

export const getStyles = (isLoading: boolean) => {
  return {
    base: "select-none px-3 py-2 font-semibold tracking-tight rounded-md border-2 transition-all duration-200 transform hover:scale-105",
    disabled: "cursor-not-allowed opacity-70",
    enabled: classNames({
      "cursor-pointer": !isLoading
    }),
    primary: {
      default: "border-primary bg-primary text-background",
      outlined: "border-primary bg-transparent text-primary fill-primary",
      hover: classNames({
        "hover:bg-transparent hover:text-primary": !isLoading,
        "hover:fill-background": isLoading
      }),
      hoverOutlined: classNames({
        "hover:bg-primary hover:text-background hover:fill-background":
          !isLoading
      })
    },
    error: {
      default: "border-error bg-error text-background fill-bg",
      outlined: "border-error bg-transparent text-error fill-error",
      hover: classNames({
        "hover:bg-transparent hover:text-error hover:fill-error": !isLoading
      }),
      hoverOutlined: classNames({
        "hover:bg-error hover:text-background hover:fill-background": !isLoading
      })
    },
    secondary: {
      default: "border-text/20 text-text/20 fill-text/20",
      hover: classNames({
        "hover:border-text/30 hover:text-text/30 hover:fill-text/30 hover:bg-background/20":
          !isLoading
      })
    }
  };
};

export const getVariantClasses = (
  variant: ButtonVariantEnum,
  disabled: boolean,
  outlined: boolean,
  isLoading: boolean
) => {
  const styles = getStyles(isLoading);

  if (variant === ButtonVariantEnum.PRIMARY) {
    return outlined
      ? `${styles.primary.outlined} ${!disabled && styles.primary.hoverOutlined}`
      : `${styles.primary.default} ${!disabled && styles.primary.hover}`;
  } else if (variant === ButtonVariantEnum.ERROR) {
    return outlined
      ? `${styles.error.outlined} ${!disabled && styles.error.hoverOutlined}`
      : `${styles.error.default} ${!disabled && styles.error.hover}`;
  } else if (variant === ButtonVariantEnum.SECONDARY) {
    return `${styles.secondary.default} ${!disabled && styles.secondary.hover}`;
  }

  return "";
};

export const getButtonClasses = (args: IGetButtonClassesArgs) => {
  const { variant, disabled, outlined, isLoading, className } = args;

  const styles = getStyles(isLoading);

  return classNames(
    styles.base,
    disabled ? styles.disabled : styles.enabled,
    getVariantClasses(variant, disabled, outlined, isLoading),
    className
  );
};
