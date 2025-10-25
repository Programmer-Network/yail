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
    <div className='flex items-center justify-center'>
      <div className='flex flex-col items-center text-center'>
        <div className='flex flex-col items-center justify-center gap-4'>
          <div className='flex flex-col gap-2'>
            {IconComponent && (
              <Icon
                iconName={IconComponent.iconName}
                dataTestId={IconComponent.dataTestId}
                className={classNames(
                  "text-primary mx-auto w-14 md:w-28",
                  iconClassName
                )}
              />
            )}

            <H3>{title}</H3>
            <Paragraph className='text-secondary mx-auto max-w-md text-center'>
              {subtitle}
            </Paragraph>
          </div>

          {buttonText && onClick && (
            <Button onClick={onClick}>
              <span className='flex items-center gap-2'>
                {ButtonIconComponent && (
                  <Icon
                    iconName={ButtonIconComponent.iconName}
                    className='w-4'
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
