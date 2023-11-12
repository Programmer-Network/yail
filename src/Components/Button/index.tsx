import classNames from "classnames";
import { useState } from "react";

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
  const [isHovering, setIsHovering] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
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
          "!text-primary-background-color hover:bg-transparent":
            !outlined && isLoading,
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
          {isLoading && (
            <Spinner
              className={classNames("h-8 w-8", {
                "text-text-primary-background-color": outlined && isHovering,
                "text-primary":
                  (outlined && !isHovering) ||
                  (isHovering && isLoading && !outlined),
                "text-primary-background-color":
                  isHovering && isLoading && outlined
              })}
            />
          )}
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
