import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

import { Reactions } from "./";
import { ReactionTransitionState, ReactionType } from "./types";

describe("Reactions component", () => {
  const mockOnReaction = vi.fn();
  const baseProps = {
    onReaction: mockOnReaction,
    reactionsCount: 34,
    reactionType: ReactionType.NONE,
    reactionTransition: ReactionTransitionState.IDLE,
    isReactable: true
  };

  beforeEach(() => {
    mockOnReaction.mockClear();
  });

  test("renders reactions count", () => {
    render(<Reactions {...baseProps} />);
    expect(screen.getByText(baseProps.reactionsCount)).toBeInTheDocument();
  });

  test("allows liking when reactable and not previously liked", async () => {
    render(<Reactions {...baseProps} reactionType={ReactionType.NONE} />);
    const likeButton = screen.getByTestId("like-button");
    fireEvent.click(likeButton);
    expect(mockOnReaction).toHaveBeenCalledWith(ReactionType.LIKE);
  });

  test("prevents liking when already liked", async () => {
    render(<Reactions {...baseProps} reactionType={ReactionType.LIKE} />);
    const likeButton = screen.getByTestId("like-button");
    fireEvent.click(likeButton);
    expect(mockOnReaction).not.toHaveBeenCalled();
  });

  test("allows disliking when reactable and not previously disliked", async () => {
    render(<Reactions {...baseProps} reactionType={ReactionType.NONE} />);
    const dislikeButton = screen.getByTestId("dislike-button");
    fireEvent.click(dislikeButton);
    expect(mockOnReaction).toHaveBeenCalledWith(ReactionType.DISLIKE);
  });

  test("prevents disliking when already disliked", async () => {
    render(<Reactions {...baseProps} reactionType={ReactionType.DISLIKE} />);
    const dislikeButton = screen.getByTestId("dislike-button");
    fireEvent.click(dislikeButton);
    expect(mockOnReaction).not.toHaveBeenCalled();
  });

  test("prevents any reaction when not reactable", async () => {
    render(<Reactions {...baseProps} isReactable={false} />);
    const likeButton = screen.getByTestId("like-button");
    const dislikeButton = screen.getByTestId("dislike-button");

    fireEvent.click(likeButton);
    fireEvent.click(dislikeButton);

    expect(mockOnReaction).not.toHaveBeenCalled();
  });

  test("shows loading indicator during liking yl:transition", async () => {
    render(
      <Reactions
        {...baseProps}
        reactionTransition={ReactionTransitionState.LIKING}
      />
    );

    const loadingLikeIndicator = screen.getByTestId("like-spinner");
    expect(loadingLikeIndicator).toBeInTheDocument();
    expect(screen.queryByTestId("like-button")).not.toBeInTheDocument();
  });

  test("shows loading indicator during disliking yl:transition", async () => {
    render(
      <Reactions
        {...baseProps}
        reactionTransition={ReactionTransitionState.DISLIKING}
      />
    );

    const loadingDislikeIndicator = screen.getByTestId("dislike-spinner");
    expect(loadingDislikeIndicator).toBeInTheDocument();
    expect(screen.queryByTestId("dislike-button")).not.toBeInTheDocument();
  });
});
