import type { Meta, StoryObj } from "@storybook/react-vite";
import { useCallback, useState } from "react";

import { Input } from "../Inputs";
import { TIPTAP_TOOLBAR_ITEMS } from "../Inputs/Tiptap/Tiptap.constants";
import { ZenEditor } from "./ZenEditor";

const meta: Meta<typeof ZenEditor> = {
  title: "Components/ZenEditor",
  component: ZenEditor,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof ZenEditor>;

// Sample properties form for stories
const SamplePropertiesForm = () => {
  return (
    <div className='yl:flex yl:flex-col yl:gap-4'>
      <Input
        name='title'
        label='Title'
        value=''
        placeholder='Enter article title...'
        required
        onChange={() => {}}
      />
      <Input
        name='summary'
        label='Summary'
        value=''
        placeholder='Brief description...'
        onChange={() => {}}
      />
    </div>
  );
};

// Interactive story with state management
const ZenEditorWithState = () => {
  const [content, setContent] = useState("");
  const [isPropertiesOpen, setIsPropertiesOpen] = useState(false);

  const handleUpdate = useCallback(({ editor }: { editor: unknown }) => {
    const typedEditor = editor as { getJSON: () => unknown };
    setContent(JSON.stringify(typedEditor.getJSON()));
  }, []);

  const handleToggleProperties = useCallback(() => {
    setIsPropertiesOpen(prev => !prev);
  }, []);

  const handleSave = useCallback(() => {
    // Simulate save
  }, []);

  const handleCancel = useCallback(() => {
    setIsPropertiesOpen(false);
  }, []);

  return (
    <ZenEditor
      value={content}
      onUpdate={handleUpdate}
      placeholder='Start writing your article...'
      toolbarItems={[
        TIPTAP_TOOLBAR_ITEMS.HEADING_2,
        TIPTAP_TOOLBAR_ITEMS.HEADING_3,
        TIPTAP_TOOLBAR_ITEMS.BOLD,
        TIPTAP_TOOLBAR_ITEMS.ITALIC,
        TIPTAP_TOOLBAR_ITEMS.STRIKE,
        TIPTAP_TOOLBAR_ITEMS.CODE,
        TIPTAP_TOOLBAR_ITEMS.UNORDERED_LIST,
        TIPTAP_TOOLBAR_ITEMS.ORDERED_LIST,
        TIPTAP_TOOLBAR_ITEMS.BLOCK_QUOTE,
        TIPTAP_TOOLBAR_ITEMS.CODE_BLOCK,
        TIPTAP_TOOLBAR_ITEMS.LINK
      ]}
      propertiesDrawer={{
        isOpen: isPropertiesOpen,
        onToggle: handleToggleProperties,
        title: "Article Properties",
        children: <SamplePropertiesForm />
      }}
      statusBar={{
        primaryAction: {
          label: "Publish",
          onClick: handleSave
        },
        secondaryAction: {
          label: "Cancel",
          onClick: handleCancel
        },
        propertiesButtonText: "Article Details",
        propertiesButtonIcon: "Edit1Outline"
      }}
    />
  );
};

export const Default: Story = {
  render: () => <ZenEditorWithState />
};

// Story with drawer open
const ZenEditorWithDrawerOpen = () => {
  const [isPropertiesOpen, setIsPropertiesOpen] = useState(true);

  const handleToggleProperties = useCallback(() => {
    setIsPropertiesOpen(prev => !prev);
  }, []);

  return (
    <ZenEditor
      value=''
      onUpdate={() => {}}
      placeholder='Start writing...'
      toolbarItems={[
        TIPTAP_TOOLBAR_ITEMS.HEADING_2,
        TIPTAP_TOOLBAR_ITEMS.BOLD,
        TIPTAP_TOOLBAR_ITEMS.ITALIC,
        TIPTAP_TOOLBAR_ITEMS.UNORDERED_LIST
      ]}
      propertiesDrawer={{
        isOpen: isPropertiesOpen,
        onToggle: handleToggleProperties,
        title: "Article Properties",
        children: <SamplePropertiesForm />
      }}
      statusBar={{
        primaryAction: {
          label: "Publish",
          onClick: () => {}
        },
        propertiesButtonText: "Article Details",
        propertiesButtonIcon: "Edit1Outline"
      }}
    />
  );
};

export const WithDrawerOpen: Story = {
  render: () => <ZenEditorWithDrawerOpen />
};

// Story with breadcrumb header
const ZenEditorWithBreadcrumbs = () => {
  const [isPropertiesOpen, setIsPropertiesOpen] = useState(false);

  const handleToggleProperties = useCallback(() => {
    setIsPropertiesOpen(prev => !prev);
  }, []);

  const handleBack = useCallback(() => {
    console.log("Navigate back");
  }, []);

  const handleCourseClick = useCallback(() => {
    console.log("Navigate to course");
  }, []);

  const handleSectionClick = useCallback(() => {
    console.log("Navigate to section");
  }, []);

  return (
    <ZenEditor
      value=''
      onUpdate={() => {}}
      placeholder='Start writing...'
      toolbarItems={[
        TIPTAP_TOOLBAR_ITEMS.HEADING_2,
        TIPTAP_TOOLBAR_ITEMS.BOLD,
        TIPTAP_TOOLBAR_ITEMS.ITALIC
      ]}
      header={{
        onBack: handleBack,
        breadcrumbs: [
          { label: "Advanced React Patterns", onClick: handleCourseClick },
          { label: "State Management", onClick: handleSectionClick },
          { label: "Edit Lecture" }
        ]
      }}
      propertiesDrawer={{
        isOpen: isPropertiesOpen,
        onToggle: handleToggleProperties,
        title: "Lecture Properties",
        children: <SamplePropertiesForm />
      }}
      statusBar={{
        primaryAction: {
          label: "Save Lecture",
          onClick: () => {}
        },
        propertiesButtonText: "Lecture Details",
        propertiesButtonIcon: "InfoOutline"
      }}
    />
  );
};

export const WithBreadcrumbs: Story = {
  render: () => <ZenEditorWithBreadcrumbs />
};
