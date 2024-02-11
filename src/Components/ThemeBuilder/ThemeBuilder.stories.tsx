import { useState } from "react";

import { H1, Paragraph } from "Components/Typography";

import ThemeBuilder from ".";

export default {
  title: "Components / Theme Builder"
};

export const Default = () => {
  const [settings, setSettings] = useState([
    {
      label: "Primary",
      type: "primary",
      customCSSProperty: "--color-primary",
      color: "79 70 229",
      defaultColor: "79 70 229"
    },
    {
      label: "Background",
      type: "background",
      customCSSProperty: "--color-bg",
      color: "27 31 35",
      defaultColor: "27 31 35"
    },
    {
      label: "Text",
      type: "text",
      customCSSProperty: "--text-color",
      color: "107 114 128",
      defaultColor: "107 114 128"
    }
  ]);

  return (
    <div className='m-12'>
      <ThemeBuilder
        onChange={setSettings}
        onReset={() => null}
        settings={settings}
      />

      <section className='bg-primary-background-color'>
        <H1>Lorem ipsum dolor sit amet.</H1>
        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum beatae
          veritatis exercitationem dolores. Eos saepe tenetur, adipisci deserunt
          quasi sit aliquam explicabo voluptas id nobis omnis quaerat aspernatur
          perspiciatis provident itaque ea eveniet fuga vero! Maiores quas rem
          voluptatibus consectetur ipsum! Asperiores suscipit reprehenderit
          porro tempore corrupti iure deserunt distinctio.
        </Paragraph>
      </section>
    </div>
  );
};
