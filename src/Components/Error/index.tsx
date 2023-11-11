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
    <>
      <div
        className={classNames(
          "flex min-h-full flex-col pb-12 pt-16",
          className
        )}
      >
        <main className='mx-auto flex w-full max-w-7xl flex-grow flex-col px-4 lg:px-8'>
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
              <p className='font-semibold uppercase tracking-wide text-primary md:text-6xl'>
                {error}
              </p>
              <h1 className='mt-2 text-4xl font-extrabold tracking-tight text-primary-text-color sm:text-3xl'>
                {title}
              </h1>
              {description && (
                <p className='mt-3 text-xl text-primary-text-color'>
                  {description}
                </p>
              )}
              {backToText && (
                <div className='mt-6'>
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
        </main>
      </div>
    </>
  );
};

Error.defaultProps = {
  error: "404 error",
  title: "Page not found.",
  description: ""
};

export default Error;
