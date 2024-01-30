import { useOnClickOutside } from "Hooks/useClickOutside";
import classNames from "classnames";
import { FC, useEffect, useRef, useState } from "react";
import { HexColorInput, HexColorPicker } from "react-colorful";

import Button from "Components/Button";
import Icon from "Components/Icon";
import Tooltip from "Components/Tooltip";

import { IThemeBuilder } from "./types";

const ThemeBuilder: FC<IThemeBuilder> = ({
  onColorsChange,
  onReset,
  isResetButtonShown,
  buttons,
  settings = { primary: "#4f46e5", background: "#1b1f23", text: "#6b7280" }
}) => {
  const initial = {
    type: "",
    color: "",
    cssVariable: ""
  };

  const [selected, setSelected] = useState<{
    type: string;
    color: string;
    cssVariable: string;
  }>(initial);

  const [colors, setColors] = useState<{
    primary: string;
    background: string;
    text: string;
  }>({
    primary: "",
    background: "",
    text: ""
  });

  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => {
    setSelected(initial);
  });

  const handleSaveColors = () => {
    onColorsChange(colors);
    setColors(colors);
    setSelected(initial);
  };

  const setCSSVariable = (variable: string, value: string) =>
    document.documentElement.style.setProperty(variable, value);

  const handleReset = () => {
    setCSSVariable("--color-primary", "#4f46e5");
    setCSSVariable("--text-color", "#6b7280");
    setCSSVariable("--color-bg", "#1b1f23");
    setSelected(initial);
    setColors({ primary: "", background: "", text: "" });
    onReset();
  };

  useEffect(() => {
    setCSSVariable("--color-primary", settings.primary);
    setCSSVariable("--text-color", settings.text);
    setCSSVariable("--color-bg", settings.background);
    setColors(settings);
  }, [settings.primary, settings.background, settings.text]);

  useEffect(() => {
    if (!selected.type) {
      return;
    }

    setCSSVariable(selected.cssVariable, selected.color);
    setColors({
      ...colors,
      [selected.type]: selected.color
    });
  }, [selected.type, selected.color]);

  return (
    <div ref={ref}>
      <div className='mb-2 flex items-center'>
        <div
          className={classNames(
            "cursor-pointer border-2 border-r-0 border-primary px-3 py-2"
          )}
        >
          <Icon iconName='IconColors' className='w-5 text-primary' />
        </div>
        <>
          {buttons.map(button => {
            return (
              <Button
                key={button.type}
                outlined={button.type !== selected.type}
                className={button.className}
                onClick={() => {
                  setSelected({
                    type: button.type,
                    cssVariable: button.cssVariable,
                    color: colors[button.type as keyof typeof colors]
                  });
                }}
              >
                {button.label}
              </Button>
            );
          })}
        </>
        <div className='flex'>
          <Button className='group ml-2' onClick={handleSaveColors}>
            Save
          </Button>

          {isResetButtonShown && (
            <Tooltip
              text='Revert to default theme'
              id='revert-theme'
              place='bottom'
            >
              <Button outlined onClick={handleReset}>
                RESET
              </Button>
            </Tooltip>
          )}
        </div>
      </div>
      {selected.type && (
        <div className='relative flex items-center justify-start'>
          <div className='relative mt-4'>
            <div onClick={() => setSelected(initial)}>
              <Icon
                iconName='IconClose'
                className='absolute -right-4 -top-4 z-50 w-4 cursor-pointer text-primary'
              />
            </div>

            <HexColorPicker
              onChange={color => setSelected({ ...selected, color })}
              color={selected?.color}
            />
            <HexColorInput
              onChange={(color: string) => setSelected({ ...selected, color })}
              color={selected?.color || ""}
              placeholder='e.g.175ca1'
              className='bg mt-2 rounded-lg border-2 border-primary bg-transparent p-2 text-primary-text-color shadow-md hover:border-primary focus:border-primary focus:shadow-none focus:outline-none focus:ring-transparent dark:text-primary-text-color'
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeBuilder;
