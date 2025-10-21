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
          className='w-12 fill-primary'
          dataTestId='icon-spinner'
        />
      </div>
    );
  }

  return (
    <div
      className={classNames(
        "border-2 border-border/40 rounded-md px-8 pt-4 relative",
        className
      )}
    >
      <div>
        <div className='group rounded-md'>
          <div
            className={classNames("items-center gap-2 flex justify-between")}
          >
            {more && more.iconName && (
              <Icon
                iconName={more.iconName}
                className={classNames(more.iconClassName, {
                  "w-4": !more.iconClassName
                })}
              />
            )}
            <span className='font-bold text-text'>{title}</span>
            {more && (
              <Tooltip id='see-more-tooltip' text={more.tooltipText}>
                <Icon
                  iconName='IconEnter'
                  dataTestId='icon-enter'
                  onClick={more.onClick}
                  className='w-8 absolute top-2 right-2 text-text cursor-pointer hover:text-text'
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
            <div className='mb-4 group' key={index}>
              <Paragraph
                className='mt-width-0 flex-1 break-words'
                onClick={() => onClick(item)}
              >
                <span className='hover:text-text hover:cursor-pointer break-words'>
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
