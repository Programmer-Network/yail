import classNames from "classnames";

import Spinner from "Components/Spinner";

import "./style.css";
import { IButtonProps } from "./types";

const Button: React.FC<IButtonProps> = ({
  onClick,
  children,
  className,
  disabled = false,
  type = "button",
  isLoading = false,
  outlined = false
}) => {
  let buttonClasses =
    "select-none border-2 border-primary px-3 py-2 text-sm font-semibold uppercase tracking-tight shadow-lg";

  if (outlined) {
    if (disabled) {
      buttonClasses +=
        " cursor-not-allowed opacity-70 !bg-transparent !text-primary";
    } else {
      buttonClasses +=
        " text-primary hover:bg-primary hover:text-primary-background-color";
    }
  } else {
    if (disabled) {
      buttonClasses +=
        " cursor-not-allowed opacity-70 !text-bg-primary-background-color !bg-primary";
    } else {
      buttonClasses +=
        " bg-primary text-primary-background-color hover:bg-transparent hover:text-primary";
      if (isLoading) {
        buttonClasses += " hover:bg-transparent";
      }
    }
  }

  if (className) {
    buttonClasses += ` ${className}`;
  }

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={classNames("relative", buttonClasses)}
    >
      <div className='relative flex items-center justify-center'>
        <span
          className={classNames({
            invisible: isLoading
          })}
        >
          {children}
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
