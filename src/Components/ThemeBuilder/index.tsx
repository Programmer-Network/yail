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
      <div className='yl-mb-1 yl-flex yl-items-center yl-justify-center md:yl-justify-start'>
        <div className='yl-flex yl-gap-1 yl-flex-col md:yl-flex-row'>
          {settings.map(setting => {
            return (
              <Button
                key={setting.type}
                outlined={setting.type !== selected.type}
                className={classNames(
                  setting.className,
                  "yl-h-12 yl-min-w-[120px] yl-shadow-none"
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
        <div className='yl-flex yl-gap-1 yl-my-4 yl-justify-center md:yl-justify-start'>
          <Button
            className='yl-min-w-[80px] yl-shadow-none'
            onClick={handleSaveColors}
          >
            Save
          </Button>

          <Button
            className='yl-min-w-[80px] yl-shadow-none'
            outlined
            onClick={handleReset}
          >
            Reset
          </Button>
        </div>
      )}

      {selected.type && (
        <div className='yl-relative yl-flex yl-items-center yl-justify-start'>
          <div className='yl-relative yl-mt-2'>
            <div onClick={() => setSelected(initialState)}>
              <Icon
                iconName='IconClose'
                className='yl-absolute yl-right-[-5px] yl-top-[-5px] yl-z-50 yl-w-4 yl-cursor-pointer yl-rounded-lg yl-border-2 yl-border-border yl-bg-background yl-text-text hover:yl-bg-primary hover:yl-text-background'
              />
            </div>

            <HexColorInput
              role='presentation'
              onChange={(color: string) => setSelected({ ...selected, color })}
              color={selected?.color}
              placeholder='e.g.175ca1'
              className='yl-mb-2 yl-rounded-lg yl-border-2 yl-border-border yl-bg-transparent yl-p-2 yl-text-text yl-shadow-md hover:yl-border-border focus:yl-border-border focus:yl-shadow-none focus:yl-outline-none focus:yl-ring-transparent'
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
