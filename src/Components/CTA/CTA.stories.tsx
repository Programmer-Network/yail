import { action } from "storybook/actions";

import { CTA } from ".";
import { ICTAProps } from "./types";

export default {
  title: "Components/CTA",
  component: CTA
};

export const Default = (args: ICTAProps) => <CTA {...args} />;

Default.args = {
  title: "You haven't added any experience",
  subtitle:
    "Adding experience will expose your profile to recruiters and like-minded developers looking to team up for projects",
  buttonText: "Get Started",
  onClick: action("onClick"),
  IconComponent: {
    iconName: "IconAddCircle",
    dataTestId: "icon-add-circle"
  },
  ButtonIconComponent: {
    iconName: "IconAddCircle",
    dataTestId: "icon-add-circle"
  }
};
