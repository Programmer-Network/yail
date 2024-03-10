import { Meta } from "@storybook/react";
import { NavLink } from "react-router-dom";
import { withRouter } from "storybook-addon-react-router-v6";

import Card from ".";
import { ICard } from "./types";

const CardStories: Meta<ICard> = {
  title: "Components/Card",
  decorators: [withRouter],
  component: Card,
  argTypes: {}
};

export const Default = () => {
  return (
    <div className='m-8'>
      <Card
        NavLink={NavLink}
        data={{
          title: "Lorem ipsum dolor sit amet",
          titleUrl: "/",
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

export const WithExternalLink = () => {
  return (
    <div className='m-8'>
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

export default CardStories;
