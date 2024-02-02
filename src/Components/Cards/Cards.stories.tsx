import type { Meta } from "@storybook/react";

import Cards from ".";

const meta = {
  title: "Components/Cards",
  component: Cards,
  argTypes: {}
} satisfies Meta<typeof Cards>;

export default meta;

export const Default = () => {
  const cards = [
    {
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, nesciunt.",
      author: "John Doe",
      date: "2021-10-10T00:00:00.000Z",
      tags: ["tag1", "tag2"]
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, nesciunt.",
      author: "John Doe",
      date: "2021-10-10T00:00:00.000Z",
      tags: ["tag1", "tag2"]
    },
    {
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, nesciunt.",
      author: "John Doe",
      date: "2021-10-10T00:00:00.000Z",
      tags: ["tag1", "tag2"]
    }
  ];

  return (
    <div className='m-8'>
      <Cards cards={cards} columns={2} />
    </div>
  );
};
