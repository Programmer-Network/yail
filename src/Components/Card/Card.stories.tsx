import type { Meta } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import Card from ".";

const meta = {
  title: "Components/Card",
  decorators: [withRouter],
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
          titleUrl: "/",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, nesciunt.",
          author: "John Doe",
          date: "2021-10-10T00:00:00.000Z",
          tags: [
            { name: "Tag 1", tagUrl: "/" },
            { name: "Tag 2", tagUrl: "/" }
          ]
        }}
      />
    </div>
  );
};
