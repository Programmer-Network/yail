import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";

import Reactions from "./";
import { IReactionsProps } from "./types";

export default {
  title: "Components/Reactions",
  parameters: {
    layout: "centered"
  },
  component: Reactions,
  argTypes: {
    onLike: { action: "liked" },
    onDislike: { action: "disliked" },
    onShareClick: { action: "shared" },
    onNavigateComments: { action: "navigated to comments" }
  }
} as Meta;

const Template: Story<IReactionsProps> = args => <Reactions {...args} />;

export const Default = Template.bind({});
Default.args = {
  likesCount: 12,
  dislikesCount: 22,
  onLike: action("liked"),
  onDislike: action("disliked"),
  isDisliking: false,
  isLiking: false,
  hasDisliked: false,
  hasLiked: false
};

export const Liked = Template.bind({});
Liked.args = {
  ...Default.args,
  hasDisliked: false,
  hasLiked: true
};

export const Disliked = Template.bind({});
Disliked.args = {
  ...Default.args,
  hasLiked: false,
  hasDisliked: true
};

export const LikingInProgress = Template.bind({});
LikingInProgress.args = {
  ...Default.args,
  isLiking: true
};

export const DislikingInProgress = Template.bind({});
DislikingInProgress.args = {
  ...Default.args,
  isDisliking: true
};
