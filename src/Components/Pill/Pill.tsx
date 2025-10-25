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
    "inline-flex items-center justify-center font-medium rounded-full transition-colors ring-1 ring-inset";

  const sizeClasses: Record<PillSize, string> = {
    [PillSize.SMALL]: "px-2 py-0.5 text-xs",
    [PillSize.MEDIUM]: "px-2 py-1 text-xs",
    [PillSize.LARGE]: "px-3 py-1.5 text-sm"
  };

  const variantClasses: Record<PillVariant, string> = {
    primary: "bg-primary/10 text-primary ring-primary/20",
    secondary: "bg-muted/10 text-muted ring-muted/20",
    success: "bg-green-500/10 text-green-400 ring-green-500/20",
    error: "bg-red-500/10 text-red-400 ring-red-500/20",
    warning: "bg-yellow-500/10 text-yellow-400 ring-yellow-500/20",
    indigo: "bg-indigo-500/10 text-indigo-400 ring-indigo-500/20",
    purple: "bg-purple-500/10 text-purple-400 ring-purple-500/20",
    pink: "bg-pink-500/10 text-pink-400 ring-pink-500/20"
  };

  const hoverClasses: Record<PillVariant, string> = {
    primary: "hover:bg-primary/20",
    secondary: "hover:bg-muted/20",
    success: "hover:bg-green-500/20",
    error: "hover:bg-red-500/20",
    warning: "hover:bg-yellow-500/20",
    indigo: "hover:bg-indigo-500/20",
    purple: "hover:bg-purple-500/20",
    pink: "hover:bg-pink-500/20"
  };

  const pillClasses = classNames(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    {
      [hoverClasses[variant] as string]: clickable && !disabled,
      "cursor-pointer": clickable && !disabled,
      "cursor-not-allowed opacity-50": disabled,
      "cursor-default": !clickable && !disabled
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
