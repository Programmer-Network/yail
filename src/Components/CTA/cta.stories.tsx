import { action } from "@storybook/addon-actions";

import { IconStarFilled } from "Components/Icons";

import CTA from "./";
import { ICTAProps } from "./types";

export default {
  title: "Components/CTA",
  component: CTA
};

export const Basic = (args: ICTAProps) => <CTA {...args} />;

Basic.args = {
  title: "That's how it is...",
  subtitle:
    "Just like a failed database lookup or an unresolved promise, sometimes life leaves us empty-handed",
  buttonText: "Get Started",
  onClick: action("onClick")
};

export const WithIcons = (args: ICTAProps) => (
  <CTA {...args} Icon={IconStarFilled} ButtonIcon={IconStarFilled} />
);

WithIcons.args = {
  title: "Explore Our Features",
  subtitle: "Discover what makes us unique.",
  buttonText: "Learn More",
  iconClassName: "custom-icon-class",
  onClick: action("onClick")
};

export const Disabled = (args: ICTAProps) => <CTA {...args} />;

Disabled.args = {
  title: "Feature Coming Soon",
  subtitle: "Stay tuned for updates.",
  buttonText: "Notify Me",
  onClick: undefined // To simulate disabled state
};
