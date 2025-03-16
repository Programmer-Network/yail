import { faker } from "@faker-js/faker";
import { action } from "@storybook/addon-actions";
import { Meta } from "@storybook/react";
import { useEffect, useState } from "react";

import Button from "Components/Button";

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
  }, [sections.length]);

  if (!sections.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Accordion
        className='yl:w-[500px]'
        sections={sections}
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
  const [selectedSection, setSelectedSection] = useState<number>(2);

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
        selectedId={selectedSection}
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

export const NonInteractive = () => {
  const [sections, setSections] = useState<ISection[]>([]);
  const [expandedSections, setExpandedSections] = useState<number[]>([1]);

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
        selectedId={2}
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
        selectedId={2}
        sections={sections}
        hasDraggableSectionItems={true}
        hasDraggableSections={true}
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

export const AddSectionAndSectionItem = () => {
  const [sections, setSections] = useState<ISection[]>([
    {
      id: 1,
      title: "velum constans brevis canis corrumpo magni attollo",
      description:
        "Creber aeneus versus itaque alioqui abeo crux sperno. Atrox subseco ater tenetur libero absum quidem thymum degusto allatus. Venia in carbo cibus desolo contego suffragium. Vero civitas tredecim ventosus dapifer quas. Animadverto spiculum velut.",
      order: 0,
      items: [
        {
          id: 597358,
          title: "officia",
          order: 0
        }
      ]
    }
  ]);

  const [expandedSections, setExpandedSections] = useState<number[]>([1]);

  if (!sections.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Button
        onClick={() => {
          const newSection = sections[0];
          if (newSection) {
            newSection.items.push({
              id: Math.floor(Math.random() * 1000000),
              title: faker.lorem.words(Math.floor(Math.random() * 10) + 1),
              order: newSection.items.length
            });
          }

          setSections([newSection as ISection]);
        }}
      >
        Add Section
      </Button>
      <Accordion
        className='yl:w-[500px]'
        selectedId={2}
        sections={sections}
        expanded={expandedSections}
        hasDraggableSectionItems={true}
        onSectionItemClick={sectionItem => {
          const newSection = sections[0];
          if (newSection) {
            newSection.items = newSection.items.filter(
              item => item.id !== sectionItem.id
            );
          }

          setSections([newSection as ISection]);
        }}
        onSorted={(_, sections) => {
          setSections(sections);
        }}
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

export const WithAddLabels = () => {
  const [sections, setSections] = useState<ISection[]>([]);
  const [expandedSections, setExpandedSections] = useState<number[]>([1]);

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
        selectedId={2}
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

export const DefaultExpanded = () => {
  const [sections, setSections] = useState<ISection[]>([]);
  const [expandedSections, setExpandedSections] = useState<number[]>([]);

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
        selectedId={2}
        sections={sections}
        expanded={expandedSections}
        defaultExpanded={true}
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
