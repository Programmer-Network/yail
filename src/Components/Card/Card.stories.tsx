import { Meta, StoryObj } from "@storybook/react-vite";
import { NavLink } from "react-router-dom";

import Card from ".";
import { BadgeVariantEnum } from "../Badge/types";
import Icon from "../Icon";
import { ICardData } from "./types";

const action =
  (name: string) =>
  (...args: any[]) => {
    console.log(`${name}:`, args);
  };

const CardStories: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered"
  },
  decorators: [
    Story => {
      return (
        <div
          style={{
            maxWidth: "400px",
            width: "100%",
            margin: "0 auto"
          }}
        >
          <Story />
        </div>
      );
    }
  ],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "featured", "compact"]
    },
    isLoading: {
      control: { type: "boolean" }
    },
    maxVisibleTags: {
      control: { type: "number", min: 1, max: 20 }
    },
    maxTitleLines: {
      control: { type: "number", min: 1, max: 6 }
    },
    maxDescriptionLines: {
      control: { type: "number", min: 1, max: 6 }
    },
    showBookmark: {
      control: { type: "boolean" }
    },
    isBookmarked: {
      control: { type: "boolean" }
    },
    showShare: {
      control: { type: "boolean" }
    }
  }
};

type Story = StoryObj<typeof Card>;

const defaultData: ICardData = {
  title: "Beautiful Mountain Landscape",
  titleUrl: "/mountain-landscape",
  description:
    "A stunning view of snow-capped mountains at sunrise, showcasing nature's raw beauty and majesty. This breathtaking landscape captures the essence of wilderness and the power of natural formations.",
  author: {
    name: "John Doe",
    url: "/authors/john-doe",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
  },
  date: "Feb 15, 2024",
  image: {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop&crop=entropy&auto=format&q=80",
    alt: "Mountain landscape at sunrise",
    aspectRatio: "16:9",
    lazy: false
  },
  badges: [
    { title: "Premium", variant: BadgeVariantEnum.FILLED },
    { title: "Editor's Choice", variant: BadgeVariantEnum.OUTLINE }
  ],
  tags: [
    { name: "nature", url: "/tags/nature" },
    { name: "landscape", url: "/tags/landscape" },
    { name: "mountains", url: "/tags/mountains" },
    { name: "sunrise", url: "/tags/sunrise" },
    { name: "photography", url: "/tags/photography" },
    { name: "travel", url: "/tags/travel" },
    { name: "outdoor", url: "/tags/outdoor" },
    { name: "adventure", url: "/tags/adventure" },
    { name: "scenic", url: "/tags/scenic" },
    { name: "wilderness", url: "/tags/wilderness" },
    { name: "peaceful", url: "/tags/peaceful" },
    { name: "beautiful", url: "/tags/beautiful" }
  ],
  isFeatured: false,
  isRead: false
};

export const Default: Story = {
  args: {
    NavLink,
    data: defaultData,
    variant: "default",
    maxVisibleTags: 10,
    maxTitleLines: 2,
    maxDescriptionLines: 3,
    showBookmark: false,
    showShare: false,
    onCardClick: action("card-clicked"),
    onAuthorClick: action("author-clicked"),
    onTagClick: action("tag-clicked"),
    onImageClick: action("image-clicked"),
    onBookmark: action("bookmarked"),
    onShare: action("shared")
  }
};

export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true
  }
};

export const Featured: Story = {
  args: {
    ...Default.args,
    data: {
      ...defaultData,
      isFeatured: true
    },
    variant: "featured",
    showBookmark: true,
    showShare: true
  }
};

export const Compact: Story = {
  args: {
    ...Default.args,
    variant: "compact",
    data: {
      ...defaultData,
      image: undefined
    }
  }
};

export const WithExternalLink: Story = {
  args: {
    ...Default.args,
    data: {
      ...defaultData,
      titleUrl: "https://programmer.network",
      title: "External Link Example"
    }
  }
};

export const NoAuthor: Story = {
  args: {
    ...Default.args,
    data: {
      ...defaultData,
      author: undefined
    }
  }
};

export const NoImage: Story = {
  args: {
    ...Default.args,
    data: {
      ...defaultData,
      image: undefined
    }
  }
};

export const LongContent: Story = {
  args: {
    ...Default.args,
    data: {
      ...defaultData,
      title:
        "This is a very long title that should be truncated when it exceeds the maximum number of lines specified in the component props",
      description:
        "This is a very long description that demonstrates how the component handles extensive content. It should be truncated based on the maxDescriptionLines prop. The component will show only the specified number of lines and hide the rest to maintain a clean and consistent layout across different card instances. This feature is particularly useful when displaying cards in grid layouts where uniform heights are important for visual consistency."
    },
    maxTitleLines: 2,
    maxDescriptionLines: 3
  }
};

export const ManyTags: Story = {
  args: {
    ...Default.args,
    data: {
      ...defaultData,
      tags: Array.from({ length: 25 }, (_, index) => ({
        name: `tag-${index + 1}`,
        url: `/tags/tag-${index + 1}`
      }))
    },
    maxVisibleTags: 8
  }
};

export const ReadStatus: Story = {
  args: {
    ...Default.args,
    data: {
      ...defaultData,
      isRead: true
    }
  }
};

export const RelativeDate: Story = {
  args: {
    ...Default.args,
    data: {
      ...defaultData,
      date: "2 hours ago"
    }
  }
};

export const ShortDate: Story = {
  args: {
    ...Default.args,
    data: {
      ...defaultData,
      date: "Feb 15"
    }
  }
};

export const InteractiveCard: Story = {
  args: {
    ...Default.args,
    showBookmark: true,
    isBookmarked: false,
    showShare: true,
    onCardClick: action("card-clicked"),
    onAuthorClick: action("author-clicked"),
    onTagClick: action("tag-clicked"),
    onImageClick: action("image-clicked"),
    onBookmark: action("bookmarked"),
    onShare: action("shared")
  }
};

export const SquareImage: Story = {
  args: {
    ...Default.args,
    data: {
      ...defaultData,
      image: {
        src: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=400&fit=crop&crop=entropy&auto=format&q=80",
        alt: "Square mountain landscape",
        aspectRatio: "1:1",
        lazy: false
      }
    }
  }
};

export const BookmarkNotActive: Story = {
  args: {
    ...Default.args,
    showBookmark: true,
    isBookmarked: false
  }
};

export const BookmarkActive: Story = {
  args: {
    ...Default.args,
    showBookmark: true,
    isBookmarked: true
  }
};

export const BookmarkAndShare: Story = {
  args: {
    ...Default.args,
    showBookmark: true,
    isBookmarked: true,
    showShare: true
  }
};

export const LongTitleWithActions: Story = {
  args: {
    ...Default.args,
    data: {
      ...defaultData,
      title:
        "This is an extremely long title that demonstrates how the new bookmark and share placement doesn't interfere with long content and maintains proper visual hierarchy"
    },
    showBookmark: true,
    isBookmarked: false,
    showShare: true,
    maxTitleLines: 3
  }
};

export const NoImageWithActions: Story = {
  args: {
    ...Default.args,
    data: {
      ...defaultData,
      image: undefined,
      title: "Card Without Image But With Bookmark and Share Actions"
    },
    showBookmark: true,
    isBookmarked: true,
    showShare: true
  }
};

export const CompactWithActions: Story = {
  args: {
    ...Default.args,
    variant: "compact",
    data: {
      ...defaultData,
      image: undefined,
      title: "Compact Card With Actions",
      description:
        "This compact card shows how actions work in the compact variant without an image."
    },
    showBookmark: true,
    isBookmarked: false,
    showShare: true
  }
};

export const WithActions: Story = {
  args: {
    ...Default.args,
    actions: [
      {
        label: "Edit",
        onClick: e => {
          action("edit-clicked")(e);
          window.alert("Edit action clicked");
        },
        variant: "primary",
        icon: <Icon iconName='IconEdit' className='w-4 h-4' />
      },
      {
        label: "Delete",
        onClick: e => {
          action("delete-clicked")(e);
          window.alert("Delete action clicked");
        },
        variant: "danger",
        icon: <Icon iconName='IconDeleteBin' className='w-4 h-4' />
      }
    ]
  }
};

export const EditOnlyAction: Story = {
  args: {
    ...Default.args,
    actions: [
      {
        label: "Edit",
        onClick: e => {
          action("edit-clicked")(e);
          window.alert("Edit action clicked");
        },
        variant: "primary",
        icon: <Icon iconName='IconEdit' className='w-4 h-4' />
      }
    ]
  }
};

export const WithActionsNoImage: Story = {
  args: {
    ...Default.args,
    data: {
      ...defaultData,
      image: undefined
    },
    actions: [
      {
        label: "Edit",
        onClick: e => {
          action("edit-clicked")(e);
          window.alert("Edit action clicked");
        },
        variant: "primary",
        icon: <Icon iconName='IconEdit' className='w-4 h-4' />
      },
      {
        label: "Delete",
        onClick: e => {
          action("delete-clicked")(e);
          window.alert("Delete action clicked");
        },
        variant: "danger",
        icon: <Icon iconName='IconDeleteBin' className='w-4 h-4' />
      }
    ]
  }
};

export const EditOnlyActionNoImage: Story = {
  args: {
    ...Default.args,
    data: {
      ...defaultData,
      image: undefined
    },
    actions: [
      {
        label: "Edit",
        onClick: e => {
          action("edit-clicked")(e);
          window.alert("Edit action clicked");
        },
        variant: "primary",
        icon: <Icon iconName='IconEdit' className='w-4 h-4' />
      }
    ]
  }
};

export const WithBadges: Story = {
  args: {
    ...Default.args,
    data: {
      ...defaultData,
      badges: [
        { title: "Premium", variant: BadgeVariantEnum.FILLED },
        { title: "Editor's Choice", variant: BadgeVariantEnum.OUTLINE },
        {
          title: "Trending",
          variant: BadgeVariantEnum.FILLED,
          className: "yl:bg-green-500 yl:text-white"
        }
      ]
    }
  }
};

export const WithManyBadges: Story = {
  args: {
    ...Default.args,
    data: {
      ...defaultData,
      badges: [
        { title: "Premium", variant: BadgeVariantEnum.FILLED },
        { title: "Editor's Choice", variant: BadgeVariantEnum.OUTLINE },
        { title: "Trending", variant: BadgeVariantEnum.FILLED },
        {
          title: "New",
          variant: BadgeVariantEnum.FILLED,
          className: "yl:bg-blue-500 yl:text-white"
        },
        { title: "Popular", variant: BadgeVariantEnum.OUTLINE },
        {
          title: "Verified",
          variant: BadgeVariantEnum.FILLED,
          className: "yl:bg-green-600 yl:text-white"
        }
      ]
    }
  }
};

export const BadgesWithoutImage: Story = {
  args: {
    ...Default.args,
    data: {
      ...defaultData,
      image: undefined,
      badges: [
        { title: "Featured", variant: BadgeVariantEnum.FILLED },
        { title: "Staff Pick", variant: BadgeVariantEnum.OUTLINE }
      ]
    }
  }
};

export const BadgesOnly: Story = {
  args: {
    ...Default.args,
    data: {
      ...defaultData,
      tags: undefined,
      badges: [
        { title: "Premium", variant: BadgeVariantEnum.FILLED },
        { title: "Editor's Choice", variant: BadgeVariantEnum.OUTLINE }
      ]
    }
  }
};

export default CardStories;
