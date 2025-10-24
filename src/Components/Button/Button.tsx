import classNames from "classnames";

import Icon from "../Icon";
import Spinner from "../Spinner";
import { getButtonClasses } from "./Button.utils";
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
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={getButtonClasses({
        variant,
        disabled,
        outlined,
        className,
        isLoading
      })}
    >
      <div className='relative flex items-center justify-center'>
        <span
          className={classNames({
            "flex items-center gap-1": icon?.iconName,
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

export default Button;
