import classNames from "classnames";

import Icon from "Components/Icon";
import Spinner from "Components/Spinner";

import "./button-style.css";
import { IButtonProps } from "./types";

const Button: React.FC<IButtonProps> = (
  {
    onClick,
    children,
    className,
    disabled = false,
    type = "button",
    icon,
    isLoading = false,
    variant = "filled"
  } = {
    onClick: () => null,
    children: null,
    className: "",
    disabled: false,
    variant: "filled",
    isLoading: false
  }
) => {
  let cls =
    "yl-select-none yl-border-2 yl-px-3 yl-py-2 yl-font-semibold yl-tracking-tight yl-rounded-md ";

  if (disabled) {
    cls += "yl-cursor-not-allowed yl-opacity-70 ";
    if (variant === "outlined") {
      cls += "yl-text-primary yl-border-primary ";
    } else if (variant === "text") {
      cls += "yl-text-primary yl-border-transparent ";
    } else {
      cls +=
        "yl-text-primary-background-color yl-bg-primary yl-border-primary ";
    }
  } else {
    if (variant === "outlined") {
      cls +=
        "yl-bg-transparent yl-text-primary yl-fill-primary yl-border-primary hover:yl-bg-primary hover:yl-fill-primary-background-color hover:yl-text-primary-background-color ";
    } else if (variant === "text") {
      cls +=
        "yl-bg-transparent yl-text-primary yl-fill-primary yl-border-transparent hover:yl-bg-primary/10 ";
    } else {
      cls +=
        "yl-bg-primary yl-border-primary hover:yl-bg-transparent hover:yl-text-primary hover:yl-fill-primary yl-text-primary-background-color ";
    }
  }

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={classNames(cls, className)}
    >
      <div className='yl-relative yl-flex yl-items-center yl-justify-center'>
        <span
          className={classNames({
            "yl-flex yl-gap-1 yl-items-center": icon?.iconName,
            "yl-invisible": isLoading
          })}
        >
          {!isLoading && icon?.iconName && icon.iconPosition === "left" && (
            <Icon
              className={classNames(
                {
                  "yl-w-5": !icon?.iconClassName
                },
                icon?.iconClassName
              )}
              iconName={icon.iconName}
            />
          )}
          {children}
          {!isLoading && icon?.iconName && icon.iconPosition === "right" && (
            <Icon
              className={classNames(
                {
                  "yl-w-5": !icon?.iconClassName
                },
                icon?.iconClassName
              )}
              iconName={icon.iconName}
            />
          )}
        </span>
        <span className='yl-absolute'>
          {isLoading && <Spinner className={classNames("yl-h-8 yl-w-8")} />}
        </span>
      </div>
    </button>
  );
};

export default Button;
