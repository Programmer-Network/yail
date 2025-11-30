import classNames from "classnames";
import { FC } from "react";

import { Icon } from "../../Icon";
import { SAVE_STATUS_CONFIG } from "./ZenStatusBar.constants";
import { IZenStatusBarProps } from "./ZenStatusBar.types";

const ZenStatusBar: FC<IZenStatusBarProps> = ({
  saveStatus,
  onPropertiesToggle,
  isPropertiesOpen
}) => {
  const statusConfig = SAVE_STATUS_CONFIG[saveStatus];

  const statusClasses = classNames(
    "yl:flex yl:items-center yl:gap-2 yl:text-sm",
    {
      "yl:text-success": saveStatus === "saved",
      "yl:text-text/60": saveStatus === "saving" || saveStatus === "unsaved",
      "yl:text-error": saveStatus === "error"
    }
  );

  const iconClasses = classNames("yl:w-4 yl:h-4", {
    "yl:animate-spin": saveStatus === "saving"
  });

  const detailsButtonClasses = classNames(
    "yl:flex yl:items-center yl:gap-1.5 yl:rounded-md yl:px-3 yl:py-1.5 yl:text-sm yl:font-medium yl:transition-all",
    "yl:hover:bg-border/20 yl:text-text/60 yl:hover:text-primary cursor-pointer",
    { "yl:bg-primary/10 yl:text-primary": isPropertiesOpen }
  );

  const cogIconClasses = classNames(
    "yl:h-4 yl:w-4 yl:transition-transform yl:duration-200",
    { "yl:rotate-180": isPropertiesOpen }
  );

  return (
    <div className='yl:border-border/20 yl:bg-background/95 yl:sticky yl:top-0 yl:z-20 yl:flex yl:items-center yl:justify-between yl:border-b yl:px-4 yl:py-2 yl:backdrop-blur-sm'>
      <div className={statusClasses}>
        <Icon iconName={statusConfig.icon} className={iconClasses} />
        <span className='yl:hidden yl:sm:inline'>{statusConfig.text}</span>
      </div>

      <button
        type='button'
        onClick={onPropertiesToggle}
        className={detailsButtonClasses}
        aria-label='Open article details'
        aria-expanded={isPropertiesOpen}
        title='Title, tags, publish (⌘⇧P)'
      >
        <Icon iconName='ArrowRightOutline' className={cogIconClasses} />
        <span>Details</span>
      </button>
    </div>
  );
};

ZenStatusBar.displayName = "ZenStatusBar";

export { ZenStatusBar };
