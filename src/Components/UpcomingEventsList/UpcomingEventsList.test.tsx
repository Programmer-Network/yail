import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";

import { IUpcomingEventCardData } from "../UpcomingEventCard";
import { UpcomingEventsList } from "./UpcomingEventsList";

const mockNavLink = ({
  children,
  to,
  ...props
}: React.PropsWithChildren<{ to: string }>) => (
  <a href={to} {...props}>
    {children}
  </a>
);

const mockEvents: IUpcomingEventCardData[] = [
  {
    title: "React Advanced Workshop",
    eventURL: "/meetups/react-meetup/events/react-workshop",
    dateAndTime: "2025-10-31T20:12:00Z",
    summary: "Learn advanced React patterns"
  },
  {
    title: "TypeScript Deep Dive",
    eventURL: "/meetups/typescript-meetup/events/typescript-deep-dive",
    dateAndTime: "2025-11-05T18:00:00Z",
    summary: "Master TypeScript"
  },
  {
    title: "Node.js Performance",
    eventURL: "/meetups/nodejs-meetup/events/nodejs-performance",
    dateAndTime: "2025-11-12T19:30:00Z",
    summary: "Optimize your Node.js apps"
  }
];

describe("UpcomingEventsList", () => {
  it("renders list of events", () => {
    render(
      <BrowserRouter>
        <UpcomingEventsList
          events={mockEvents}
          NavLink={mockNavLink as never}
        />
      </BrowserRouter>
    );

    expect(screen.getByText("React Advanced Workshop")).toBeInTheDocument();
    expect(screen.getByText("TypeScript Deep Dive")).toBeInTheDocument();
    expect(screen.getByText("Node.js Performance")).toBeInTheDocument();
  });

  it("renders custom title", () => {
    render(
      <BrowserRouter>
        <UpcomingEventsList
          events={mockEvents}
          NavLink={mockNavLink as never}
          title='My Custom Title'
        />
      </BrowserRouter>
    );

    expect(screen.getByText("My Custom Title")).toBeInTheDocument();
  });

  it("renders default title when not provided", () => {
    render(
      <BrowserRouter>
        <UpcomingEventsList
          events={mockEvents}
          NavLink={mockNavLink as never}
        />
      </BrowserRouter>
    );

    expect(screen.getByText("Upcoming Events")).toBeInTheDocument();
  });

  it("renders empty state when no events", () => {
    render(
      <BrowserRouter>
        <UpcomingEventsList events={[]} NavLink={mockNavLink as never} />
      </BrowserRouter>
    );

    expect(screen.getByText("No upcoming events")).toBeInTheDocument();
  });

  it("renders custom empty message", () => {
    render(
      <BrowserRouter>
        <UpcomingEventsList
          events={[]}
          NavLink={mockNavLink as never}
          emptyMessage='Custom empty message'
        />
      </BrowserRouter>
    );

    expect(screen.getByText("Custom empty message")).toBeInTheDocument();
  });

  it("limits events based on maxEvents prop", () => {
    const manyEvents = Array.from({ length: 10 }, (_, i) => ({
      title: `Event ${i}`,
      eventURL: `/meetups/meetup-${i}/events/event-${i}`,
      dateAndTime: "2025-10-31T20:12:00Z",
      summary: `Description ${i}`
    }));

    render(
      <BrowserRouter>
        <UpcomingEventsList
          events={manyEvents}
          NavLink={mockNavLink as never}
          maxEvents={3}
        />
      </BrowserRouter>
    );

    expect(screen.getByText("Event 0")).toBeInTheDocument();
    expect(screen.getByText("Event 1")).toBeInTheDocument();
    expect(screen.getByText("Event 2")).toBeInTheDocument();
    expect(screen.queryByText("Event 3")).not.toBeInTheDocument();
  });

  it("renders View All link when viewAllUrl is provided", () => {
    render(
      <BrowserRouter>
        <UpcomingEventsList
          events={mockEvents}
          NavLink={mockNavLink as never}
          viewAllUrl='/events'
        />
      </BrowserRouter>
    );

    expect(screen.getByText("View All")).toBeInTheDocument();
  });

  it("calls onViewAllClick when View All is clicked", async () => {
    const user = userEvent.setup();
    const onViewAllClick = vi.fn();

    render(
      <BrowserRouter>
        <UpcomingEventsList
          events={mockEvents}
          NavLink={mockNavLink as never}
          viewAllUrl='/events'
          onViewAllClick={onViewAllClick}
        />
      </BrowserRouter>
    );

    const viewAllLink = screen.getByText("View All");
    await user.click(viewAllLink);

    expect(onViewAllClick).toHaveBeenCalled();
  });

  it("calls onEventClick when event card is clicked", async () => {
    const user = userEvent.setup();
    const onEventClick = vi.fn();

    render(
      <BrowserRouter>
        <UpcomingEventsList
          events={mockEvents}
          NavLink={mockNavLink as never}
          onEventClick={onEventClick}
        />
      </BrowserRouter>
    );

    const firstEvent = screen
      .getByText("React Advanced Workshop")
      .closest("article");
    if (firstEvent) {
      await user.click(firstEvent);
    }

    expect(onEventClick).toHaveBeenCalledWith(mockEvents[0]);
  });

  it("renders loading skeleton when isLoading is true", () => {
    render(
      <BrowserRouter>
        <UpcomingEventsList
          events={mockEvents}
          NavLink={mockNavLink as never}
          isLoading={true}
        />
      </BrowserRouter>
    );

    expect(screen.getByLabelText("Loading events")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <BrowserRouter>
        <UpcomingEventsList
          events={mockEvents}
          NavLink={mockNavLink as never}
          className='custom-class'
        />
      </BrowserRouter>
    );

    const section = container.querySelector("section");
    expect(section).toHaveClass("custom-class");
  });
});
