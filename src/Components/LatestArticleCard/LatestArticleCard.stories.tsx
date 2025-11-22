import type { Meta, StoryObj } from "@storybook/react-vite";

import { LatestArticleCard } from "./LatestArticleCard";
import { ILatestArticleCardData } from "./LatestArticleCard.types";

const MockNavLink = ({
  to,
  onClick,
  className,
  children
}: {
  to: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  children: React.ReactNode;
}) => (
  <a href={to} onClick={onClick} className={className}>
    {children}
  </a>
);

const mockArticles: ILatestArticleCardData[] = [
  {
    id: 1,
    title: "Getting Started with React Testing Library",
    summary:
      "Learn how to write effective tests for your React components using React Testing Library and best practices.",
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    articleURL: "/johndoe/articles/getting-started-with-react-testing-library",
    author: {
      username: "johndoe"
    }
  },
  {
    id: 2,
    title: "Advanced TypeScript Patterns for Better Code",
    summary:
      "Explore advanced TypeScript patterns including generics, conditional types, and mapped types to write more maintainable code.",
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    articleURL: "/janedoe/articles/advanced-typescript-patterns",
    author: {
      username: "janedoe"
    }
  },
  {
    id: 3,
    title: "Building Scalable Microservices with Node.js",
    summary:
      "A comprehensive guide to designing and implementing microservices architecture using Node.js, Docker, and Kubernetes.",
    createdAt: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    articleURL: "/techwriter/articles/building-scalable-microservices",
    author: {
      username: "techwriter"
    }
  }
];

const meta: Meta<typeof LatestArticleCard> = {
  title: "Components/LatestArticleCard",
  component: LatestArticleCard,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    data: {
      description: "The article data to display",
      control: "object"
    },
    isLoading: {
      description: "Whether the card is in a loading state",
      control: "boolean"
    },
    className: {
      description: "Additional CSS classes to apply",
      control: "text"
    },
    onCardClick: {
      description: "Callback function when the card is clicked",
      action: "clicked"
    }
  },
  decorators: [
    Story => (
      <div style={{ width: "350px" }}>
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof LatestArticleCard>;

export const Default: Story = {
  args: {
    data: mockArticles[0],
    NavLink: MockNavLink,
    onCardClick: () => {
      console.log("Card clicked");
    }
  }
};

export const RecentArticle: Story = {
  args: {
    data: mockArticles[2],
    NavLink: MockNavLink,
    onCardClick: () => {
      console.log("Card clicked");
    }
  }
};

export const OldArticle: Story = {
  args: {
    data: mockArticles[1],
    NavLink: MockNavLink,
    onCardClick: () => {
      console.log("Card clicked");
    }
  }
};

export const LongTitle: Story = {
  args: {
    data: {
      id: 1,
      title:
        "This is a Very Long Article Title That Will Be Truncated After Two Lines to Prevent Layout Issues",
      summary:
        "Learn how to write effective tests for your React components using React Testing Library and best practices.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      articleURL:
        "/johndoe/articles/getting-started-with-react-testing-library",
      author: {
        username: "johndoe"
      }
    },
    NavLink: MockNavLink,
    onCardClick: () => {
      console.log("Card clicked");
    }
  }
};

export const LongSummary: Story = {
  args: {
    data: {
      id: 1,
      title: "Getting Started with React Testing Library",
      summary:
        "Learn how to write effective tests for your React components using React Testing Library and best practices.",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      articleURL:
        "/johndoe/articles/getting-started-with-react-testing-library",
      author: {
        username: "johndoe"
      }
    },
    NavLink: MockNavLink,
    onCardClick: () => {
      console.log("Card clicked");
    }
  }
};

export const WithoutClickHandler: Story = {
  args: {
    data: mockArticles[0],
    NavLink: MockNavLink
  }
};

export const Loading: Story = {
  args: {
    data: mockArticles[0],
    NavLink: MockNavLink,
    isLoading: true
  }
};

export const CustomClassName: Story = {
  args: {
    data: mockArticles[0],
    NavLink: MockNavLink,
    className: "bg-primary/5",
    onCardClick: () => {
      console.log("Card clicked");
    }
  }
};

export const JustPosted: Story = {
  args: {
    data: {
      id: 1,
      title: "Getting Started with React Testing Library",
      summary:
        "Learn how to write effective tests for your React components using React Testing Library and best practices    .",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      articleURL:
        "/johndoe/articles/getting-started-with-react-testing-library",
      author: {
        username: "johndoe"
      }
    },
    NavLink: MockNavLink,
    onCardClick: () => {
      console.log("Card clicked");
    }
  }
};

export const MultipleCards: Story = {
  render: () => (
    <div style={{ width: "350px" }} className='yl:flex yl:flex-col yl:gap-3'>
      {mockArticles.map(article => (
        <LatestArticleCard
          key={article.id}
          data={article}
          NavLink={MockNavLink}
          onCardClick={() => {
            console.log("Card clicked");
          }}
        />
      ))}
    </div>
  )
};
