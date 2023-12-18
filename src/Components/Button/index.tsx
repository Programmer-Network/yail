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
  let cls =
    "select-none border-2 border-primary px-3 py-2 text-sm font-semibold uppercase tracking-tight shadow-lg ";

  if (disabled) {
    cls += "cursor-not-allowed opacity-70 ";
    if (outlined) {
      cls += "text-primary ";
    } else {
      cls += "text-bg-primary-background-color bg-primary ";
    }
  } else {
    if (outlined) {
      cls +=
        "bg-transparent text-primary hover:bg-primary hover:text-primary-background-color";
    } else {
      cls += "bg-primary hover:bg-transparent hover:text-primary";
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
