import type { Meta, StoryObj } from "@storybook/react-vite";

import { PillVariant } from "../Pill";
import PersonCardSkeleton from "./PersonCard.Skeleton";
import PersonCard from "./index";
import { IPerson } from "./types";

const meta: Meta<typeof PersonCard> = {
  title: "Components/PersonCard",
  component: PersonCard,
  tags: ["autodocs"],
  decorators: [
    Story => (
      <div style={{ maxWidth: "400px", margin: "0 auto" }}>
        <Story />
      </div>
    )
  ],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"]
    },
    showTags: {
      control: { type: "boolean" }
    },
    showSocialLinks: {
      control: { type: "boolean" }
    },
    about: {
      control: { type: "boolean" }
    },
    maxTags: {
      control: { type: "number" }
    },
    maxDescriptionLines: {
      control: { type: "number" }
    }
  }
};

export default meta;
type Story = StoryObj<typeof PersonCard>;

const mockPerson: IPerson = {
  id: 1,
  username: "ada_lovelace",
  email: "ada@lovelace.com",
  avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  location: "London, UK",
  badge: {
    text: "Verified",
    variant: PillVariant.PRIMARY
  },
  tags: [
    { id: 1, name: "JavaScript" },
    { id: 2, name: "TypeScript" },
    { id: 3, name: "React" },
    { id: 4, name: "Node.js" },
    { id: 5, name: "Python" }
  ],
  socialProfiles: {
    github: "https://github.com/ada",
    linkedin: "https://linkedin.com/in/ada",
    twitter: "https://twitter.com/ada",
    website: "https://ada.dev",
    leetcode: "https://leetcode.com/ada"
  }
};

export const Default: Story = {
  args: {
    person: mockPerson,
    size: "medium"
  }
};

export const SmallCard: Story = {
  args: {
    person: mockPerson,
    size: "small"
  }
};

export const LargeCard: Story = {
  args: {
    person: mockPerson,
    size: "large"
  },
  decorators: [
    Story => (
      <div style={{ maxWidth: "500px", margin: "0 auto" }}>
        <Story />
      </div>
    )
  ]
};

export const WithActions: Story = {
  args: {
    person: mockPerson,
    size: "medium",
    actions: [
      {
        label: "Follow",
        onClick: (person: IPerson) => console.log("Following", person.name),
        variant: "primary",
        iconName: "IconUser"
      },
      {
        label: "Message",
        onClick: (person: IPerson) => console.log("Messaging", person.name),
        variant: "outlined",
        iconName: "IconMessage"
      },
      {
        label: "Block",
        onClick: (person: IPerson) => console.log("Blocking", person.name),
        variant: "danger",
        iconName: "IconBlock"
      }
    ]
  }
};

export const NoAvatar: Story = {
  args: {
    person: {
      ...mockPerson,
      avatar: undefined
    },
    size: "medium"
  }
};

export const NoTags: Story = {
  args: {
    person: {
      ...mockPerson,
      tags: []
    },
    size: "medium"
  }
};

export const NoSocialLinks: Story = {
  args: {
    person: {
      ...mockPerson,
      socialProfiles: {}
    },
    size: "medium"
  }
};

export const LongDescription: Story = {
  args: {
    person: {
      ...mockPerson
    },
    size: "medium",
    maxDescriptionLines: 2
  }
};

export const ManyTags: Story = {
  args: {
    person: {
      ...mockPerson,
      tags: [
        { id: 1, name: "JavaScript" },
        { id: 2, name: "TypeScript" },
        { id: 3, name: "React" },
        { id: 4, name: "Node.js" },
        { id: 5, name: "Python" },
        { id: 6, name: "Go" },
        { id: 7, name: "Docker" },
        { id: 8, name: "Kubernetes" },
        { id: 9, name: "AWS" },
        { id: 10, name: "PostgreSQL" }
      ]
    },
    size: "medium",
    maxTags: 3
  }
};

export const Clickable: Story = {
  args: {
    person: mockPerson,
    size: "medium",
    onClick: (person: IPerson) => console.log("Clicked on", person.name)
  }
};

export const Loading: StoryObj<typeof PersonCardSkeleton> = {
  render: () => (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <PersonCardSkeleton size='medium' />
    </div>
  )
};

// Story showing multiple cards in a grid
export const MultipleCards: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        maxWidth: "1200px",
        margin: "0 auto"
      }}
    >
      <PersonCard person={mockPerson} size='small' />
      <PersonCard person={{ ...mockPerson }} size='medium' />
      <PersonCard person={{ ...mockPerson, avatar: undefined }} size='large' />
    </div>
  )
};
