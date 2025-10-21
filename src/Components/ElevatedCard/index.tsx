import classNames from "classnames";
import React from "react";

import Icon from "../Icon";
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
        "flex flex-col rounded-lg p-6 border border-border bg-text/1",
        {
          "cursor-pointer hover:bg-text/3": onClick
        },
        className
      )}
      onClick={onClick}
    >
      {icon && (
        <div className='mb-4'>
          <div className='inline-flex items-center justify-center rounded-md p-2 border border-primary'>
            <Icon {...(icon as IIconProps)} />
          </div>
        </div>
      )}
      <div className='space-y-2'>
        <H5>{title}</H5>
        {description && <Paragraph>{description}</Paragraph>}
        {children && <div className='mt-4'>{children}</div>}
      </div>
    </div>
  );
};

export default ElevatedCard;
