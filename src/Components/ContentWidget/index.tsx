import classNames from "classnames";

import Divider from "Components/Divider";
import Icon from "Components/Icon";
import { IconEnter, IconSpinner } from "Components/Icons";
import Tooltip from "Components/Tooltip";
import { Paragraph } from "Components/Typography";

import { IContentWidgetBaseItem, IContentWidgetProps } from "./types";

const ContentWidget = <T extends IContentWidgetBaseItem>({
  title,
  className,
  isLoading,
  items,
  more
}: IContentWidgetProps<T>): JSX.Element => {
  if (isLoading) {
    return (
      <div className='flex items-center justify-center'>
        <IconSpinner className='w-12 fill-primary' />
      </div>
    );
  }

  return (
    <div
      className={classNames(
        "border-2 border-primary-text-color/40 rounded-md px-8 pt-4 relative",
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
            <span className='font-bold text-primary-text-color'>{title}</span>
            {more && (
              <Tooltip id='see-more-tooltip' text={more.tooltipText}>
                <IconEnter
                  onClick={more.onClick}
                  className='w-8 absolute top-2 right-2 text-primary-text-color cursor-pointer hover:text-primary'
                />
              </Tooltip>
            )}
          </div>
        </div>
        <Divider
          className='pt-2 pb-3'
          classes={[
            "bg-primary-text-color/20",
            "bg-primary-text-color/30",
            "bg-primary-text-color/40"
          ]}
        />
      </div>

      <div>
        {items.map(({ item, onClick }, index) => {
          return (
            <div className='mb-4 group' key={index}>
              <Paragraph
                className='m-width-0 flex-1'
                onClick={() => onClick(item)}
              >
                <Paragraph className='truncate hover:text-primary hover:cursor-pointer'>
                  {item.title}
                </Paragraph>
              </Paragraph>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContentWidget;
