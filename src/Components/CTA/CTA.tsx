import classNames from "classnames";
import { FC } from "react";

import { Button } from "../Button";
import { Icon } from "../Icon";
import { H3, Paragraph } from "../Typography";
import { ICTAProps } from "./types";

const CTA: FC<ICTAProps> = (
  {
    ButtonIconComponent,
    IconComponent,
    iconClassName,
    title,
    subtitle,
    buttonText,
    onClick
  } = {
    iconClassName: "",
    IconComponent: undefined,
    ButtonIconComponent: undefined,
    title: "",
    subtitle: "",
    buttonText: "",
    onClick: () => null
  }
) => {
  return (
    <div className='yl:flex yl:items-center yl:justify-center'>
      <div className='yl:flex yl:flex-col yl:items-center yl:text-center'>
        <div className='yl:flex yl:flex-col yl:items-center yl:justify-center yl:gap-4'>
          <div className='yl:flex yl:flex-col yl:gap-2'>
            {IconComponent && (
              <Icon
                iconName={IconComponent.iconName}
                dataTestId={IconComponent.dataTestId}
                className={classNames(
                  "yl:text-primary yl:mx-auto yl:w-14 yl:md:w-28",
                  iconClassName
                )}
              />
            )}

            <H3>{title}</H3>
            <Paragraph className='yl:text-secondary yl:mx-auto yl:max-w-md yl:text-center'>
              {subtitle}
            </Paragraph>
          </div>

          {buttonText && onClick && (
            <Button onClick={onClick}>
              <span className='yl:flex yl:items-center yl:gap-2'>
                {ButtonIconComponent && (
                  <Icon
                    iconName={ButtonIconComponent.iconName}
                    className='yl:w-4'
                    aria-hidden='true'
                  />
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

export { CTA };
