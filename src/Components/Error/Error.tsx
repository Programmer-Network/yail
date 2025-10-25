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
      className={classNames("flex min-h-full flex-col", className)}
    >
      <div className='mx-auto flex w-full grow flex-col px-4 lg:px-8'>
        <div className='flex shrink-0 justify-center'>
          <a
            onClick={onIconClick}
            className={classNames("inline-flex", {
              "cursor-pointer": onIconClick
            })}
          >
            {IconProps && <Icon {...(IconProps as IIconProps)} />}
          </a>
        </div>
        <div>
          <div className='text-center'>
            <p
              data-testid='error-text'
              className='text-primary font-semibold tracking-wide md:text-6xl'
            >
              {error}
            </p>
            <h1 className='text-text text-4xl font-extrabold tracking-tight sm:text-3xl'>
              {title}
            </h1>
            {description && (
              <p className='text-secondary text-xl'>{description}</p>
            )}
            {backToText && (
              <div className='hover:cursor-pointer'>
                <div
                  onClick={onBackToClick}
                  className='text-text hover:text-text font-medium'
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
