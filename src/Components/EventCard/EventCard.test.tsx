import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter, NavLink } from "react-router-dom";
import { vi } from "vitest";

import { EventCard } from ".";
import { IEventCardData } from "./EventCard.types";
import { getDefaultEventPills } from "./EventCard.utils";

const mockNavLink = NavLink;

describe("EventCard component", () => {
  const basicEventData: IEventCardData = {
    title: "Test Event Title",
    titleUrl: "/events/test-event",
    description: "This is a test description for the event card component.",
    pills: getDefaultEventPills("meetup", "published"),
    dateAndTime: new Date("2025-10-28T18:00:00Z"),
    timezone: "Europe/Berlin",
    eventType: "meetup",
    locationType: "remote",
    spots: 100,
    spotsRemaining: 50,
    duration: 120,
    status: "published"
  };

  const fullEventData: IEventCardData = {
    title: "Complete Test Event",
    titleUrl: "/events/complete-test",
    description: "This is a complete test with all features enabled.",
    date: "Oct 28, 2025",
    author: {
      name: "John Doe",
      url: "/authors/john-doe",
      avatarUrl: "https://example.com/avatar.jpg"
    },
    tags: [
      { name: "react", url: "/tags/react" },
      { name: "testing", url: "/tags/testing" },
      { name: "typescript", url: "/tags/typescript" }
    ],
    pills: getDefaultEventPills("live-stream", "published"),
    isRead: false,
    isFeatured: false,
    dateAndTime: new Date("2025-10-28T18:00:00Z"),
    timezone: "Europe/Berlin",
    eventType: "live-stream",
    locationType: "remote",
    location: "Online",
    eventUrl: "https://zoom.us/j/123456789",
    spots: 150,
    spotsRemaining: 108,
    duration: 120,
    status: "published",
    attendeesCount: 42,
    attendees: [
      {
        id: 1,
        name: "Attendee 1",
        avatarUrl: "https://example.com/avatar1.jpg"
      },
      {
        id: 2,
        name: "Attendee 2",
        avatarUrl: "https://example.com/avatar2.jpg"
      },
      {
        id: 3,
        name: "Attendee 3",
        avatarUrl: "https://example.com/avatar3.jpg"
      }
    ]
  };

  const renderEventCard = (props = {}) => {
    return render(
      <BrowserRouter>
        <EventCard data={basicEventData} NavLink={mockNavLink} {...props} />
      </BrowserRouter>
    );
  };

  describe("Basic rendering", () => {
    it("renders with minimum required props", () => {
      renderEventCard();

      expect(screen.getByText("Test Event Title")).toBeInTheDocument();
      expect(
        screen.getByText(
          "This is a test description for the event card component."
        )
      ).toBeInTheDocument();
    });

    it("renders loading skeleton when isLoading is true", () => {
      renderEventCard({ isLoading: true });

      expect(screen.queryByText("Test Event Title")).not.toBeInTheDocument();
    });

    it("applies custom className correctly", () => {
      renderEventCard({ className: "custom-test-class" });

      const cardElement = screen.getByRole("article");
      expect(cardElement).toHaveClass("custom-test-class");
    });
  });

  describe("Event-specific content rendering", () => {
    it("renders event type badge", () => {
      renderEventCard({ data: fullEventData });

      expect(screen.getByText("LIVE-STREAM")).toBeInTheDocument();
    });

    it("renders date badge with month and day", () => {
      renderEventCard({ data: fullEventData });

      expect(screen.getByText("Oct")).toBeInTheDocument();
      expect(screen.getByText("28")).toBeInTheDocument();
    });

    it("renders formatted date/time", () => {
      renderEventCard({ data: fullEventData });

      // Check for date in simplified format (no year shown in component)
      expect(screen.getByText(/Oct 28/)).toBeInTheDocument();
    });

    it("renders location for remote events", () => {
      const remoteEventData = {
        ...fullEventData,
        locationType: "remote" as const,
        location: undefined
      };
      renderEventCard({ data: remoteEventData });

      expect(screen.getByText("Online")).toBeInTheDocument();
    });

    it("renders location text for onsite events", () => {
      renderEventCard({
        data: {
          ...fullEventData,
          locationType: "onsite",
          location: "Tech Hub Berlin"
        }
      });

      expect(screen.getByText("Tech Hub Berlin")).toBeInTheDocument();
    });

    it("renders location text for hybrid events", () => {
      renderEventCard({
        data: {
          ...fullEventData,
          locationType: "hybrid",
          location: "Tech Hub Berlin + Online"
        }
      });

      expect(screen.getByText("Tech Hub Berlin + Online")).toBeInTheDocument();
    });
  });

  describe("Event types", () => {
    it("renders meetup event type", () => {
      renderEventCard({
        data: {
          ...basicEventData,
          eventType: "meetup",
          pills: getDefaultEventPills("meetup", "published")
        }
      });

      expect(screen.getByText("MEETUP")).toBeInTheDocument();
    });

    it("renders hackathon event type", () => {
      renderEventCard({
        data: {
          ...basicEventData,
          eventType: "hackathon",
          pills: getDefaultEventPills("hackathon", "published")
        }
      });

      expect(screen.getByText("HACKATHON")).toBeInTheDocument();
    });

    it("renders workshop event type", () => {
      renderEventCard({
        data: {
          ...basicEventData,
          eventType: "workshop",
          pills: getDefaultEventPills("workshop", "published")
        }
      });

      expect(screen.getByText("WORKSHOP")).toBeInTheDocument();
    });

    it("renders live-stream event type", () => {
      renderEventCard({
        data: {
          ...basicEventData,
          eventType: "live-stream",
          pills: getDefaultEventPills("live-stream", "published")
        }
      });

      expect(screen.getByText("LIVE-STREAM")).toBeInTheDocument();
    });
  });

  describe("Location types", () => {
    it("renders remote location type", () => {
      const remoteEventData = {
        ...fullEventData,
        locationType: "remote" as const,
        location: undefined
      };
      renderEventCard({ data: remoteEventData });

      expect(screen.getByText("Online")).toBeInTheDocument();
    });

    it("renders onsite location type", () => {
      renderEventCard({
        data: {
          ...fullEventData,
          locationType: "onsite",
          location: "Tech Hub Berlin"
        }
      });

      expect(screen.getByText("Tech Hub Berlin")).toBeInTheDocument();
    });

    it("renders hybrid location type", () => {
      renderEventCard({
        data: {
          ...fullEventData,
          locationType: "hybrid",
          location: "Tech Hub Berlin + Online"
        }
      });

      expect(screen.getByText("Tech Hub Berlin + Online")).toBeInTheDocument();
    });
  });

  describe("Interactive features", () => {
    it("calls onCardClick when card is clicked", () => {
      const mockOnCardClick = vi.fn();
      renderEventCard({ data: fullEventData, onCardClick: mockOnCardClick });

      const cardElement = screen.getByRole("article");
      fireEvent.click(cardElement);

      expect(mockOnCardClick).toHaveBeenCalledWith(fullEventData);
    });

    it("calls onAuthorClick when author is clicked", () => {
      const mockOnAuthorClick = vi.fn();
      renderEventCard({
        data: fullEventData,
        onAuthorClick: mockOnAuthorClick
      });

      const authorLink = screen.getByText("John Doe");
      fireEvent.click(authorLink);

      expect(mockOnAuthorClick).toHaveBeenCalled();
    });

    it("calls onTagClick when tag is clicked", () => {
      const mockOnTagClick = vi.fn();
      renderEventCard({ data: fullEventData, onTagClick: mockOnTagClick });

      const tagLink = screen.getByText("#react");
      fireEvent.click(tagLink);

      expect(mockOnTagClick).toHaveBeenCalled();
    });

    it("calls onBookmark when bookmark button is clicked", () => {
      const mockOnBookmark = vi.fn();
      renderEventCard({
        data: fullEventData,
        showBookmark: true,
        onBookmark: mockOnBookmark
      });

      const bookmarkButton = screen.getByLabelText(/bookmark/i);
      fireEvent.click(bookmarkButton);

      expect(mockOnBookmark).toHaveBeenCalledWith(fullEventData);
    });

    it("calls onShare when share button is clicked", () => {
      const mockOnShare = vi.fn();
      renderEventCard({
        data: fullEventData,
        showShare: true,
        onShare: mockOnShare
      });

      const shareButton = screen.getByLabelText(/share/i);
      fireEvent.click(shareButton);

      expect(mockOnShare).toHaveBeenCalledWith(fullEventData);
    });
  });

  describe("Author rendering", () => {
    it("renders author with avatar", () => {
      renderEventCard({ data: fullEventData });

      expect(screen.getByText("John Doe")).toBeInTheDocument();
      expect(screen.getByAltText("John Doe")).toBeInTheDocument();
    });

    it("renders author as link when URL is provided", () => {
      renderEventCard({ data: fullEventData });

      const authorLink = screen.getByText("John Doe");
      expect(authorLink).toHaveAttribute("href", "/authors/john-doe");
    });

    it("renders author without link when URL is not provided", () => {
      const dataWithoutAuthorUrl = {
        ...fullEventData,
        author: {
          name: "John Doe",
          avatarUrl: "https://example.com/avatar.jpg"
        }
      };
      renderEventCard({ data: dataWithoutAuthorUrl });

      const authorElement = screen.getByText("John Doe");
      expect(authorElement.tagName).toBe("SPAN");
    });
  });

  describe("Tags rendering", () => {
    it("renders all tags", () => {
      renderEventCard({ data: fullEventData });

      expect(screen.getByText("#react")).toBeInTheDocument();
      expect(screen.getByText("#testing")).toBeInTheDocument();
      expect(screen.getByText("#typescript")).toBeInTheDocument();
    });

    it("limits yl:visible tags based on maxVisibleTags prop", () => {
      renderEventCard({ data: fullEventData, maxVisibleTags: 2 });

      expect(screen.getByText("#react")).toBeInTheDocument();
      expect(screen.getByText("#testing")).toBeInTheDocument();
      expect(screen.getByText("+1 more")).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("has proper ARIA labels", () => {
      renderEventCard({ data: fullEventData });

      const cardElement = screen.getByRole("article");
      expect(cardElement).toHaveAttribute("aria-labelledby");
      expect(cardElement).toHaveAttribute("aria-describedby");
    });

    it("is keyboard navigable when clickable", () => {
      const mockOnCardClick = vi.fn();
      renderEventCard({ data: fullEventData, onCardClick: mockOnCardClick });

      const cardElement = screen.getByRole("article");
      expect(cardElement).toHaveAttribute("tabindex", "0");

      fireEvent.keyDown(cardElement, { key: "Enter" });
      expect(mockOnCardClick).toHaveBeenCalled();
    });

    it("is not keyboard navigable when not clickable", () => {
      renderEventCard({ data: fullEventData });

      const cardElement = screen.getByRole("article");
      expect(cardElement).toHaveAttribute("tabindex", "-1");
    });
  });

  describe("Footer actions", () => {
    it("renders footer actions when provided", () => {
      const footerActions = [
        {
          label: "Register",
          onClick: vi.fn(),
          variant: "primary" as const,
          show: true
        }
      ];

      renderEventCard({ data: fullEventData, footerActions });

      expect(screen.getByText("Register")).toBeInTheDocument();
    });

    it("calls footer action onClick handler", () => {
      const mockOnClick = vi.fn();
      const footerActions = [
        {
          label: "Register",
          onClick: mockOnClick,
          variant: "primary" as const,
          show: true
        }
      ];

      renderEventCard({ data: fullEventData, footerActions });

      const registerButton = screen.getByText("Register");
      fireEvent.click(registerButton);

      expect(mockOnClick).toHaveBeenCalled();
    });
  });
});
