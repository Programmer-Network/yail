import classNames from "classnames";
import React from "react";

import { Icon } from "../Icon";
import { IIconProps } from "../Icon/types";
import { H5, Paragraph } from "../Typography";
import { IElevatedCardProps } from "./types";

const ElevatedCard: React.FC<IElevatedCardProps> = ({
  title,
  description,
  icon,
  children,
  className,
  onClick,
  dataTestId = "elevated-card"
}) => {
  return (
    <div
      data-testid={dataTestId}
      className={classNames(
        "yl:border-border yl:bg-text/1 yl:flex yl:flex-col yl:rounded-lg yl:p-6 yl:border",
        {
          "yl:hover:bg-text/3 yl:cursor-pointer": onClick
        },
        className
      )}
      onClick={onClick}
    >
      {icon && (
        <div className='yl:mb-4'>
          <div className='yl:border-primary yl:inline-flex yl:items-center yl:justify-center yl:rounded-md yl:p-2 yl:border'>
            <Icon {...(icon as IIconProps)} />
          </div>
        </div>
      )}
      <div className='yl:space-y-2'>
        <H5>{title}</H5>
        {description && <Paragraph>{description}</Paragraph>}
        {children && <div className='yl:mt-4'>{children}</div>}
      </div>
    </div>
  );
};

export { ElevatedCard };
