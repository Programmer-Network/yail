import classNames from "classnames";

import Icon from "Components/Icon";
import Spinner from "Components/Spinner";

import "./button-style.css";
import { IButtonProps } from "./types";

const Button: React.FC<IButtonProps> = ({
  onClick,
  children,
  className,
  disabled = false,
  type = "button",
  icon,
  isLoading = false,
  outlined = false
}) => {
  let cls =
    "select-none border-2 border-primary px-3 py-2 font-semibold tracking-tight rounded-md ";

  if (disabled) {
    cls += "cursor-not-allowed opacity-70 ";
    if (outlined) {
      cls += "text-primary ";
    } else {
      cls += "text-primary-background-color bg-primary ";
    }
  } else {
    if (outlined) {
      cls +=
        "bg-transparent text-primary fill-primary hover:bg-primary hover:fill-primary-background-color hover:text-primary-background-color";
    } else {
      cls +=
        "bg-primary hover:bg-transparent hover:text-primary hover:fill-primary text-primary-background-color";
    }
  }

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={classNames(cls, className)}
    >
      <div className='relative flex items-center justify-center'>
        <span
          className={classNames({
            "flex gap-1 items-center": icon?.iconName,
            invisible: isLoading
          })}
        >
          {!isLoading && icon?.iconName && icon.iconPosition === "left" && (
            <Icon
              className={classNames(
                {
                  "w-5": !icon?.iconClassName
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
                  "w-5": !icon?.iconClassName
                },
                icon?.iconClassName
              )}
              iconName={icon.iconName}
            />
          )}
        </span>
        <span className='absolute'>
          {isLoading && <Spinner className={classNames("h-8 w-8")} />}
        </span>
      </div>
    </button>
  );
};

Button.defaultProps = {
  onClick: () => null,
  children: null,
  className: "",
  disabled: false,
  outlined: false,
  isLoading: false
};

export default Button;
