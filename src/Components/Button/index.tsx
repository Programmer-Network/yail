import classNames from "classnames";

import Spinner from "Components/Spinner";

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
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={classNames(
        "select-none border-2 border-primary px-3 py-2 text-sm font-semibold uppercase tracking-tight shadow-lg",
        className,
        {
          "cursor-not-allowed opacity-70": disabled,
          "text-primary": outlined && !disabled,
          "text-primary-background-color": !outlined || disabled,
          "!text-bg-primary-background-color !bg-primary":
            !outlined && disabled,
          "hover:bg-transparent": !outlined && isLoading,
          "bg-primary hover:bg-transparent hover:text-primary":
            !outlined && !disabled,
          "hover:bg-primary hover:text-primary-background-color":
            outlined && !disabled,
          "!bg-transparent !text-primary": outlined && disabled
        }
      )}
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
