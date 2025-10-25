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
        "border-border bg-text/1 flex flex-col rounded-lg border p-6",
        {
          "hover:bg-text/3 cursor-pointer": onClick
        },
        className
      )}
      onClick={onClick}
    >
      {icon && (
        <div className='mb-4'>
          <div className='border-primary inline-flex items-center justify-center rounded-md border p-2'>
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

export { ElevatedCard };
