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
      <div className='yl-flex yl-items-center yl-justify-center'>
        <IconSpinner className='yl-w-12 yl-fill-primary' />
      </div>
    );
  }

  return (
    <div
      className={classNames(
        "yl-border-2 yl-border-border/40 yl-rounded-md yl-px-8 yl-pt-4 yl-relative",
        className
      )}
    >
      <div>
        <div className='group yl-rounded-md'>
          <div
            className={classNames(
              "yl-items-center yl-gap-2 yl-flex yl-justify-between"
            )}
          >
            {more && more.iconName && (
              <Icon
                iconName={more.iconName}
                className={classNames(more.iconClassName, {
                  "yl-w-4": !more.iconClassName
                })}
              />
            )}
            <span className='yl-font-bold yl-text-text'>{title}</span>
            {more && (
              <Tooltip id='see-more-tooltip' text={more.tooltipText}>
                <IconEnter
                  onClick={more.onClick}
                  className='yl-w-8 yl-absolute yl-top-2 yl-right-2 yl-text-text yl-cursor-pointer hover:yl-text-text'
                />
              </Tooltip>
            )}
          </div>
        </div>
        <Divider
          className='yl-pt-2 yl-pb-3'
          classes={["yl-bg-text/20", "yl-bg-text/30", "yl-bg-text/40"]}
        />
      </div>

      <div>
        {items.map(({ item, onClick }, index) => {
          return (
            <div className='yl-mb-4 group' key={index}>
              <Paragraph
                className='yl-mt-width-0 yl-flex-1 yl-break-words'
                onClick={() => onClick(item)}
              >
                <span className='hover:yl-text-text hover:yl-cursor-pointer yl-break-words'>
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
