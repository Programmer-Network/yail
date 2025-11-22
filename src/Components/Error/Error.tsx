import classNames from "classnames";
import React from "react";

import { Icon } from "../Icon";
import { IIconProps } from "../Icon/types";
import { IErrorProps } from "./types";

const Error: React.FC<IErrorProps> = (
  {
    error,
    title,
    description,
    backToText,
    className,
    onBackToClick,
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
      className={classNames("yl:flex yl:min-h-full yl:flex-col", className)}
    >
      <div className='yl:mx-auto yl:flex yl:w-full yl:grow yl:flex-col yl:px-4 yl:lg:px-8'>
        <div className='yl:flex yl:shrink-0 yl:justify-center'>
          <a
            onClick={onIconClick}
            className={classNames("yl:inline-flex", {
              "yl:cursor-pointer": onIconClick
            })}
          >
            {IconProps && <Icon {...(IconProps as IIconProps)} />}
          </a>
        </div>
        <div>
          <div className='yl:text-center'>
            <p
              data-testid='error-text'
              className='yl:text-primary yl:font-semibold yl:tracking-wide yl:md:text-6xl'
            >
              {error}
            </p>
            <h1 className='yl:text-text yl:text-4xl yl:font-extrabold yl:tracking-tight yl:sm:text-3xl'>
              {title}
            </h1>
            {description && (
              <p className='yl:text-secondary yl:text-xl'>{description}</p>
            )}
            {backToText && (
              <div className='yl:hover:cursor-pointer'>
                <div
                  onClick={onBackToClick}
                  className='yl:text-text yl:hover:text-text yl:font-medium'
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

export { Error };
