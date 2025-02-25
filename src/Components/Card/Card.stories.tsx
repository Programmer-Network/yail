import { Meta, StoryObj } from "@storybook/react";
import { NavLink } from "react-router-dom";
import { withRouter } from "storybook-addon-remix-react-router";

import Card from ".";

const CardStories: Meta<typeof Card> = {
  title: "Components/Card",
  decorators: [withRouter],
  component: Card,
  parameters: {
    layout: "centered"
  }
};

type Story = StoryObj<typeof Card>;

export const Default = () => {
  return (
    <div className='yl-mt-8'>
      <Card
        NavLink={NavLink}
        data={{
          title: "Lorem ipsum dolor sit amet",
          titleUrl: "/",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, nesciunt.",
          author: "John Doe",
          authorUrl: "/john-doe",
          date: "2021-10-10T00:00:00.000Z",
          tags: [
            { name: "Tag 1", url: "/" },
            { name: "Tag 2", url: "/" }
          ]
        }}
      />
    </div>
  );
};

export const WithExternalLink = () => {
  return (
    <div className='yl-mt-8'>
      <Card
        NavLink={NavLink}
        data={{
          title: "Lorem ipsum dolor sit amet",
          titleUrl: "https://programmer.network",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, nesciunt.",
          author: "John Doe",
          date: "2021-10-10T00:00:00.000Z",
          tags: [
            { name: "Tag 1", url: "/" },
            { name: "Tag 2", url: "/" }
          ]
        }}
      />
    </div>
  );
};

export const WithImage: Story = {
  args: {
    NavLink,
    data: {
      title: "Beautiful Mountain Landscape",
      titleUrl: "/mountain-landscape",
      description:
        "A stunning view of snow-capped mountains at sunrise, showcasing nature's raw beauty and majesty.",
      author: "John Doe",
      authorUrl: "/authors/john-doe",
      date: "2024-02-15",
      image: "https://images.unsplash.com/photo-1706463629335-d92264bbfd6f",
      tags: [
        { name: "nature", url: "/tags/nature" },
        { name: "landscape", url: "/tags/landscape" },
        { name: "mountains", url: "/tags/mountains" },
        { name: "sunrise", url: "/tags/sunrise" },
        { name: "nature", url: "/tags/nature" },
        { name: "landscape", url: "/tags/landscape" },
        { name: "mountains", url: "/tags/mountains" },
        { name: "sunrise", url: "/tags/sunrise" }
      ]
    }
  }
};

export default CardStories;
