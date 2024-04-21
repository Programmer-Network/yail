import { faker } from "@faker-js/faker";
import { action } from "@storybook/addon-actions";
import { Meta } from "@storybook/react";
import { useState } from "react";

import Accordion from ".";

const meta = {
  title: "Core / Accordion",
  component: Accordion,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Accordion>;

export default meta;

const sections = Array(15)
  .fill(0)
  .map((_, index) => ({
    id: index,
    title: faker.lorem.words(Math.floor(Math.random() * 10) + 1),
    description:
      index % 2 === 0
        ? faker.lorem.sentences(Math.floor(Math.random() * 5) + 1)
        : "",

    order: index,
    items: Array(Math.floor(Math.random() * 10) + 1)
      .fill(0)
      .map((__, index) => ({
        id: index,
        title: faker.lorem.words(Math.floor(Math.random() * 10) + 1),
        order: index
      }))
  }));

export const Primary = () => {
  const [expandedSections, setExpandedSections] = useState<number[]>([
    sections[0].id
  ]);

  return (
    <div>
      <Accordion
        className='yl-w-[500px]'
        selectedId={2}
        sections={sections}
        expanded={expandedSections}
        setExpanded={(expanded: number[]) => {
          setExpandedSections(expanded);
        }}
        onSelected={item => {
          action("onSelected")(item);
        }}
        onSectionItemClick={sectionItem => {
          action("onSectionItemClick")(sectionItem);
        }}
      />
    </div>
  );
};
