import classNames from "classnames";

import { Icon } from "../Icon";
import { Spinner } from "../Spinner";
import { getButtonClasses, getSizeClasses } from "./Button.utils";
import { ButtonSizeEnum, ButtonVariantEnum, IButtonProps } from "./types";

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
    ghost = false,
    fullWidth = false,
    variant = ButtonVariantEnum.PRIMARY,
    size = ButtonSizeEnum.MD
  } = {
    onClick: () => null,
    children: null,
    className: "",
    disabled: false,
    outlined: false,
    isLoading: false,
    ghost: false,
    fullWidth: false,
    variant: ButtonVariantEnum.PRIMARY,
    size: ButtonSizeEnum.MD
  }
) => {
  const isIconOnly = !children && !!icon?.iconName;
  const sizeClasses = getSizeClasses(size, isIconOnly);
  const defaultIconSize = sizeClasses.iconSize;

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
        isIconOnly,
        size,
        ghost,
        fullWidth
      })}
    >
      <div className='yl:relative yl:flex yl:items-center yl:justify-center'>
        <span
          className={classNames({
            "yl:flex yl:items-center": icon?.iconName && !isIconOnly,
            invisible: isLoading,
            "yl:gap-1": !icon?.iconGapClassName,
            [icon?.iconGapClassName || ""]: icon?.iconGapClassName
          })}
        >
          {!isLoading &&
            icon?.iconName &&
            (isIconOnly || icon.iconPosition === "left") && (
              <Icon
                className={classNames(
                  !icon?.iconClassName && defaultIconSize,
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
                  !icon?.iconClassName && defaultIconSize,
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
