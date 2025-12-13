import classNames from "classnames";

import { Icon } from "../Icon";
import { Spinner } from "../Spinner";
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
  const isIconOnly = !children && !!icon?.iconName;

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
        isLoading,
        isIconOnly
      })}
    >
      <div className='yl:relative yl:flex yl:items-center yl:justify-center'>
        <span
          className={classNames({
            "yl:flex yl:items-center yl:gap-1": icon?.iconName && !isIconOnly,
            invisible: isLoading
          })}
        >
          {!isLoading &&
            icon?.iconName &&
            (isIconOnly || icon.iconPosition === "left") && (
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
          <span className={classNames({ "yl:invisible": isLoading })}>
            {children}
          </span>
          {!isLoading &&
            !isIconOnly &&
            icon?.iconName &&
            icon.iconPosition === "right" && (
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
          {!isIconOnly &&
            isLoading &&
            icon?.iconName &&
            icon.iconPosition === "right" && (
              <Spinner className={classNames("yl:w-4")} />
            )}
        </span>
        <span className='yl:absolute'>
          {isLoading && <Spinner className={classNames("yl:w-6")} />}
        </span>
      </div>
    </button>
  );
};

export { Button };
