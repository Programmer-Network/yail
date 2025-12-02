import classNames from "classnames";
import { FC, useCallback } from "react";

import { Icon } from "../../../../Icon";
import { Tooltip } from "../../../../Tooltip";
import { CALLOUT_OPTIONS } from "./CalloutDropdown.constants";
import { useCalloutDropdown } from "./CalloutDropdown.hooks";
import { ICalloutDropdownProps, ICalloutOption } from "./CalloutDropdown.types";

const CalloutDropdown: FC<ICalloutDropdownProps> = ({ editor }) => {
  const { isOpen, dropdownRef, handleToggle, handleCalloutSelect } =
    useCalloutDropdown({ editor });

  const handleOptionClick = useCallback(
    (option: ICalloutOption) => {
      return () => {
        handleCalloutSelect(option.id);
      };
    },
    [handleCalloutSelect]
  );

  const triggerClasses = classNames(
    "yl:flex yl:items-center yl:gap-0.5 yl:rounded yl:px-1 yl:py-1 yl:transition-colors yl:cursor-pointer",
    {
      "yl:bg-primary/10 yl:text-primary": isOpen,
      "yl:text-text yl:hover:bg-text/10": !isOpen
    }
  );

  const renderCalloutOption = useCallback(
    (option: ICalloutOption) => {
      const optionClasses = classNames(
        "yl:flex yl:w-full yl:items-center yl:gap-3 yl:px-3 yl:py-2 yl:text-sm yl:transition-colors yl:cursor-pointer",
        "yl:hover:bg-text/5"
      );

      return (
        <button
          key={option.id}
          type='button'
          role='option'
          onClick={handleOptionClick(option)}
          className={optionClasses}
        >
          <span
            className='yl:flex yl:h-5 yl:w-5 yl:items-center yl:justify-center yl:rounded yl:border-l-2'
            style={{ borderLeftColor: option.borderColor }}
          >
            <Icon iconName={option.icon} className='yl:h-4 yl:w-4' />
          </span>
          <span className='yl:text-text'>{option.label}</span>
        </button>
      );
    },
    [handleOptionClick]
  );

  return (
    <div className='yl:relative' ref={dropdownRef}>
      <Tooltip id='tooltip-callout' text='Insert callout' delayShow={500}>
        <button
          type='button'
          onClick={handleToggle}
          className={triggerClasses}
          aria-expanded={isOpen}
          aria-haspopup='listbox'
        >
          <Icon iconName='InfoOutline' className='yl:h-5 yl:w-5' />
          <Icon iconName='DownSmallOutline' className='yl:h-3 yl:w-3' />
        </button>
      </Tooltip>

      {isOpen && (
        <div
          role='listbox'
          aria-label='Callout type options'
          className='yl:absolute yl:left-0 yl:top-full yl:z-50 yl:mt-2 yl:w-48 yl:rounded-md yl:border-2 yl:border-border/40 yl:bg-background yl:py-1 yl:shadow-md'
          data-testid='callout-dropdown-content'
        >
          <div className='yl:px-3 yl:py-1.5 yl:text-xs yl:font-medium yl:text-text/60'>
            Callout
          </div>
          {CALLOUT_OPTIONS.map(renderCalloutOption)}
        </div>
      )}
    </div>
  );
};

CalloutDropdown.displayName = "CalloutDropdown";

export { CalloutDropdown };
