import type { Meta, StoryObj } from "@storybook/react-vite";

import { ILatestArticleCardData } from "../LatestArticleCard/LatestArticleCard.types";
import { LatestArticlesList } from "./LatestArticlesList";

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

const generateMockArticles = (count: number): ILatestArticleCardData[] => {
  const titles = [
    "Getting Started with React Testing Library",
    "Advanced TypeScript Patterns for Better Code",
    "Building Scalable Microservices with Node.js",
    "Understanding React Server Components",
    "A Deep Dive into GraphQL Federation",
    "Mastering Docker and Kubernetes",
    "Modern CSS Architecture Patterns",
    "Building Real-time Applications with WebSockets"
  ];

  const summaries = [
    "Learn how to write effective tests for your React components using React Testing Library and best practices.",
    "Explore advanced TypeScript patterns including generics, conditional types, and mapped types.",
    "A comprehensive guide to designing and implementing microservices architecture using Node.js.",
    "Discover how React Server Components work and how they can improve your application performance.",
    "Learn how to use GraphQL Federation to build distributed graph architectures.",
    "Complete guide to containerization and orchestration for modern web applications.",
    "Best practices for organizing and maintaining CSS in large-scale applications.",
    "Build responsive real-time features using WebSockets and modern JavaScript."
  ];

  const usernames = [
    "johndoe",
    "janedoe",
    "techwriter",
    "codeguru",
    "devmaster",
    "reactpro",
    "fullstacker",
    "webwizard"
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: titles[i % titles.length] || "",
    summary: summaries[i % summaries.length] || "",
    createdAt: new Date(
      Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000
    ).toISOString(),
    articleURL: `/${usernames[i % usernames.length]}/articles/article-${i + 1}`,
    author: {
      username: usernames[i % usernames.length] || ""
    }
  }));
};

const meta: Meta<typeof LatestArticlesList> = {
  title: "Components/LatestArticlesList",
  component: LatestArticlesList,
  parameters: {
    layout: "padded"
  },
  tags: ["autodocs"],
  argTypes: {
    articles: {
      description: "Array of articles to display",
      control: "object"
    },
    title: {
      description: "Title of the list section",
      control: "text"
    },
    isLoading: {
      description: "Whether the list is in a loading state",
      control: "boolean"
    },
    emptyMessage: {
      description: "Message to display when there are no articles",
      control: "text"
    },
    maxArticles: {
      description: "Maximum number of articles to display",
      control: "number"
    },
    className: {
      description: "Additional CSS classes to apply",
      control: "text"
    },
    onArticleClick: {
      description: "Callback function when an article is clicked",
      action: "article clicked"
    },
    onViewAllClick: {
      description: "Callback function when View All button is clicked",
      action: "view all clicked"
    },
    viewAllUrl: {
      description: "URL for the View All link",
      control: "text"
    }
  },
  decorators: [
    Story => (
      <div style={{ maxWidth: "400px", margin: "0 auto" }}>
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof LatestArticlesList>;

export const Default: Story = {
  args: {
    articles: generateMockArticles(3),
    NavLink: MockNavLink,
    onArticleClick: () => {},
    onViewAllClick: () => {}
  }
};

export const WithCustomTitle: Story = {
  args: {
    articles: generateMockArticles(3),
    title: "Recent Posts",
    NavLink: MockNavLink,
    onArticleClick: () => {}
  }
};

export const Empty: Story = {
  args: {
    articles: [],
    NavLink: MockNavLink
  }
};

export const EmptyWithCustomMessage: Story = {
  args: {
    articles: [],
    emptyMessage: "No posts have been published yet",
    NavLink: MockNavLink
  }
};

export const Loading: Story = {
  args: {
    articles: [],
    NavLink: MockNavLink,
    isLoading: true,
    maxArticles: 5
  }
};

export const WithMaxArticles: Story = {
  args: {
    articles: generateMockArticles(8),
    maxArticles: 5,
    NavLink: MockNavLink,
    onArticleClick: () => {},
    onViewAllClick: () => {}
  }
};

export const ExactlyMaxArticles: Story = {
  args: {
    articles: generateMockArticles(5),
    maxArticles: 5,
    NavLink: MockNavLink,
    onArticleClick: () => {}
  }
};

export const SingleArticle: Story = {
  args: {
    articles: generateMockArticles(1),
    NavLink: MockNavLink,
    onArticleClick: () => {}
  }
};

export const WithoutClickHandlers: Story = {
  args: {
    articles: generateMockArticles(3),
    NavLink: MockNavLink
  }
};

export const WithCustomClassName: Story = {
  args: {
    articles: generateMockArticles(3),
    className: "bg-primary/5",
    NavLink: MockNavLink,
    onArticleClick: () => {}
  }
};

export const LongList: Story = {
  args: {
    articles: generateMockArticles(10),
    maxArticles: 10,
    NavLink: MockNavLink,
    onArticleClick: () => {}
  }
};

export const WithViewAllButton: Story = {
  args: {
    articles: generateMockArticles(8),
    maxArticles: 3,
    NavLink: MockNavLink,
    onArticleClick: () => {},
    onViewAllClick: () => {},
    viewAllUrl: "/articles"
  }
};
