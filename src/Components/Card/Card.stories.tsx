import type { Meta } from "@storybook/react";

import Card from ".";

const meta = {
  title: "Components/Card",
  component: Card,
  argTypes: {}
} satisfies Meta<typeof Card>;

export default meta;

export const Default = () => {
  return (
    <div className='m-8'>
      <Card
        data={{
          title: "Lorem ipsum dolor sit amet",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, nesciunt.",
          author: "John Doe",
          date: "2021-10-10T00:00:00.000Z",
          tags: ["tag1", "tag2"]
        }}
      />
    </div>
  );
};
