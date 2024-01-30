import { useState } from "react";

import { H1 } from "Components/Typography";

import ThemeBuilder from ".";

export default {
  title: "Components / Theme Builder"
};

export const Primary = () => {
  const [settings, setSettings] = useState({
    primary: "",
    background: "",
    text: ""
  });

  return (
    <div className='m-10'>
      <div className='mb-6 flex gap-2'>
        <div className='h-24 w-24 bg-primary'></div>
        <div className='h-24 w-24 bg-primary-background-color shadow-md'></div>
        <H1 className='text-primary-text-color'>Lorem ipsum dolor sit amet.</H1>
      </div>

      <ThemeBuilder
        isResetButtonShown={true}
        onColorsChange={setSettings}
        onReset={() => null}
        settings={settings}
        buttons={[
          {
            label: "Primary",
            type: "primary",
            cssVariable: "--color-primary"
          },
          {
            label: "Background",
            type: "background",
            cssVariable: "--color-bg",
            className: "border-l-0 border-r-0"
          },
          {
            label: "Text",
            type: "text",
            cssVariable: "--text-color"
          }
        ]}
      />
    </div>
  );
};
