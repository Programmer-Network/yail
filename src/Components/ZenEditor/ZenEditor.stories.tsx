import type { Meta, StoryObj } from "@storybook/react-vite";
import { useCallback, useState } from "react";

import { Input } from "../Inputs";
import { TIPTAP_TOOLBAR_ITEMS } from "../Inputs/Tiptap/constants";
import { ZenEditor } from "./ZenEditor";
import { ZenSaveStatus } from "./ZenEditor.types";

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
  const [saveStatus, setSaveStatus] = useState<ZenSaveStatus>("saved");

  const handleUpdate = useCallback(({ editor }: { editor: unknown }) => {
    const typedEditor = editor as { getJSON: () => unknown };
    setContent(JSON.stringify(typedEditor.getJSON()));
    setSaveStatus("unsaved");
  }, []);

  const handleToggleProperties = useCallback(() => {
    setIsPropertiesOpen(prev => !prev);
  }, []);

  const handleSave = useCallback(() => {
    setSaveStatus("saving");
    // Simulate save
    setTimeout(() => {
      setSaveStatus("saved");
    }, 1000);
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
        saveStatus,
        primaryAction: {
          label: "Publish",
          onClick: handleSave,
          isLoading: saveStatus === "saving"
        },
        secondaryAction: {
          label: "Cancel",
          onClick: handleCancel
        }
      }}
    />
  );
};

export const Default: Story = {
  render: () => <ZenEditorWithState />
};

// Story showing unsaved state
const ZenEditorUnsaved = () => {
  const [isPropertiesOpen, setIsPropertiesOpen] = useState(false);

  const handleToggleProperties = useCallback(() => {
    setIsPropertiesOpen(prev => !prev);
  }, []);

  const handleSave = useCallback(() => {
    // No-op for story
  }, []);

  return (
    <ZenEditor
      value=''
      onUpdate={() => {}}
      placeholder='Start writing...'
      toolbarItems={[
        TIPTAP_TOOLBAR_ITEMS.BOLD,
        TIPTAP_TOOLBAR_ITEMS.ITALIC,
        TIPTAP_TOOLBAR_ITEMS.LINK
      ]}
      propertiesDrawer={{
        isOpen: isPropertiesOpen,
        onToggle: handleToggleProperties,
        title: "Properties",
        children: <SamplePropertiesForm />
      }}
      statusBar={{
        saveStatus: "unsaved",
        primaryAction: {
          label: "Save",
          onClick: handleSave
        }
      }}
    />
  );
};

export const UnsavedChanges: Story = {
  render: () => <ZenEditorUnsaved />
};

// Story showing saving state
const ZenEditorSaving = () => {
  const [isPropertiesOpen, setIsPropertiesOpen] = useState(false);

  const handleToggleProperties = useCallback(() => {
    setIsPropertiesOpen(prev => !prev);
  }, []);

  return (
    <ZenEditor
      value=''
      onUpdate={() => {}}
      placeholder='Start writing...'
      toolbarItems={[TIPTAP_TOOLBAR_ITEMS.BOLD, TIPTAP_TOOLBAR_ITEMS.ITALIC]}
      propertiesDrawer={{
        isOpen: isPropertiesOpen,
        onToggle: handleToggleProperties,
        title: "Properties",
        children: <SamplePropertiesForm />
      }}
      statusBar={{
        saveStatus: "saving",
        primaryAction: {
          label: "Save",
          onClick: () => {},
          isLoading: true
        }
      }}
    />
  );
};

export const Saving: Story = {
  render: () => <ZenEditorSaving />
};

// Story showing error state
const ZenEditorError = () => {
  const [isPropertiesOpen, setIsPropertiesOpen] = useState(false);

  const handleToggleProperties = useCallback(() => {
    setIsPropertiesOpen(prev => !prev);
  }, []);

  return (
    <ZenEditor
      value=''
      onUpdate={() => {}}
      placeholder='Start writing...'
      toolbarItems={[TIPTAP_TOOLBAR_ITEMS.BOLD, TIPTAP_TOOLBAR_ITEMS.ITALIC]}
      propertiesDrawer={{
        isOpen: isPropertiesOpen,
        onToggle: handleToggleProperties,
        title: "Properties",
        children: <SamplePropertiesForm />
      }}
      statusBar={{
        saveStatus: "error",
        primaryAction: {
          label: "Retry",
          onClick: () => {}
        }
      }}
    />
  );
};

export const SaveError: Story = {
  render: () => <ZenEditorError />
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
        saveStatus: "saved",
        primaryAction: {
          label: "Publish",
          onClick: () => {}
        }
      }}
    />
  );
};

export const WithDrawerOpen: Story = {
  render: () => <ZenEditorWithDrawerOpen />
};
