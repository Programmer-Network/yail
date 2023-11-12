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
  shareUrl: "https://www.google.com",
  commentCount: 10,
  isDisliking: false,
  isLiking: false,
  hasDisliked: false,
  hasLiked: true,
  onShared: action("shared")
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

export const WithCommentsDisabled = Template.bind({});
WithCommentsDisabled.args = {
  ...Default.args,
  commentCount: 0
};

export const WithSharingDisabled = Template.bind({});
WithSharingDisabled.args = {
  ...Default.args,
  shareUrl: undefined
};
