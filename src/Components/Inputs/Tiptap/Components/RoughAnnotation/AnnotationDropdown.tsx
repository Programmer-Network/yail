import classNames from "classnames";
import { FC, useCallback, useEffect, useRef, useState } from "react";

import {
  ANNOTATION_TYPE_OPTIONS,
  DEFAULT_ANNOTATION_COLOR,
  DEFAULT_STROKE_WIDTH,
  IAnnotationDropdownProps,
  IRoughAnnotationAttrs,
  RoughAnnotationType
} from "./RoughAnnotation.types";

const AnnotationDropdown: FC<IAnnotationDropdownProps> = ({
  isOpen,
  hasExistingAnnotation,
  onApply,
  onRemove,
  onClose
}) => {
  const [selectedType, setSelectedType] =
    useState<RoughAnnotationType>("bracket");
  const [color, setColor] = useState(DEFAULT_ANNOTATION_COLOR);
  const [label, setLabel] = useState("");
  const [strokeWidth, setStrokeWidth] = useState(DEFAULT_STROKE_WIDTH);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const dropdown = dropdownRef.current;

      if (dropdown && !dropdown.contains(target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleApply = useCallback(() => {
    const attrs: IRoughAnnotationAttrs = {
      type: selectedType,
      color,
      label: label.trim() || null,
      strokeWidth
    };
    onApply(attrs);
    onClose();
  }, [selectedType, color, label, strokeWidth, onApply, onClose]);

  const handleTypeSelect = useCallback((type: RoughAnnotationType) => {
    setSelectedType(type);
  }, []);

  const handleColorChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setColor(e.target.value);
    },
    []
  );

  const handleLabelChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLabel(e.target.value);
    },
    []
  );

  const handleStrokeWidthChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setStrokeWidth(parseInt(e.target.value, 10));
    },
    []
  );

  const handleRemove = useCallback(() => {
    onRemove();
    onClose();
  }, [onRemove, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      ref={dropdownRef}
      className='yl:absolute yl:top-full yl:left-0 yl:z-50 yl:mt-1 yl:w-64 yl:rounded-md yl:border yl:border-border/40 yl:bg-background yl:p-3 yl:shadow-lg'
    >
      {/* Annotation Type Selection */}
      <div className='yl:mb-3'>
        <label className='yl:mb-1.5 yl:block yl:text-xs yl:font-medium yl:text-text/70'>
          Annotation Type
        </label>
        <div className='yl:grid yl:grid-cols-2 yl:gap-1'>
          {ANNOTATION_TYPE_OPTIONS.map(option => (
            <button
              key={option.value}
              type='button'
              onClick={() => handleTypeSelect(option.value)}
              className={classNames(
                "yl:rounded yl:px-2 yl:py-1.5 yl:text-xs yl:transition-colors",
                {
                  "yl:bg-primary yl:text-white": selectedType === option.value,
                  "yl:bg-text/5 yl:text-text hover:yl:bg-text/10":
                    selectedType !== option.value
                }
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Color Picker */}
      <div className='yl:mb-3'>
        <label className='yl:mb-1.5 yl:block yl:text-xs yl:font-medium yl:text-text/70'>
          Color
        </label>
        <div className='yl:flex yl:items-center yl:gap-2'>
          <input
            type='color'
            value={color}
            onChange={handleColorChange}
            className='yl:h-8 yl:w-8 yl:cursor-pointer yl:rounded yl:border yl:border-border/40'
          />
          <input
            type='text'
            value={color}
            onChange={handleColorChange}
            className='yl:flex-1 yl:rounded yl:border yl:border-border/40 yl:bg-background yl:px-2 yl:py-1 yl:text-xs yl:text-text'
          />
        </div>
      </div>

      {/* Label Input */}
      <div className='yl:mb-3'>
        <label className='yl:mb-1.5 yl:block yl:text-xs yl:font-medium yl:text-text/70'>
          Label (optional)
        </label>
        <input
          type='text'
          value={label}
          onChange={handleLabelChange}
          placeholder='e.g., Important, Note...'
          className='yl:w-full yl:rounded yl:border yl:border-border/40 yl:bg-background yl:px-2 yl:py-1.5 yl:text-xs yl:text-text placeholder:yl:text-text/40'
        />
      </div>

      {/* Stroke Width */}
      <div className='yl:mb-3'>
        <label className='yl:mb-1.5 yl:block yl:text-xs yl:font-medium yl:text-text/70'>
          Stroke Width: {strokeWidth}px
        </label>
        <input
          type='range'
          min='1'
          max='5'
          value={strokeWidth}
          onChange={handleStrokeWidthChange}
          className='yl:w-full'
        />
      </div>

      {/* Remove Button (only when annotation exists) */}
      {hasExistingAnnotation && (
        <button
          type='button'
          onClick={handleRemove}
          className='yl:mb-3 yl:w-full yl:rounded yl:border yl:border-red-300 yl:bg-red-50 yl:px-3 yl:py-1.5 yl:text-xs yl:text-red-600 yl:transition-colors hover:yl:bg-red-100'
        >
          Remove Annotation
        </button>
      )}

      {/* Action Buttons */}
      <div className='yl:flex yl:gap-2'>
        <button
          type='button'
          onClick={onClose}
          className='yl:flex-1 yl:rounded yl:border yl:border-border/40 yl:bg-background yl:px-3 yl:py-1.5 yl:text-xs yl:text-text yl:transition-colors hover:yl:bg-text/5'
        >
          Cancel
        </button>
        <button
          type='button'
          onClick={handleApply}
          className='yl:flex-1 yl:rounded yl:bg-primary yl:px-3 yl:py-1.5 yl:text-xs yl:text-white yl:transition-colors hover:yl:opacity-90'
        >
          {hasExistingAnnotation ? "Update" : "Apply"}
        </button>
      </div>
    </div>
  );
};

AnnotationDropdown.displayName = "AnnotationDropdown";

export { AnnotationDropdown };
