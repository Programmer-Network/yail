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
    outlined = false
  } = {
    onClick: () => null,
    children: null,
    className: "",
    disabled: false,
    outlined: false,
    isLoading: false
  }
) => {
  let cls =
    "yl-select-none yl-border-2 yl-border-primary yl-px-3 yl-py-2 yl-font-semibold yl-tracking-tight yl-rounded-md ";

  if (disabled) {
    cls += "yl-cursor-not-allowed yl-opacity-70 ";
    if (outlined) {
      cls += "yl-text-primary ";
    } else {
      cls += "yl-text-primary-background-color yl-bg-primary ";
    }
  } else {
    if (outlined) {
      cls +=
        "yl-bg-transparent yl-text-primary yl-fill-primary hover:yl-bg-primary hover:yl-fill-primary-background-color hover:yl-text-primary-background-color";
    } else {
      cls +=
        "yl-bg-primary hover:yl-bg-transparent hover:yl-text-primary hover:yl-fill-primary yl-text-primary-background-color";
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
