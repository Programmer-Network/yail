import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { Select } from "Components/Inputs";

import Filters from ".";
import { ViewType } from "../ViewToggle/types";

const meta: Meta<typeof Filters> = {
  title: "Components/Filters",
  component: Filters,
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof meta>;

const tags = ["react", "typescript", "fastify", "postgres", "redis"];

const FiltersWithState = (props: any) => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string[]>(props.selected || []);
  const [view, setView] = useState<ViewType>("card");

  return (
    <Filters
      search={{
        value: search,
        onChange: v => setSearch(v)
      }}
      tags={{
        selected,
        onChange: setSelected,
        options: tags.map(tag => ({ value: tag, label: tag })),
        showOutside: props.showOutside || false,
        ...(props.tags || {})
      }}
      view={{
        value: view,
        onChange: setView
      }}
      sorting={{
        value: "newest",
        onChange: () => {},
        options: [{ value: "newest", label: "Newest" }]
      }}
      additional={props.additional}
    />
  );
};

export const Default: Story = {
  render: () => <FiltersWithState />
};

export const WithTagsShownOutside: Story = {
  render: () => (
    <FiltersWithState
      tags={{
        showOutside: true,
        options: tags.map(tag => ({ value: tag, label: tag })),
        selected: ["react", "postgres"]
      }}
    />
  )
};

export const NoTagsSelected: Story = {
  render: () => <FiltersWithState selected={[]} />
};

export const WithExtraFilters: Story = {
  render: () => (
    <FiltersWithState
      additional={
        <Select
          placeholder='Select status...'
          options={[
            { value: "published", label: "Published" },
            { value: "draft", label: "Draft" }
          ]}
          name='status'
          value={[
            { value: "published", label: "Published" },
            { value: "draft", label: "Draft" }
          ]}
          onChange={() => {}}
          inputWrapperClassName='yl:min-w-[200px] yl:max-w-xs'
        />
      }
    />
  )
};

export const OnlySearch: Story = {
  render: function OnlySearchStory() {
    const [search, setSearch] = useState("");
    return (
      <Filters
        search={{
          value: search,
          onChange: v => setSearch(v)
        }}
        tags={{
          selected: [],
          onChange: () => {},
          options: [],
          showOutside: false
        }}
        view={{
          value: "card",
          onChange: () => {}
        }}
        sorting={{
          value: "newest",
          onChange: () => {},
          options: [{ value: "newest", label: "Newest" }]
        }}
      />
    );
  }
};

export const WithSorting: Story = {
  render: function WithSortingStory() {
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("newest");
    return (
      <Filters
        search={{
          value: search,
          onChange: v => setSearch(v)
        }}
        tags={{
          selected: [],
          onChange: () => {},
          options: [],
          showOutside: false
        }}
        view={{
          value: "card",
          onChange: () => {}
        }}
        sorting={{
          value: sort,
          onChange: v => setSort(v),
          options: [{ value: "newest", label: "Newest" }]
        }}
      />
    );
  }
};
