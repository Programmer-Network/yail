import classNames from "classnames";
import React from "react";

import { IErrorProps } from "./types";

const Error: React.FC<IErrorProps> = ({
  error,
  title,
  description,
  backToText,
  className,
  onBackToClick,
  Icon,
  IconProps,
  onIconClick
}) => {
  return (
    <div
      data-testid='error-wrapper'
      className={classNames("flex min-h-full flex-col", className)}
    >
      <div className='mx-auto flex w-full flex-grow flex-col px-4 lg:px-8'>
        <div className='flex flex-shrink-0 justify-center'>
          <a
            onClick={onIconClick}
            className={classNames("inline-flex", {
              "cursor-pointer": onIconClick
            })}
          >
            {Icon && <Icon {...IconProps} />}
          </a>
        </div>
        <div>
          <div className='text-center'>
            <p
              data-testid='error-text'
              className='font-semibold tracking-wide text-primary md:text-6xl'
            >
              {error}
            </p>
            <h1 className='text-4xl font-extrabold tracking-tight text-primary-text-color sm:text-3xl'>
              {title}
            </h1>
            {description && (
              <p className='text-xl text-primary-text-color'>{description}</p>
            )}
            {backToText && (
              <div className='hover:cursor-pointer'>
                <div
                  onClick={onBackToClick}
                  className='font-medium text-primary hover:text-primary'
                >
                  {backToText}
                  <span aria-hidden='true'> &rarr;</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Error.defaultProps = {
  error: "404 error",
  title: "Page not found.",
  description: ""
};

export default Error;
