import classNames from "classnames";

import Icon from "Components/Icon";
import Spinner from "Components/Spinner";

import "./button-style.css";
import { ButtonVariantEnum, IButtonProps } from "./types";

const Button: React.FC<IButtonProps> = (
  {
    onClick,
    children,
    className,
    disabled = false,
    type = "button",
    icon,
    isLoading = false,
    outlined = false,
    variant = ButtonVariantEnum.PRIMARY
  } = {
    onClick: () => null,
    children: null,
    className: "",
    disabled: false,
    outlined: false,
    isLoading: false,
    variant: ButtonVariantEnum.PRIMARY
  }
) => {
  let cls =
    "yl:select-none yl:px-3 yl:py-2 yl:font-semibold yl:tracking-tight yl:rounded-md ";

  if (variant === ButtonVariantEnum.PRIMARY) {
    cls += "yl:border-2 yl:border-primary ";
  }

  if (disabled) {
    cls += "yl:cursor-not-allowed yl:opacity-70 ";
    if (variant === ButtonVariantEnum.SECONDARY) {
      cls += "yl:text-text ";
    } else if (outlined) {
      cls += "yl:text-primary ";
    } else {
      cls += "yl:text-background yl:bg-primary ";
    }
  } else {
    if (variant === ButtonVariantEnum.SECONDARY) {
      cls += "yl:text-text yl:hover:opacity-80 ";
    } else if (outlined) {
      cls +=
        "yl:bg-transparent yl:text-primary yl:fill-primary yl:hover:bg-primary yl:hover:fill-background yl:hover:text-background";
    } else {
      cls +=
        "yl:bg-primary yl:hover:text-primary yl:hover:bg-transparent yl:hover:text-primary yl:hover:fill-primary yl:text-background";
    }
  }

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={classNames(cls, className)}
    >
      <div className='yl:relative yl:flex yl:items-center yl:justify-center'>
        <span
          className={classNames({
            "yl:flex yl:gap-1 yl:items-center": icon?.iconName,
            "yl:invisible": isLoading
          })}
        >
          {!isLoading && icon?.iconName && icon.iconPosition === "left" && (
            <Icon
              className={classNames(
                {
                  "yl:w-5": !icon?.iconClassName
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
                  "yl:w-5": !icon?.iconClassName
                },
                icon?.iconClassName
              )}
              iconName={icon.iconName}
            />
          )}
        </span>
        <span className='yl:absolute'>
          {isLoading && <Spinner className={classNames("yl:h-8 yl:w-8")} />}
        </span>
      </div>
    </button>
  );
};

export default Button;
