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
      color: "#4f46e5",
      defaultColor: "#4f46e5"
    },
    {
      label: "Background",
      type: "background",
      customCSSProperty: "--color-bg",
      color: "#1b1f23",
      defaultColor: "#1b1f23"
    },
    {
      label: "Text",
      type: "text",
      customCSSProperty: "--text-color",
      color: "#6b7280",
      defaultColor: "#6b7280"
    }
  ]);

  return (
    <div className='m-12'>
      <ThemeBuilder
        onChange={async settings => {
          setSettings(settings);
        }}
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
