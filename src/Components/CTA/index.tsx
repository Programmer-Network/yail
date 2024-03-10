import classNames from "classnames";
import { FC } from "react";

import Button from "Components/Button";
import { H2 } from "Components/Typography";

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
      <div className='flex flex-col items-center text-center'>
        <div className='flex flex-col items-center justify-center gap-4'>
          <div className='flex flex-col gap-2'>
            {Icon && (
              <Icon
                className={classNames(
                  "mx-auto w-14 text-primary md:w-28",
                  iconClassName
                )}
              />
            )}

            <H2 className='!mb-0 text-primary-text-color'>{title}</H2>
            <p className='mx-auto max-w-md text-primary-text-color'>
              {subtitle}
            </p>
          </div>

          {buttonText && onClick && (
            <Button onClick={onClick}>
              <span className='flex items-center gap-2'>
                {ButtonIcon && (
                  <ButtonIcon className='w-4' aria-hidden='true' />
                )}
                {buttonText}
              </span>
            </Button>
          )}
        </div>
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
