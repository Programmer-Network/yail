import type { Meta, StoryObj } from "@storybook/react";

import DraggableList from ".";
import { IDraggableListItem } from "./types";

const meta = {
  title: "Core/DraggableList",
  component: DraggableList,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof DraggableList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    draggedClassName: "yl-bg-primary",
    draggedOverClassName: "yl-bg-rose-500",
    isDraggable: true,
    onDragged: (items: IDraggableListItem[]) => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(items);
        }, 2000);
      });
    },
    items: [
      {
        id: 1,
        title: "Item 1",
        description: "Description 1",
        order: 1
      },
      {
        id: 2,
        title: "Item 2",
        description: "Description 2",
        order: 2
      },
      {
        id: 3,
        title: "Item 3",
        description: "Description 3",
        order: 3
      },
      {
        id: 4,
        title: "Item 4",
        description: "Description 4",
        order: 4
      }
    ]
  }
};

export const WithOneItem: Story = {
  args: {
    draggedClassName: "yl-bg-primary",
    draggedOverClassName: "yl-bg-rose-500",
    isDraggable: true,
    onDragged: (items: IDraggableListItem[]) => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(items);
        }, 2000);
      });
    },
    items: [
      {
        id: 1,
        title: "Item 1",
        description: "Description 1",
        order: 1
      }
    ]
  }
};
