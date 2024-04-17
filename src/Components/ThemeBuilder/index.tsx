import { useOnClickOutside } from "Hooks/useClickOutside";
import classNames from "classnames";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { HexColorInput, HexColorPicker } from "react-colorful";

import Button from "Components/Button";
import Icon from "Components/Icon";

import ThemeBuilderUtils from "./ThemeBuilderUtils";
import { IThemeBuilder, IThemeBuilderSetting } from "./types";

const ThemeBuilder: FC<IThemeBuilder> = ({
  onChange,
  onReset,
  settings,
  defaultSettings
}) => {
  const initialState = {
    color: "",
    cssVariable: "",
    type: ""
  };
  const [selected, setSelected] = useState<{
    type: string;
    color: string;
    cssVariable: string;
  }>(initialState);

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
    setSelected(initialState);
  });

  const handleSaveColors = () => {
    onChange(localSettings);
    setSelected(initialState);
  };

  const handleReset = () => {
    ThemeBuilderUtils.setCSSVariables(defaultSettings);
    setLocalSettings(defaultSettings);
    setSelected(initialState);
    onReset();
  };

  useEffect(() => {
    ThemeBuilderUtils.setCSSVariables(settings);
  }, [settings]);

  useEffect(() => {
    if (!selected.color) {
      return;
    }

    ThemeBuilderUtils.setCSSVariable(
      selected.cssVariable,
      ThemeBuilderUtils.hexToRGB(selected.color) as string
    );

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected.type, selected.color, selected.cssVariable]);

  return (
    <div ref={ref}>
      <div className='mb-1 flex items-center justify-center md:justify-start'>
        <div className='flex gap-1 flex-col md:flex-row'>
          {settings.map(setting => {
            return (
              <Button
                key={setting.type}
                outlined={setting.type !== selected.type}
                className={classNames(
                  setting.className,
                  "h-12 min-w-[120px] shadow-none"
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
        </div>
      </div>

      {isDirty && (
        <div className='flex gap-1 my-4 justify-center md:justify-start'>
          <Button
            className='min-w-[80px] shadow-none'
            onClick={handleSaveColors}
          >
            Save
          </Button>

          <Button
            className='min-w-[80px] shadow-none'
            outlined
            onClick={handleReset}
          >
            Reset
          </Button>
        </div>
      )}

      {selected.type && (
        <div className='relative flex items-center justify-start'>
          <div className='relative mt-2'>
            <div onClick={() => setSelected(initialState)}>
              <Icon
                iconName='IconClose'
                className='absolute right-[-5px] top-[-5px] z-50 w-4 cursor-pointer rounded-lg border-2 border-primary bg-primary-background-color text-primary hover:bg-primary hover:text-primary-background-color'
              />
            </div>

            <HexColorInput
              role='presentation'
              onChange={(color: string) => setSelected({ ...selected, color })}
              color={selected?.color}
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
