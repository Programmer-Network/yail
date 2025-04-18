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
  const [selectedSection, setSelectedSection] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  useEffect(() => {
    if (sections.length) {
      return;
    }

    setSections(dummySections);
  }, [sections.length]);

  if (!sections.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Accordion
        className='yl:w-[500px]'
        sections={sections}
        selected={{
          sectionId: selectedSection ?? 0,
          itemId: selectedItem ?? 0
        }}
        setSelectedSection={sectionId => {
          setSelectedSection(sectionId);
        }}
        setSelectedItem={itemId => {
          setSelectedItem(itemId);
        }}
        onSorted={(_, data) => {
          setSections(data);
        }}
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

export const Interactive = () => {
  const [sections, setSections] = useState<ISection[]>([]);
  const [expandedSections, setExpandedSections] = useState<number[]>([1]);
  const [selectedSection, setSelectedSection] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  useEffect(() => {
    if (sections.length) {
      return;
    }

    setSections(dummySections);
  }, [sections.length]);

  if (!sections.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Accordion
        className='yl:w-[500px]'
        sections={sections}
        expanded={expandedSections}
        selected={{
          sectionId: selectedSection ?? 0,
          itemId: selectedItem ?? 0
        }}
        setSelectedSection={sectionId => {
          setSelectedSection(sectionId);
        }}
        setSelectedItem={itemId => {
          setSelectedItem(itemId);
        }}
        setExpanded={(expanded: number[]) => {
          setExpandedSections(expanded);
        }}
        onSectionItemClick={sectionItem => {
          action("onSectionItemClick")(sectionItem);
          setSelectedSection(sectionItem.id);
        }}
        onSectionClick={section => {
          action("onSectionClick")(section);
          setSelectedSection(section.id);
        }}
      />
    </div>
  );
};

export const NonInteractiveItems = () => {
  const [sections, setSections] = useState<ISection[]>([]);
  const [expandedSections, setExpandedSections] = useState<number[]>([1]);
  const [selectedSection, setSelectedSection] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  useEffect(() => {
    if (sections.length) {
      return;
    }

    setSections(dummySections);
  }, [sections.length]);

  if (!sections.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Accordion
        className='yl:w-[500px]'
        selected={{
          sectionId: selectedSection ?? 0,
          itemId: selectedItem ?? 0
        }}
        setSelectedSection={sectionId => {
          setSelectedSection(sectionId);
        }}
        setSelectedItem={itemId => {
          setSelectedItem(itemId);
        }}
        sections={sections}
        onSorted={(_, sections) => {
          setSections(sections);
        }}
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
  const [selectedSection, setSelectedSection] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  useEffect(() => {
    if (sections.length) {
      return;
    }

    setSections(dummySections);
  }, [sections.length]);

  if (!sections.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Accordion
        className='yl:w-[500px]'
        selected={{
          sectionId: selectedSection ?? 0,
          itemId: selectedItem ?? 0
        }}
        setSelectedSection={sectionId => {
          setSelectedSection(sectionId);
        }}
        setSelectedItem={itemId => {
          setSelectedItem(itemId);
        }}
        sections={sections}
        onSorted={(_, sections) => {
          setSections(sections);
        }}
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

export const WithAddLabels = () => {
  const [sections, setSections] = useState<ISection[]>([]);
  const [expandedSections, setExpandedSections] = useState<number[]>([1]);
  const [selectedSection, setSelectedSection] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  useEffect(() => {
    if (sections.length) {
      return;
    }

    setSections(dummySections);
  }, [sections.length]);

  if (!sections.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Accordion
        className='yl:w-[500px]'
        selected={{
          sectionId: selectedSection ?? 0,
          itemId: selectedItem ?? 0
        }}
        setSelectedSection={sectionId => {
          setSelectedSection(sectionId);
        }}
        setSelectedItem={itemId => {
          setSelectedItem(itemId);
        }}
        sections={sections}
        expanded={expandedSections}
        onSorted={(_, sections) => {
          setSections(sections);
        }}
        onAddSection={() => {
          action("onAddSection")();
        }}
        addSectionLabel='Add Course Section'
        addSectionItemLabel='Add Course Lecture'
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

export const WithNoItems = () => {
  const [sections] = useState<ISection[]>([
    {
      id: 1,
      title: "velum constans brevis canis corrumpo magni attollo",
      description: "",
      order: 0,
      items: []
    }
  ]);
  const [expandedSections, setExpandedSections] = useState<number[]>([]);
  const [selectedSection, setSelectedSection] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  if (!sections.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Accordion
        className='yl:w-[500px]'
        expanded={expandedSections}
        selected={{
          sectionId: selectedSection ?? 0,
          itemId: selectedItem ?? 0
        }}
        setSelectedSection={sectionId => {
          setSelectedSection(sectionId);
        }}
        setSelectedItem={itemId => {
          setSelectedItem(itemId);
        }}
        sections={sections}
        onAddSection={() => {
          action("onAddSection")();
        }}
        addSectionLabel='Add Course Section'
        addSectionItemLabel='Add Course Lecture'
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

export const ExpandedByDefault = () => {
  const [sections, setSections] = useState<ISection[]>([]);
  const [expandedSections, setExpandedSections] = useState<number[]>([]);
  const [selectedSection, setSelectedSection] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  useEffect(() => {
    if (sections.length) {
      return;
    }

    setSections(dummySections);
  }, [sections.length]);

  if (!sections.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Accordion
        defaultExpanded={true}
        className='yl:w-[500px]'
        selected={{
          sectionId: selectedSection ?? 0,
          itemId: selectedItem ?? 0
        }}
        setSelectedSection={sectionId => {
          setSelectedSection(sectionId);
        }}
        setSelectedItem={itemId => {
          setSelectedItem(itemId);
        }}
        sections={sections}
        expanded={expandedSections}
        onSorted={(_, sections) => {
          setSections(sections);
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
