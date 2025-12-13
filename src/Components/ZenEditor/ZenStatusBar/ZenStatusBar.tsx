import classNames from "classnames";
import { FC } from "react";

import { Icon } from "../../Icon";
import { IZenStatusBarProps } from "./ZenStatusBar.types";

const ZenStatusBar: FC<IZenStatusBarProps> = ({
  onPropertiesToggle,
  isPropertiesOpen,
  propertiesButtonText,
  propertiesButtonIcon,
  onBack,
  breadcrumbs
}) => {
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

  const detailsButtonClasses = classNames(
    "yl:flex yl:items-center yl:gap-1.5 yl:rounded-md yl:px-3 yl:py-1.5 yl:text-sm yl:font-medium yl:transition-all",
    "yl:hover:bg-border/20 yl:text-text/60 yl:hover:text-primary cursor-pointer",
    { "yl:bg-primary/10 yl:text-primary": isPropertiesOpen }
  );

  const iconClasses = classNames(
    "yl:h-4 yl:w-4 yl:transition-transform yl:duration-200",
    { "yl:rotate-180": isPropertiesOpen }
  );

  const hasBreadcrumbs = breadcrumbs && breadcrumbs.length > 0;

  return (
    <div className='yl:border-border/20 yl:bg-background/95 yl:sticky yl:top-0 yl:z-20 yl:flex yl:items-center yl:justify-between yl:border-b yl:py-4 yl:backdrop-blur-sm'>
      {(onBack || hasBreadcrumbs) && (
        <div className='yl:flex yl:items-center yl:gap-3'>
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

          {hasBreadcrumbs && (
            <div className='yl:flex yl:items-center yl:gap-1.5'>
              {breadcrumbs.map((item, index) => {
                const isLast = index === breadcrumbs.length - 1;
                const itemClasses = isLast
                  ? breadcrumbActiveClasses
                  : breadcrumbItemClasses;

                return (
                  <div
                    key={index}
                    className='yl:flex yl:items-center yl:gap-1.5'
                  >
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
          )}
        </div>
      )}

      <button
        type='button'
        onClick={onPropertiesToggle}
        className={detailsButtonClasses}
        aria-label={`Open ${propertiesButtonText}`}
        aria-expanded={isPropertiesOpen}
        title='Title, tags, publish (⌘⇧P)'
      >
        {propertiesButtonIcon && (
          <Icon iconName={propertiesButtonIcon} className={iconClasses} />
        )}
        <span>{propertiesButtonText}</span>
      </button>
    </div>
  );
};

ZenStatusBar.displayName = "ZenStatusBar";

export { ZenStatusBar };
