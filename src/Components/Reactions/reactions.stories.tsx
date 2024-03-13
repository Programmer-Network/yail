import { action } from "@storybook/addon-actions";
import { Meta, StoryFn } from "@storybook/react";

import Reactions from "./";
import {
  IReactionsProps,
  ReactionTransitionState,
  ReactionType
} from "./types";

const ReactionsStories: Meta<IReactionsProps> = {
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

const Template: StoryFn<IReactionsProps> = args => <Reactions {...args} />;

const args: IReactionsProps = {
  reactionsCount: 12,
  onReaction: action("reaction"),
  reactionType: ReactionType.NONE,
  reactionTransition: ReactionTransitionState.IDLE
};

export const Liked: Meta<IReactionsProps> = Template.bind({});
Liked.args = {
  ...args,
  reactionType: ReactionType.LIKE
};

export const Disliked: Meta<IReactionsProps> = Template.bind({});
Disliked.args = {
  ...args,
  reactionType: ReactionType.DISLIKE
};

export const LikingInProgress: Meta<IReactionsProps> = Template.bind({});
LikingInProgress.args = {
  ...args,
  reactionType: ReactionType.NONE,
  reactionTransition: ReactionTransitionState.LIKING
};

export const DislikingInProgress: Meta<IReactionsProps> = Template.bind({});
DislikingInProgress.args = {
  ...args,
  reactionType: ReactionType.NONE,
  reactionTransition: ReactionTransitionState.DISLIKING
};

export const NotReacatable: Meta<IReactionsProps> = Template.bind({});
NotReacatable.args = {
  ...args,
  isReactable: false,
  isNotReactableText: "You cannot react to your own post."
};

export default ReactionsStories;
