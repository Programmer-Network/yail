import classNames from "classnames";
import React from "react";

import { IErrorProps } from "./types";

const Error: React.FC<IErrorProps> = (
  {
    error,
    title,
    description,
    backToText,
    className,
    onBackToClick,
    Icon,
    IconProps,
    onIconClick
  } = {
    error: "404 error",
    title: "Page not found.",
    description: ""
  }
) => {
  return (
    <div
      data-testid='error-wrapper'
      className={classNames("yl-flex yl-min-h-full yl-flex-col", className)}
    >
      <div className='yl-mx-auto yl-flex yl-w-full yl-flex-grow yl-flex-col yl-px-4 lg:yl-px-8'>
        <div className='yl-flex yl-flex-shrink-0 yl-justify-center'>
          <a
            onClick={onIconClick}
            className={classNames("yl-inline-flex", {
              "yl-cursor-pointer": onIconClick
            })}
          >
            {Icon && <Icon {...IconProps} />}
          </a>
        </div>
        <div>
          <div className='yl-text-center'>
            <p
              data-testid='error-text'
              className='yl-font-semibold yl-tracking-wide yl-text-primary md:yl-text-6xl'
            >
              {error}
            </p>
            <h1 className='yl-text-4xl yl-font-extrabold yl-tracking-tight yl-text-primary-text-color sm:yl-text-3xl'>
              {title}
            </h1>
            {description && (
              <p className='yl-text-xl yl-text-primary-text-color'>
                {description}
              </p>
            )}
            {backToText && (
              <div className='hover:yl-cursor-pointer'>
                <div
                  onClick={onBackToClick}
                  className='yl-font-medium yl-text-primary hover:yl-text-primary'
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

export default Error;
