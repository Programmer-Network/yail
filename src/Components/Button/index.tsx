import classNames from 'classnames';
import { useState } from 'react';

import Spinner from '../Spinner';
import { IButtonProps } from './types';

const Button: React.FC<IButtonProps> = ({
  onClick,
  children,
  className,
  disabled = false,
  type = 'button',
  isLoading = false,
  outlined = false,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const getSpinnerClass = () =>
    classNames('w-8 h-8', {
      'text-text-primary-background-color': outlined && isHovering,
      'text-primary': outlined && !isHovering,
    });

  const getStyles = () =>
    classNames(
      'border-2',
      {
        'text-primary border-primary': outlined,
        'text-primary-background-color border-primary': !outlined,
      },
      {
        'hover:bg-primary hover:text-primary-background-color':
          outlined && !disabled,
        'bg-primary hover:text-primary hover:bg-transparent':
          !outlined && !disabled,
        '!bg-primary !text-bg-primary-background-color !opacity-80':
          !outlined && disabled,
        '!bg-transparent !text-primary !opacity-80': outlined && disabled,
        'hover:bg-transparent !text-primary-background-color':
          !outlined && isLoading,
      }
    );

  return (
    <button
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={classNames(
        getStyles(),
        'px-3 py-2 text-sm font-semibold uppercase tracking-tight select-none',
        className,
        {
          'cursor-not-allowed opacity-75': disabled,
        }
      )}
    >
      <div className="flex items-center justify-center relative">
        <span
          className={classNames({
            invisible: isLoading,
          })}
        >
          {children}
        </span>
        <span className="absolute">
          {isLoading && <Spinner className={getSpinnerClass()} />}
        </span>
      </div>
    </button>
  );
};

Button.defaultProps = {
  onClick: () => null,
  children: null,
  className: '',
  disabled: false,
  outlined: false,
  isLoading: false,
  spinnerColor: '',
};

export default Button;
