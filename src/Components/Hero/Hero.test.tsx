import { render, screen } from "@testing-library/react";

import Button from "Components/Button";
import { ButtonVariantEnum } from "Components/Button/types";

import Hero from "./index";

describe("Hero", () => {
  it("renders with cover image", () => {
    render(
      <Hero
        coverImage='https://picsum.photos/800/300?random=1'
        title='Event Title'
        description='Event description'
      />
    );
    expect(screen.getByText("Event Title")).toBeInTheDocument();
    expect(screen.getByText("Event description")).toBeInTheDocument();
    // Cover image is background, so not directly testable
  });

  it("renders without cover image", () => {
    render(<Hero title='Meetup Title' description='Meetup description' />);
    expect(screen.getByText("Meetup Title")).toBeInTheDocument();
    expect(screen.getByText("Meetup description")).toBeInTheDocument();
  });

  it("renders pills", () => {
    render(
      <Hero
        title='Event with Pills'
        pills={[
          { label: "Live", variant: "success", children: "Live" },
          { label: "Workshop", variant: "indigo", children: "Workshop" }
        ]}
      />
    );
    expect(screen.getByText("Live")).toBeInTheDocument();
    expect(screen.getByText("Workshop")).toBeInTheDocument();
  });

  it("renders actions", () => {
    render(
      <Hero
        title='Event with Actions'
        actions={[
          <Button key='edit' variant={ButtonVariantEnum.PRIMARY}>
            Edit
          </Button>,
          <Button key='share' variant={ButtonVariantEnum.SECONDARY}>
            Share
          </Button>
        ]}
      />
    );
    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(screen.getByText("Share")).toBeInTheDocument();
  });

  it("renders all features together", () => {
    render(
      <Hero
        coverImage='https://picsum.photos/800/300?random=2'
        title='Full Featured Hero'
        description='This hero has a cover, pills, and actions.'
        pills={[
          { label: "Upcoming", variant: "primary", children: "Upcoming" },
          { label: "Online", variant: "indigo", children: "Online" }
        ]}
        actions={[
          <Button key='edit'>Edit</Button>,
          <Button key='share'>Share</Button>
        ]}
      />
    );
    expect(screen.getByText("Full Featured Hero")).toBeInTheDocument();
    expect(
      screen.getByText("This hero has a cover, pills, and actions.")
    ).toBeInTheDocument();
    expect(screen.getByText("Upcoming")).toBeInTheDocument();
    expect(screen.getByText("Online")).toBeInTheDocument();
    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(screen.getByText("Share")).toBeInTheDocument();
  });
});
