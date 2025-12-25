import classNames from "classnames";
import { FC, useCallback } from "react";

import { Icon } from "../../../../Icon";
import { Tooltip } from "../../../../Tooltip";
import { COLOR_OPTIONS, TEXT_COLOR_PREVIEW } from "./ColorDropdown.constants";
import { useColorDropdown } from "./ColorDropdown.hooks";
import { IColorDropdownProps, IColorOption } from "./ColorDropdown.types";

const ColorDropdown: FC<IColorDropdownProps> = ({ editor }) => {
  const { isOpen, dropdownRef, currentColor, handleToggle, handleColorSelect } =
    useColorDropdown({ editor });

  const getPreviewColor = useCallback(
    (colorId: string | null): string | undefined => {
      if (!colorId) return undefined;
      return TEXT_COLOR_PREVIEW[colorId];
    },
    []
  );

  const handleOptionClick = useCallback(
    (option: IColorOption) => {
      return () => {
        handleColorSelect(option.color);
      };
    },
    [handleColorSelect]
  );

  const triggerClasses = classNames(
    "yl:flex yl:items-center yl:gap-0.5 yl:rounded yl:px-1 yl:py-1 yl:transition-colors yl:cursor-pointer",
    {
      "yl:bg-primary/10 yl:text-primary": currentColor !== null || isOpen,
      "yl:text-text yl:hover:bg-text/10": currentColor === null && !isOpen
    }
  );

  const renderColorOption = useCallback(
    (option: IColorOption) => {
      const isSelected = option.color === currentColor;
      const isDefault = option.color === null;
      const previewColor = getPreviewColor(option.color);

      const optionClasses = classNames(
        "yl:flex yl:w-full yl:items-center yl:gap-3 yl:px-3 yl:py-2 yl:text-sm yl:transition-colors yl:cursor-pointer",
        {
          "yl:bg-primary/10": isSelected,
          "yl:hover:bg-text/5": !isSelected
        }
      );

      const swatchClasses = classNames(
        "yl:flex yl:h-5 yl:w-5 yl:items-center yl:justify-center yl:rounded yl:text-xs yl:font-bold",
        {
          "yl:border yl:border-border/40": isDefault
        }
      );

      const swatchStyle = previewColor
        ? { backgroundColor: previewColor, color: "white" }
        : undefined;

      return (
        <button
          key={option.id}
          type='button'
          role='option'
          aria-selected={isSelected}
          onClick={handleOptionClick(option)}
          className={optionClasses}
        >
          <span className={swatchClasses} style={swatchStyle}>
            A
          </span>
          <span className='yl:text-text'>{option.label}</span>
        </button>
      );
    },
    [currentColor, handleOptionClick, getPreviewColor]
  );

  const currentPreviewColor = getPreviewColor(currentColor);
  const underlineStyle = currentPreviewColor
    ? { backgroundColor: currentPreviewColor }
    : undefined;

  return (
    <div className='yl:relative' ref={dropdownRef}>
      <Tooltip id='tooltip-text-color' text='Text color' delayShow={500}>
        <button
          type='button'
          onClick={handleToggle}
          className={triggerClasses}
          aria-expanded={isOpen}
          aria-haspopup='listbox'
        >
          <div className='yl:flex yl:flex-col yl:items-center'>
            <Icon iconName='TextOutline' className='yl:h-5 yl:w-5' />
            <div
              className={classNames("yl:h-0.5 yl:w-4 yl:rounded-full", {
                "yl:bg-text/40": !currentColor
              })}
              style={underlineStyle}
            />
          </div>
          <Icon iconName='DownSmallOutline' className='yl:h-3 yl:w-3' />
        </button>
      </Tooltip>

      {isOpen && (
        <div
          role='listbox'
          aria-label='Text color options'
          className='yl:absolute yl:left-0 yl:top-full yl:z-50 yl:mt-2 yl:w-56 yl:rounded-md yl:border yl:border-border/40 yl:bg-background yl:py-1 yl:shadow-md'
          data-testid='color-dropdown-content'
        >
          <div className='yl:px-3 yl:py-1.5 yl:text-xs yl:font-medium yl:text-text/60'>
            Color
          </div>
          {COLOR_OPTIONS.map(renderColorOption)}
        </div>
      )}
    </div>
  );
};

ColorDropdown.displayName = "ColorDropdown";

export { ColorDropdown };
