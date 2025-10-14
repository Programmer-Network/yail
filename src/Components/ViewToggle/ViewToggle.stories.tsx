import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import ViewToggle from "./index";
import { ViewType } from "./types";

const meta: Meta<typeof ViewToggle> = {
  title: "Components/ViewToggle",
  component: ViewToggle,

  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof meta>;

const ViewToggleWithState = () => {
  const [currentView, setCurrentView] = useState<ViewType>("card");

  return <ViewToggle currentView={currentView} onViewChange={setCurrentView} />;
};

export const Default: Story = {
  render: () => <ViewToggleWithState />
};

export const CardView: Story = {
  args: {
    currentView: "card",
    onViewChange: () => {}
  }
};

export const TableView: Story = {
  args: {
    currentView: "table",
    onViewChange: () => {}
  }
};
