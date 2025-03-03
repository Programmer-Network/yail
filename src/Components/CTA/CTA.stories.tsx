import { action } from "@storybook/addon-actions";

import Icon from "Components/Icon";

import CTA from ".";
import { ICTAProps } from "./types";

export default {
  title: "Components/CTA",
  parameters: {
    layout: "centered"
  },
  component: CTA
};

export const Default = (args: ICTAProps) => <CTA {...args} />;

Default.args = {
  title: "You haven't added any experience",
  subtitle:
    "Adding experience will expose your profile to recruiters and like-minded developers looking to team up for projects",
  buttonText: "Get Started",
  onClick: action("onClick"),
  Icon: <Icon iconName='IconAddCircle' />,
  ButtonIcon: <Icon iconName='IconAddCircle' />
};
