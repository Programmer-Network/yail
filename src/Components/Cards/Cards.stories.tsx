import type { Meta } from "@storybook/react";
import { NavLink } from "react-router-dom";
import { withRouter } from "storybook-addon-react-router-v6";

import Cards from ".";

const meta = {
  title: "Components/Cards",
  decorators: [withRouter],
  component: Cards,
  argTypes: {}
} satisfies Meta<typeof Cards>;

export default meta;

export const Default = () => {
  const cards = [
    {
      title: "Lorem ipsum dolor sit amet",
      titleUrl: "/",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, nesciunt.",
      author: "John Doe",
      authorUrl: "/",
      date: "2021-10-10T00:00:00.000Z",
      tags: [
        { name: "tag1", url: "/" },
        { name: "tag2", url: "/" }
      ]
    },
    {
      title: "Lorem ipsum dolor sit amet",
      titleUrl: "/",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, nesciunt.",
      author: "John Doe",
      authorUrl: "/",
      date: "2021-10-10T00:00:00.000Z",
      tags: [{ name: "tag1", url: "/" }]
    },
    {
      title: "Lorem ipsum dolor sit amet",
      titleUrl: "/",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, nesciunt.",
      author: "John Doe",
      authorUrl: "/",
      date: "2021-10-10T00:00:00.000Z",
      tags: [{ name: "tag1", url: "/" }]
    }
  ];

  return (
    <div className='m-8'>
      <Cards cards={cards} columns={2} NavLink={NavLink} />
    </div>
  );
};
