import { action } from "@storybook/addon-actions";

import Tag from "./index";

export default {
  title: "Components / Tag",
  parameters: {
    layout: "centered"
  }
};

export const Default = () => (
  <Tag
    name='Javascript'
    onClick={() => {
      action("onClick")("Javascript");
    }}
  />
);

export const WithoutClickHanddler = () => <Tag name='Javascript' />;
