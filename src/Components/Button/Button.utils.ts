import classNames from "classnames";

import { ButtonVariantEnum, IGetButtonClassesArgs } from "./types";

export const getStyles = (isLoading: boolean, isIconOnly?: boolean) => {
  const padding = isIconOnly
    ? "yl:p-2.5 yl:min-w-[2.5rem] yl:min-h-[2.5rem]"
    : "yl:px-3 yl:py-2";

  return {
    base: classNames(
      "yl:select-none yl:font-semibold yl:tracking-tight yl:rounded-md yl:border-2 yl:transition-all yl:duration-200 yl:transform yl:hover:scale-105",
      padding
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
    secondary: {
      default: "yl:border-text/20 yl:text-text/20 yl:fill-text/20",
      hover: classNames({
        "yl:hover:border-text/30 yl:hover:text-text/30 yl:hover:fill-text/30 yl:hover:bg-background/20":
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
  const { variant, disabled, outlined, isLoading, className, isIconOnly } =
    args;

  const styles = getStyles(isLoading, isIconOnly);

  return classNames(
    styles.base,
    disabled ? styles.disabled : styles.enabled,
    getVariantClasses(variant, disabled, outlined, isLoading),
    className
  );
};
