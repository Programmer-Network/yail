import classNames from "classnames";
import { type ReactElement } from "react";

import Divider from "../Divider";
import Icon from "../Icon";
import Tooltip from "../Tooltip";
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
      <div className='flex items-center justify-center'>
        <Icon
          iconName='IconSpinner'
          className='fill-primary w-12'
          dataTestId='icon-spinner'
        />
      </div>
    );
  }

  return (
    <div
      className={classNames(
        "border-border/40 relative rounded-md border-2 px-8 pt-4",
        className
      )}
    >
      <div>
        <div className='group rounded-md'>
          <div
            className={classNames("flex items-center justify-between gap-2")}
          >
            {more && more.iconName && (
              <Icon
                iconName={more.iconName}
                className={classNames(more.iconClassName, {
                  "w-4": !more.iconClassName
                })}
              />
            )}
            <span className='text-text font-bold'>{title}</span>
            {more && (
              <Tooltip id='see-more-tooltip' text={more.tooltipText}>
                <Icon
                  iconName='IconEnter'
                  dataTestId='icon-enter'
                  onClick={more.onClick}
                  className='text-text hover:text-text absolute top-2 right-2 w-8 cursor-pointer'
                />
              </Tooltip>
            )}
          </div>
        </div>
        <Divider
          className='pt-2 pb-3'
          classes={["bg-text/20", "bg-text/30", "bg-text/40"]}
        />
      </div>

      <div>
        {items.map(({ item, onClick }, index) => {
          return (
            <div className='group mb-4' key={index}>
              <Paragraph
                className='mt-width-0 flex-1 wrap-break-word'
                onClick={() => onClick(item)}
              >
                <span className='hover:text-text wrap-break-word hover:cursor-pointer'>
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

export default ContentWidget;
