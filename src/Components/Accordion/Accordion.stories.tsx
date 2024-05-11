import { faker } from "@faker-js/faker";
import { action } from "@storybook/addon-actions";
import { Meta } from "@storybook/react";
import { useEffect, useState } from "react";

import Accordion from ".";
import { ISection } from "./types";

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

const dummySections = Array(5)
  .fill(0)
  .map((_, index) => ({
    id: Math.floor(Math.random() * 1000000),
    title: faker.lorem.words(Math.floor(Math.random() * 10) + 1),
    description:
      index % 2 === 0
        ? faker.lorem.sentences(Math.floor(Math.random() * 5) + 1)
        : "",

    order: index,
    items: Array(Math.floor(Math.random() * 5) + 1)
      .fill(0)
      .map((__, index) => ({
        id: Math.floor(Math.random() * 1000000),
        title: faker.lorem.words(Math.floor(Math.random() * 10) + 1),
        order: index
      }))
  }));

export const Primary = () => {
  const [sections, setSections] = useState<ISection[]>([]);
  const [expandedSections, setExpandedSections] = useState<number[]>([1]);

  useEffect(() => {
    if (sections.length) {
      return;
    }

    setSections(dummySections);
  }, []);

  if (!sections.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Accordion
        className='yl-w-[500px]'
        selectedId={2}
        sections={sections}
        setSections={setSections}
        expanded={expandedSections}
        hasDraggableSections={true}
        hasDraggableSectionItems={true}
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

export const NonInteractive = () => {
  const [sections, setSections] = useState<ISection[]>([]);
  const [expandedSections, setExpandedSections] = useState<number[]>([1]);

  useEffect(() => {
    if (sections.length) {
      return;
    }

    setSections(dummySections);
  }, []);

  if (!sections.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Accordion
        className='yl-w-[500px]'
        selectedId={2}
        sections={sections}
        setSections={setSections}
        expanded={expandedSections}
        setExpanded={(expanded: number[]) => {
          setExpandedSections(expanded);
        }}
        onSelected={item => {
          action("onSelected")(item);
        }}
      />
    </div>
  );
};

export const WithoutDragAndDrop = () => {
  const [sections, setSections] = useState<ISection[]>([]);
  const [expandedSections, setExpandedSections] = useState<number[]>([1]);

  useEffect(() => {
    if (sections.length) {
      return;
    }

    setSections(dummySections);
  }, []);

  if (!sections.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Accordion
        className='yl-w-[500px]'
        selectedId={2}
        sections={sections}
        setSections={setSections}
        expanded={expandedSections}
        setExpanded={(expanded: number[]) => {
          setExpandedSections(expanded);
        }}
        onSelected={item => {
          action("onSelected")(item);
        }}
      />
    </div>
  );
};

export const AddSectionAndSectionItem = () => {
  const [sections, setSections] = useState<ISection[]>([]);
  const [expandedSections, setExpandedSections] = useState<number[]>([1]);

  useEffect(() => {
    if (sections.length) {
      return;
    }

    setSections(dummySections);
  }, []);

  if (!sections.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Accordion
        className='yl-w-[500px]'
        selectedId={2}
        sections={sections}
        setSections={setSections}
        expanded={expandedSections}
        onAddSection={() => {
          action("onAddSection")();
        }}
        onAddSectionItem={section => {
          action("onAddSectionItem")(section);
        }}
        setExpanded={(expanded: number[]) => {
          setExpandedSections(expanded);
          action("setExpanded")(expanded);
        }}
        onSelected={item => {
          action("onSelected")(item);
        }}
      />
    </div>
  );
};
