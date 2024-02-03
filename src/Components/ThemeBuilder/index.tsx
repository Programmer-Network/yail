import { useOnClickOutside } from "Hooks/useClickOutside";
import classNames from "classnames";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { HexColorInput, HexColorPicker } from "react-colorful";

import Button from "Components/Button";
import Icon from "Components/Icon";

import { initialSelected } from "./constants";
import { IThemeBuilder, IThemeBuilderSetting } from "./types";
import { setCSSVariable } from "./utils";

const ThemeBuilder: FC<IThemeBuilder> = ({ onChange, onReset, settings }) => {
  const [selected, setSelected] = useState<{
    type: string;
    color: string;
    cssVariable: string;
  }>(initialSelected);

  const [localSettings, setLocalSettings] =
    useState<IThemeBuilderSetting[]>(settings);

  const ref = useRef<HTMLDivElement>(null);

  const isDirty = useMemo(() => {
    return localSettings.some((localSetting, index) => {
      const setting = settings[index];
      return localSetting.color !== setting.color;
    });
  }, [localSettings, settings]);

  useOnClickOutside(ref, () => {
    setSelected(initialSelected);
  });

  const handleSaveColors = () => {
    onChange(localSettings);
    setSelected(initialSelected);
  };

  const handleReset = () => {
    settings.forEach(button => {
      setCSSVariable(
        button.customCSSProperty,
        settings.find(s => s.type === button.type)?.defaultColor || ""
      );
    });

    setLocalSettings(settings);
    setSelected(initialSelected);
    onReset();
  };

  useEffect(() => {
    settings.forEach(setting => {
      setCSSVariable(
        setting.customCSSProperty,
        settings.find(s => s.type === setting.type)?.color || ""
      );
    });
  }, [settings]);

  useEffect(() => {
    setCSSVariable(selected.cssVariable, selected.color);
    setLocalSettings(
      localSettings.map(s => {
        if (s.type !== selected.type) {
          return s;
        }

        return {
          ...s,
          color: selected.color
        };
      })
    );
  }, [selected.type, selected.color]);

  return (
    <div ref={ref}>
      <div className='mb-1 flex h-12 items-center'>
        <div
          className={classNames(
            "relative flex h-full items-center justify-center bg-primary px-3 py-2"
          )}
        >
          <Icon
            iconName='IconColors'
            className='w-5 text-primary-background-color'
          />
        </div>
        {settings.map((setting, idx) => {
          return (
            <Button
              key={setting.type}
              outlined={setting.type !== selected.type}
              className={classNames(
                setting.className,
                "h-12 min-w-[120px] border-l-0 shadow-none",
                {
                  "border-r-0": idx !== settings.length - 1
                }
              )}
              onClick={() => {
                setSelected({
                  type: setting.type,
                  cssVariable: setting.customCSSProperty,
                  color:
                    localSettings.find(s => s.type === setting.type)?.color ||
                    ""
                });
              }}
            >
              {setting.label}
            </Button>
          );
        })}
        {isDirty && (
          <div className='ml-2 flex gap-1'>
            <Button className='h-12' onClick={handleSaveColors}>
              Save
            </Button>

            <Button className='h-12' outlined onClick={handleReset}>
              Reset
            </Button>
          </div>
        )}
      </div>

      {selected.type && (
        <div className='relative flex items-center justify-start'>
          <div className='relative mt-2'>
            <div onClick={() => setSelected(initialSelected)}>
              <Icon
                iconName='IconClose'
                className='absolute right-[-5px] top-[-5px] z-50 w-4 cursor-pointer rounded-lg border-2 border-primary bg-primary-background-color text-primary hover:bg-primary hover:text-primary-background-color'
              />
            </div>

            <HexColorInput
              role='presentation'
              onChange={(color: string) => setSelected({ ...selected, color })}
              color={selected?.color || ""}
              placeholder='e.g.175ca1'
              className='bg mb-2 rounded-lg border-2 border-primary bg-transparent p-2 text-primary-text-color shadow-md hover:border-primary focus:border-primary focus:shadow-none focus:outline-none focus:ring-transparent dark:text-primary-text-color'
            />
            <HexColorPicker
              onChange={color => setSelected({ ...selected, color })}
              color={selected?.color}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeBuilder;
