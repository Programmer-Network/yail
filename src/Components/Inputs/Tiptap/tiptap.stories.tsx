import { Editor } from "@tiptap/core";
import { RefObject, useEffect, useRef, useState } from "react";

import Tiptap from ".";
import TiptapToHTML from "./TiptapToHTML";
import { TIPTAP_TOOLBAR_ITEMS } from "./constants";
import { TiptapActionsEnum, TiptapRef } from "./types";

export default {
  title: "Rich Text Editing / Tiptap",
  parameters: {
    layout: "centered"
  },
  component: Tiptap
};

export const Default = () => {
  const [editorState, setEditorState] = useState<string>("");
  const tiptapRef = useRef<TiptapRef>(null);

  const suggestions = {
    trigger: "#",
    items: () =>
      Promise.resolve([
        {
          label: "Bar Label",
          value: "bar"
        },
        {
          label: "Baz Label",
          value: "baz"
        }
      ])
  };

  const toolbarItems = [
    TIPTAP_TOOLBAR_ITEMS.BOLD,
    TIPTAP_TOOLBAR_ITEMS.HEADING_2,
    TIPTAP_TOOLBAR_ITEMS.HEADING_3,
    TIPTAP_TOOLBAR_ITEMS.ITALIC,
    TIPTAP_TOOLBAR_ITEMS.LINK,
    TIPTAP_TOOLBAR_ITEMS.IMAGE,
    TIPTAP_TOOLBAR_ITEMS.YOUTUBE,
    TIPTAP_TOOLBAR_ITEMS.LIST_ITEM,
    TIPTAP_TOOLBAR_ITEMS.UNORDERED_LIST,
    TIPTAP_TOOLBAR_ITEMS.ORDERED_LIST,
    TIPTAP_TOOLBAR_ITEMS.CODE,
    TIPTAP_TOOLBAR_ITEMS.BLOCK_QUOTE,
    TIPTAP_TOOLBAR_ITEMS.STRIKE_THROUGH,
    TIPTAP_TOOLBAR_ITEMS.CODE_BLOCK
  ];

  const converter = new TiptapToHTML(toolbarItems, suggestions);

  const onEditorStateChange = ({ editor }: { editor: Editor }) => {
    setEditorState(
      converter.generateSanitizedHTML(JSON.stringify(editor.getJSON()))
    );
  };

  return (
    <div className='yl:w-full yl:md:w-[768px]'>
      <Tiptap
        ref={tiptapRef as RefObject<TiptapRef>}
        placeholder='Enter your content here...'
        label='Content'
        suggestions={suggestions}
        toolbarItems={toolbarItems}
        actions={{
          buttons: [TiptapActionsEnum.CANCEL, TiptapActionsEnum.CONFIRM],
          onAction: actionType => alert(actionType),
          isConfirming: false
        }}
        onSetImage={() => {
          return new Promise<void>(resolve => {
            resolve();
          });
        }}
        onTransaction={({ editor }) => {
          onEditorStateChange({ editor });
        }}
        required={true}
      />

      <div
        className='yl:mt-8 yl:break-words text-indigo-500'
        dangerouslySetInnerHTML={{ __html: editorState }}
      ></div>
    </div>
  );
};

export const Confirming = () => {
  const suggestions = {
    trigger: "#",
    items: () =>
      Promise.resolve([
        {
          label: "Bar Label",
          value: "bar"
        },
        {
          label: "Baz Label",
          value: "baz"
        }
      ])
  };

  const toolbarItems = [
    TIPTAP_TOOLBAR_ITEMS.BOLD,
    TIPTAP_TOOLBAR_ITEMS.HEADING_2,
    TIPTAP_TOOLBAR_ITEMS.HEADING_3,
    TIPTAP_TOOLBAR_ITEMS.ITALIC,
    TIPTAP_TOOLBAR_ITEMS.LINK,
    TIPTAP_TOOLBAR_ITEMS.IMAGE,
    TIPTAP_TOOLBAR_ITEMS.YOUTUBE,
    TIPTAP_TOOLBAR_ITEMS.LIST_ITEM,
    TIPTAP_TOOLBAR_ITEMS.UNORDERED_LIST,
    TIPTAP_TOOLBAR_ITEMS.ORDERED_LIST,
    TIPTAP_TOOLBAR_ITEMS.CODE,
    TIPTAP_TOOLBAR_ITEMS.BLOCK_QUOTE,
    TIPTAP_TOOLBAR_ITEMS.STRIKE_THROUGH,
    TIPTAP_TOOLBAR_ITEMS.CODE_BLOCK
  ];

  const converter = new TiptapToHTML(toolbarItems, suggestions);

  const [editorState, setEditorState] = useState<string>("");

  const tiptapRef = useRef<TiptapRef>(null);

  const onEditorStateChange = ({ editor }: { editor: Editor }) => {
    console.log(editor.getJSON());
    setEditorState(
      converter.generateSanitizedHTML(JSON.stringify(editor.getJSON()))
    );
  };

  useEffect(() => {
    // @ts-ignore
    tiptapRef.current?.setContent({
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Hello, world!"
            }
          ]
        }
      ]
    });
  }, []);

  return (
    <div className='yl:w-full yl:md:w-[768px]'>
      <Tiptap
        ref={tiptapRef as RefObject<TiptapRef>}
        label='Content'
        suggestions={suggestions}
        toolbarItems={toolbarItems}
        actions={{
          buttons: [TiptapActionsEnum.CANCEL, TiptapActionsEnum.CONFIRM],
          onAction: actionType => alert(actionType),
          isConfirming: true
        }}
        onSetImage={() => {
          return new Promise<void>(resolve => {
            resolve();
          });
        }}
        onTransaction={({ editor }) => {
          onEditorStateChange({ editor });
        }}
        required={true}
      />

      <div
        className='yl:mt-8 yl:break-words text-indigo-500'
        dangerouslySetInnerHTML={{ __html: editorState }}
      ></div>
    </div>
  );
};

export const Error = () => {
  const suggestions = {
    trigger: "#",
    items: () =>
      Promise.resolve([
        {
          label: "Bar Label",
          value: "bar"
        },
        {
          label: "Baz Label",
          value: "baz"
        }
      ])
  };

  const toolbarItems = [
    TIPTAP_TOOLBAR_ITEMS.BOLD,
    TIPTAP_TOOLBAR_ITEMS.HEADING_2,
    TIPTAP_TOOLBAR_ITEMS.HEADING_3,
    TIPTAP_TOOLBAR_ITEMS.ITALIC,
    TIPTAP_TOOLBAR_ITEMS.LINK,
    TIPTAP_TOOLBAR_ITEMS.IMAGE,
    TIPTAP_TOOLBAR_ITEMS.YOUTUBE,
    TIPTAP_TOOLBAR_ITEMS.LIST_ITEM,
    TIPTAP_TOOLBAR_ITEMS.UNORDERED_LIST,
    TIPTAP_TOOLBAR_ITEMS.ORDERED_LIST,
    TIPTAP_TOOLBAR_ITEMS.CODE,
    TIPTAP_TOOLBAR_ITEMS.BLOCK_QUOTE,
    TIPTAP_TOOLBAR_ITEMS.STRIKE_THROUGH,
    TIPTAP_TOOLBAR_ITEMS.CODE_BLOCK
  ];

  const tiptapRef = useRef<TiptapRef>(null);

  useEffect(() => {
    // @ts-ignore
    tiptapRef.current?.setContent({
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              text: "Hello, world!"
            }
          ]
        }
      ]
    });
  }, []);

  return (
    <div className='yl:w-full yl:md:w-[768px]'>
      <Tiptap
        ref={tiptapRef as RefObject<TiptapRef>}
        label='Content'
        suggestions={suggestions}
        toolbarItems={toolbarItems}
        error='This is an error'
        actions={{
          buttons: [TiptapActionsEnum.CANCEL, TiptapActionsEnum.CONFIRM],
          onAction: actionType => {
            if (actionType === TiptapActionsEnum.CONFIRM) {
              // @ts-ignore
              tiptapRef.current?.setContent({
                type: "doc",
                content: [
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Content has been set!"
                      }
                    ]
                  }
                ]
              });
            } else {
              tiptapRef.current?.clearContent();
            }
          },
          isConfirming: false
        }}
        required={true}
      />
    </div>
  );
};

export const ImageUploadError = () => {
  const suggestions = {
    trigger: "#",
    items: () =>
      Promise.resolve([
        {
          label: "Bar Label",
          value: "bar"
        },
        {
          label: "Baz Label",
          value: "baz"
        }
      ])
  };

  const toolbarItems = [
    TIPTAP_TOOLBAR_ITEMS.BOLD,
    TIPTAP_TOOLBAR_ITEMS.HEADING_2,
    TIPTAP_TOOLBAR_ITEMS.HEADING_3,
    TIPTAP_TOOLBAR_ITEMS.ITALIC,
    TIPTAP_TOOLBAR_ITEMS.LINK,
    TIPTAP_TOOLBAR_ITEMS.IMAGE,
    TIPTAP_TOOLBAR_ITEMS.YOUTUBE,
    TIPTAP_TOOLBAR_ITEMS.LIST_ITEM,
    TIPTAP_TOOLBAR_ITEMS.UNORDERED_LIST,
    TIPTAP_TOOLBAR_ITEMS.ORDERED_LIST,
    TIPTAP_TOOLBAR_ITEMS.CODE,
    TIPTAP_TOOLBAR_ITEMS.BLOCK_QUOTE,
    TIPTAP_TOOLBAR_ITEMS.STRIKE_THROUGH,
    TIPTAP_TOOLBAR_ITEMS.CODE_BLOCK
  ];

  const tiptapRef = useRef<TiptapRef>(null);
  const [error, setError] = useState<string>("");

  return (
    <div className='yl:w-full yl:md:w-[768px]'>
      <Tiptap
        ref={tiptapRef as RefObject<TiptapRef>}
        label='Content'
        suggestions={suggestions}
        toolbarItems={toolbarItems}
        onSetImage={() => {
          return new Promise<void>((_resolve, reject) => {
            setTimeout(() => {
              reject("Simulated image upload failure");
            }, 300);
          });
        }}
        onImageUploadError={msg => setError(msg)}
        actions={{
          buttons: [TiptapActionsEnum.CANCEL, TiptapActionsEnum.CONFIRM],
          onAction: actionType => alert(actionType),
          isConfirming: false
        }}
        required={true}
      />
      {error && (
        <div className='yl:text-red-600 yl:mt-2 yl:text-sm'>{error}</div>
      )}
    </div>
  );
};
