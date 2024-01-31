import { useState } from "react";

import { H1, Paragraph } from "Components/Typography";

import ThemeBuilder from ".";

export default {
  title: "Components / Theme Builder"
};

export const Primary = () => {
  const [settings, setSettings] = useState({
    primary: "#4f46e5",
    background: "#1b1f23",
    text: "#6b7280"
  });

  return (
    <div className='m-10'>
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

      <section className='bg-primary-background-color p-6'>
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
