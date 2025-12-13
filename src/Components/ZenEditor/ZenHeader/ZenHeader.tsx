import classNames from "classnames";
import { FC } from "react";

import { Icon } from "../../Icon";
import { IZenHeaderProps } from "./ZenHeader.types";

const ZenHeader: FC<IZenHeaderProps> = ({ onBack, breadcrumbs }) => {
  const backButtonClasses = classNames(
    "yl:flex yl:items-center yl:justify-center yl:w-8 yl:h-8 yl:rounded-lg yl:transition-colors",
    "yl:hover:bg-text/10 yl:text-text/60 yl:hover:text-text"
  );

  const breadcrumbItemClasses = classNames(
    "yl:flex yl:items-center yl:gap-1.5 yl:text-sm",
    "yl:text-text/50 yl:hover:text-text/70 yl:transition-colors"
  );

  const breadcrumbActiveClasses = classNames(
    breadcrumbItemClasses,
    "yl:text-text yl:font-medium"
  );

  return (
    <div className='yl:sticky yl:top-0 yl:z-10 yl:border-b yl:border-text/10 yl:bg-background/95 yl:backdrop-blur-sm'>
      <div className='yl:flex yl:items-center yl:gap-3 yl:py-3 yl:px-4'>
        {onBack && (
          <button
            type='button'
            onClick={onBack}
            className={backButtonClasses}
            aria-label='Go back'
          >
            <Icon iconName='ArrowLeftOutline' className='yl:w-5 yl:h-5' />
          </button>
        )}

        <div className='yl:flex yl:items-center yl:gap-1.5'>
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;
            const itemClasses = isLast
              ? breadcrumbActiveClasses
              : breadcrumbItemClasses;

            return (
              <div key={index} className='yl:flex yl:items-center yl:gap-1.5'>
                {index > 0 && (
                  <Icon
                    iconName='IconArrowRight'
                    className='yl:w-3 yl:h-3 yl:text-text/50'
                  />
                )}
                {item.onClick ? (
                  <button
                    type='button'
                    onClick={item.onClick}
                    className={itemClasses}
                  >
                    {item.label}
                  </button>
                ) : (
                  <span className={itemClasses}>{item.label}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

ZenHeader.displayName = "ZenHeader";

export { ZenHeader };
