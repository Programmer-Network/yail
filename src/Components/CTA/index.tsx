import classNames from "classnames";
import React, { FC } from "react";

import Button from "Components/Button";

import { ICTAProps } from "./types";

const CTA: FC<ICTAProps> = ({
  Icon,
  ButtonIcon,
  iconClassName,
  title,
  subtitle,
  buttonText,
  onClick
}) => {
  return (
    <div className='flex items-center justify-center'>
      <div className='flex flex-col items-center gap-4 text-center'>
        <div className='flex flex-col items-center justify-center'>
          {Icon && (
            <Icon
              className={classNames(
                "mx-auto mb-4 h-12 text-primary-text-color dark:text-primary-text-color md:mb-0 md:h-24",
                iconClassName
              )}
            />
          )}

          <h3 className='text-sm font-medium text-primary-text-color md:text-2xl'>
            {title}
          </h3>
          <p className='mx-auto mt-1 max-w-md text-sm text-primary md:text-xl'>
            {subtitle}
          </p>
        </div>
        {buttonText && onClick && (
          <div className='mt-6'>
            <Button onClick={onClick} outlined>
              <span className='flex items-center gap-2'>
                {ButtonIcon && (
                  <ButtonIcon className='h-4 w-4' aria-hidden='true' />
                )}
                {buttonText}
              </span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

CTA.defaultProps = {
  iconClassName: "",
  Icon: undefined,
  ButtonIcon: undefined,
  title: "",
  subtitle: "",
  buttonText: "",
  onClick: () => null
};

export default CTA;
