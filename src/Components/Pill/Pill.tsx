import classNames from "classnames";
import { FC } from "react";

import { IPillProps, PillSize, PillVariant } from "./Pill.types";

const Pill: FC<IPillProps> = ({
  children,
  variant = PillVariant.PRIMARY,
  size = PillSize.MEDIUM,
  clickable = false,
  onClick,
  className,
  disabled = false,
  ...props
}) => {
  const baseClasses =
    "yl:inline-flex yl:items-center yl:justify-center yl:font-medium yl:rounded-full yl:transition-colors yl:ring-1 yl:ring-inset";

  const sizeClasses: Record<PillSize, string> = {
    [PillSize.SMALL]: "yl:px-2 yl:py-0.5 yl:text-xs",
    [PillSize.MEDIUM]: "yl:px-2 yl:py-1 yl:text-xs",
    [PillSize.LARGE]: "yl:px-3 yl:py-1.5 yl:text-sm"
  };

  const variantClasses: Record<PillVariant, string> = {
    primary: "yl:bg-primary/10 yl:text-primary yl:ring-primary/20",
    secondary: "yl:bg-muted/10 yl:text-muted yl:ring-muted/20",
    success: "yl:bg-green-500/10 yl:text-green-400 yl:ring-green-500/20",
    error: "yl:bg-red-500/10 yl:text-red-400 yl:ring-red-500/20",
    warning: "yl:bg-yellow-500/10 yl:text-yellow-400 yl:ring-yellow-500/20",
    indigo: "yl:bg-indigo-500/10 yl:text-indigo-400 yl:ring-indigo-500/20",
    purple: "yl:bg-purple-500/10 yl:text-purple-400 yl:ring-purple-500/20",
    pink: "yl:bg-pink-500/10 yl:text-pink-400 yl:ring-pink-500/20"
  };

  const hoverClasses: Record<PillVariant, string> = {
    primary: "yl:hover:bg-primary/20",
    secondary: "yl:hover:bg-muted/20",
    success: "yl:hover:bg-green-500/20",
    error: "yl:hover:bg-red-500/20",
    warning: "yl:hover:bg-yellow-500/20",
    indigo: "yl:hover:bg-indigo-500/20",
    purple: "yl:hover:bg-purple-500/20",
    pink: "yl:hover:bg-pink-500/20"
  };

  const pillClasses = classNames(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    {
      [hoverClasses[variant] as string]: clickable && !disabled,
      "yl:cursor-pointer": clickable && !disabled,
      "yl:cursor-not-allowed yl:opacity-50": disabled,
      "yl:cursor-default": !clickable && !disabled
    },
    className
  );

  if (clickable) {
    return (
      <button
        className={pillClasses}
        onClick={onClick}
        disabled={disabled}
        type='button'
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <span className={pillClasses} {...props}>
      {children}
    </span>
  );
};

export { Pill };
