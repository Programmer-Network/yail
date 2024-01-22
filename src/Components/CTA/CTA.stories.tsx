import { action } from "@storybook/addon-actions";

import { IconAddCircle } from "Components/Icons";

import CTA from ".";
import { ICTAProps } from "./types";

export default {
  title: "Components/CTA",
  parameters: {
    layout: "centered"
  },
  component: CTA
};

export const Basic = (args: ICTAProps) => <CTA {...args} />;

Basic.args = {
  title: "You haven't added any experience",
  subtitle:
    "Adding experience will expose your profile to recruiters and like-minded developers looking to team up for projects",
  buttonText: "Get Started",
  onClick: action("onClick"),
  Icon: IconAddCircle,
  ButtonIcon: IconAddCircle
};

export const WithIcons = (args: ICTAProps) => <CTA {...args} />;

WithIcons.args = {
  title: "Explore Our Features",
  subtitle: "Discover what makes us unique.",
  buttonText: "Learn More",
  iconClassName: "custom-icon-class",
  onClick: action("onClick")
};
