import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";

import { UpcomingEventCard } from "./UpcomingEventCard";
import { IUpcomingEventCardData } from "./UpcomingEventCard.types";

const mockNavLink = ({
  children,
  to,
  ...props
}: React.PropsWithChildren<{ to: string }>) => (
  <a href={to} {...props}>
    {children}
  </a>
);

const mockEventData: IUpcomingEventCardData = {
  title: "React Advanced Workshop",
  eventURL: "/meetups/react-meetup/events/react-workshop",
  dateAndTime: "2025-10-31T20:12:00Z",
  summary: "Learn advanced React patterns and best practices"
};

describe("UpcomingEventCard", () => {
  it("renders event data correctly", () => {
    render(
      <BrowserRouter>
        <UpcomingEventCard
          data={mockEventData}
          NavLink={mockNavLink as never}
        />
      </BrowserRouter>
    );

    expect(screen.getByText("React Advanced Workshop")).toBeInTheDocument();
    expect(
      screen.getByText("Learn advanced React patterns and best practices")
    ).toBeInTheDocument();
  });

  it("displays date information correctly", () => {
    render(
      <BrowserRouter>
        <UpcomingEventCard
          data={mockEventData}
          NavLink={mockNavLink as never}
        />
      </BrowserRouter>
    );

    const eventDate = new Date(mockEventData.dateAndTime);
    const month = eventDate.toLocaleDateString("en-US", { month: "short" });
    const day = eventDate.getDate().toString();

    expect(screen.getByText(month)).toBeInTheDocument();
    expect(screen.getByText(day)).toBeInTheDocument();
  });

  it("calls onCardClick when clicked", async () => {
    const user = userEvent.setup();
    const onCardClick = vi.fn();

    render(
      <BrowserRouter>
        <UpcomingEventCard
          data={mockEventData}
          NavLink={mockNavLink as never}
          onCardClick={onCardClick}
        />
      </BrowserRouter>
    );

    const card = screen.getByRole("article");
    await user.click(card);

    expect(onCardClick).toHaveBeenCalledWith(mockEventData);
  });

  it("handles keyboard navigation with Enter key", async () => {
    const user = userEvent.setup();
    const onCardClick = vi.fn();

    render(
      <BrowserRouter>
        <UpcomingEventCard
          data={mockEventData}
          NavLink={mockNavLink as never}
          onCardClick={onCardClick}
        />
      </BrowserRouter>
    );

    const card = screen.getByRole("article");
    card.focus();
    await user.keyboard("{Enter}");

    expect(onCardClick).toHaveBeenCalledWith(mockEventData);
  });

  it("handles keyboard navigation with Space key", async () => {
    const user = userEvent.setup();
    const onCardClick = vi.fn();

    render(
      <BrowserRouter>
        <UpcomingEventCard
          data={mockEventData}
          NavLink={mockNavLink as never}
          onCardClick={onCardClick}
        />
      </BrowserRouter>
    );

    const card = screen.getByRole("article");
    card.focus();
    await user.keyboard(" ");

    expect(onCardClick).toHaveBeenCalledWith(mockEventData);
  });

  it("renders loading skeleton when isLoading is true", () => {
    render(
      <BrowserRouter>
        <UpcomingEventCard
          data={mockEventData}
          NavLink={mockNavLink as never}
          isLoading={true}
        />
      </BrowserRouter>
    );

    expect(screen.getByRole("status")).toBeInTheDocument();
    expect(screen.getByLabelText("Loading event")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(
      <BrowserRouter>
        <UpcomingEventCard
          data={mockEventData}
          NavLink={mockNavLink as never}
          className='custom-class'
        />
      </BrowserRouter>
    );

    const card = screen.getByRole("article");
    expect(card).toHaveClass("custom-class");
  });

  it("does not call onCardClick when not provided", async () => {
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <UpcomingEventCard
          data={mockEventData}
          NavLink={mockNavLink as never}
        />
      </BrowserRouter>
    );

    const card = screen.getByRole("article");
    await user.click(card);

    // Should not throw error
    expect(card).toBeInTheDocument();
  });
});
