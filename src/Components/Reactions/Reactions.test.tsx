import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

import Reactions from "./";

describe("Reactions component", () => {
  const mockProps = {
    likesCount: 12,
    dislikesCount: 22,
    onLike: vi.fn(),
    onDislike: vi.fn(),
    commentCount: 10,
    isDisliking: false,
    isLiking: false,
    hasDisliked: false,
    hasLiked: true,
    onShared: vi.fn(),
    shareUrl: "https://www.google.com"
  };

  beforeEach(() => {
    mockProps.onLike.mockClear();
    mockProps.onDislike.mockClear();
    mockProps.onShared.mockClear();
  });

  test("renders like and dislike counts", () => {
    render(<Reactions {...mockProps} />);
    expect(screen.getByText(mockProps.likesCount)).toBeInTheDocument();
    expect(screen.getByText(mockProps.dislikesCount)).toBeInTheDocument();
  });

  test("handles like in case user hasn't liked already", () => {
    render(<Reactions {...mockProps} hasLiked={false} />);

    const likeIcon = screen.getByTestId("icon-arrow-up");
    fireEvent.click(likeIcon);
    expect(mockProps.onLike).toHaveBeenCalled();
  });

  test("handles like in case user has already liked", () => {
    render(<Reactions {...mockProps} hasLiked={true} />);

    const likeIcon = screen.getByTestId("icon-arrow-up");
    fireEvent.click(likeIcon);
    expect(mockProps.onLike).toHaveBeenCalledTimes(0);
  });

  test("handles dislike in case user hasn't disliked already", () => {
    render(<Reactions {...mockProps} hasDisliked={false} />);

    const dislikeIcon = screen.getByTestId("icon-arrow-down");
    fireEvent.click(dislikeIcon);
    expect(mockProps.onDislike).toHaveBeenCalled();
  });

  test("handles dislike in case user has already disliked", () => {
    render(<Reactions {...mockProps} hasDisliked={true} />);

    const dislikeIcon = screen.getByTestId("icon-arrow-down");
    fireEvent.click(dislikeIcon);
    expect(mockProps.onDislike).toHaveBeenCalledTimes(0);
  });

  test("onShared is called", () => {
    render(<Reactions {...mockProps} hasDisliked={true} />);

    const shareIcon = screen.getByTestId("icon-share");
    fireEvent.click(shareIcon);
    expect(mockProps.onShared).toHaveBeenCalled();
  });

  test("should not be able to like if its currently disliking", () => {
    render(<Reactions {...mockProps} isDisliking={true} />);

    const likeIcon = screen.getByTestId("icon-arrow-up");
    fireEvent.click(likeIcon);
    expect(mockProps.onLike).toHaveBeenCalledTimes(0);
  });

  test("should not be able to dislike if its currently liking", () => {
    render(<Reactions {...mockProps} isLiking={true} />);

    const dislikeIcon = screen.getByTestId("icon-arrow-down");
    fireEvent.click(dislikeIcon);
    expect(mockProps.onDislike).toHaveBeenCalledTimes(0);
  });
});
