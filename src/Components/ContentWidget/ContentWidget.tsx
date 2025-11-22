import classNames from "classnames";
import { type ReactElement } from "react";

import { Divider } from "../Divider";
import { Icon } from "../Icon";
import { Tooltip } from "../Tooltip";
import { Paragraph } from "../Typography";
import { IContentWidgetBaseItem, IContentWidgetProps } from "./types";

const ContentWidget = <T extends IContentWidgetBaseItem>({
  title,
  className,
  isLoading,
  items,
  more
}: IContentWidgetProps<T>): ReactElement => {
  if (isLoading) {
    return (
      <div className='yl:flex yl:items-center yl:justify-center'>
        <Icon
          iconName='IconSpinner'
          className='yl:fill-primary yl:w-12'
          dataTestId='icon-spinner'
        />
      </div>
    );
  }

  return (
    <div
      className={classNames(
        "yl:border-border/40 yl:relative yl:rounded-md yl:border-2 yl:px-8 yl:pt-4",
        className
      )}
    >
      <div>
        <div className='group yl:rounded-md'>
          <div
            className={classNames(
              "yl:flex yl:items-center yl:justify-between yl:gap-2"
            )}
          >
            {more && more.iconName && (
              <Icon
                iconName={more.iconName}
                className={classNames(more.iconClassName, {
                  "yl:w-4": !more.iconClassName
                })}
              />
            )}
            <span className='yl:text-text yl:font-bold'>{title}</span>
            {more && (
              <Tooltip id='see-more-tooltip' text={more.tooltipText}>
                <Icon
                  iconName='IconEnter'
                  dataTestId='icon-enter'
                  onClick={more.onClick}
                  className='yl:text-text yl:hover:text-text yl:absolute yl:top-2 yl:right-2 yl:w-8 yl:cursor-pointer'
                />
              </Tooltip>
            )}
          </div>
        </div>
        <Divider
          className='yl:pt-2 yl:pb-3'
          classes={["bg-text/20", "bg-text/30", "bg-text/40"]}
        />
      </div>

      <div>
        {items.map(({ item, onClick }, index) => {
          return (
            <div className='group yl:mb-4' key={index}>
              <Paragraph
                className='yl:mt-width-0 yl:flex-1 wrap-break-word'
                onClick={() => onClick(item)}
              >
                <span className='yl:hover:text-text yl:hover:cursor-pointer wrap-break-word'>
                  {item.title}
                </span>
              </Paragraph>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { ContentWidget };
