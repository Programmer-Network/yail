import { Editor } from "@tiptap/core";
import { RefObject, useRef, useState } from "react";

import { Tiptap } from ".";
import { TiptapToHTML } from "./TiptapToHTML";
import { TIPTAP_TOOLBAR_ITEMS } from "./constants";
import { TiptapActionsEnum, TiptapRef } from "./types";

export default {
  title: "Rich Text Editing / Tiptap",

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
        className='yl:mt-8 yl:text-indigo-500 wrap-break-word'
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

  const initialContent = JSON.stringify({
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

  const onEditorStateChange = ({ editor }: { editor: Editor }) => {
    console.log(editor.getJSON());
    setEditorState(
      converter.generateSanitizedHTML(JSON.stringify(editor.getJSON()))
    );
  };

  return (
    <div className='yl:w-full yl:md:w-[768px]'>
      <Tiptap
        ref={tiptapRef as RefObject<TiptapRef>}
        label='Content'
        value={initialContent}
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
        className='yl:mt-8 yl:text-indigo-500 wrap-break-word'
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

  const initialContent = JSON.stringify({
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

  return (
    <div className='yl:w-full yl:md:w-[768px]'>
      <Tiptap
        ref={tiptapRef as RefObject<TiptapRef>}
        label='Content'
        value={initialContent}
        suggestions={suggestions}
        toolbarItems={toolbarItems}
        error='This is an error'
        actions={{
          buttons: [TiptapActionsEnum.CANCEL, TiptapActionsEnum.CONFIRM],
          onAction: actionType => {
            if (actionType === TiptapActionsEnum.CONFIRM) {
              tiptapRef.current?.setContent(
                JSON.stringify({
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
                })
              );
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
        <div className='yl:mt-2 yl:text-sm yl:text-red-600'>{error}</div>
      )}
    </div>
  );
};

export const WithTable = () => {
  const [editorState, setEditorState] = useState<string>("");
  const tiptapRef = useRef<TiptapRef>(null);

  const toolbarItems = [
    TIPTAP_TOOLBAR_ITEMS.BOLD,
    TIPTAP_TOOLBAR_ITEMS.ITALIC,
    TIPTAP_TOOLBAR_ITEMS.HEADING_2,
    TIPTAP_TOOLBAR_ITEMS.HEADING_3,
    TIPTAP_TOOLBAR_ITEMS.LIST_ITEM,
    TIPTAP_TOOLBAR_ITEMS.UNORDERED_LIST,
    TIPTAP_TOOLBAR_ITEMS.ORDERED_LIST,
    TIPTAP_TOOLBAR_ITEMS.TABLE
  ];

  const converter = new TiptapToHTML(toolbarItems);

  const initialContent = JSON.stringify({
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Click the table icon to insert a table. You can add/delete rows and columns, merge cells, and more using the table controls."
          }
        ]
      }
    ]
  });

  const onEditorStateChange = ({ editor }: { editor: Editor }) => {
    setEditorState(
      converter.generateSanitizedHTML(JSON.stringify(editor.getJSON()))
    );
  };

  return (
    <div className='yl:w-full yl:md:w-[768px]'>
      <Tiptap
        ref={tiptapRef as RefObject<TiptapRef>}
        placeholder='Try inserting a table...'
        label='Content with Table Support'
        value={initialContent}
        toolbarItems={toolbarItems}
        actions={{
          buttons: [TiptapActionsEnum.CANCEL, TiptapActionsEnum.CONFIRM],
          onAction: actionType => alert(actionType),
          isConfirming: false
        }}
        onTransaction={({ editor }) => {
          onEditorStateChange({ editor });
        }}
        required={true}
      />

      <div className='yl:mt-4'>
        <h3 className='yl:mb-2 yl:font-bold'>Table Commands Available:</h3>
        <ul className='yl:list-disc yl:pl-4 yl:text-sm yl:text-gray-600'>
          <li>Click the table dropdown button in the toolbar</li>
          <li>
            Select &ldquo;Insert Table&rdquo; to create a new 3×3 table with
            headers
          </li>
          <li>
            Click inside a table cell, then use the dropdown for table
            operations
          </li>
          <li>
            Operations include: add/delete rows/columns, merge/split cells
          </li>
          <li>Tab to move to next cell, Shift+Tab for previous cell</li>
        </ul>
      </div>

      <div
        className='yl:mt-8 wrap-break-word'
        dangerouslySetInnerHTML={{ __html: editorState }}
      ></div>
    </div>
  );
};

export const TableWithInitialContent = () => {
  const [editorState, setEditorState] = useState<string>("");
  const tiptapRef = useRef<TiptapRef>(null);

  const toolbarItems = [
    TIPTAP_TOOLBAR_ITEMS.BOLD,
    TIPTAP_TOOLBAR_ITEMS.ITALIC,
    TIPTAP_TOOLBAR_ITEMS.TABLE
  ];

  const converter = new TiptapToHTML(toolbarItems);

  const initialContent = JSON.stringify({
    type: "doc",
    content: [
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "This is a table with initial content:"
          }
        ]
      },
      {
        type: "table",
        content: [
          {
            type: "tableRow",
            content: [
              {
                type: "tableHeader",
                content: [
                  {
                    type: "paragraph",
                    content: [{ type: "text", text: "Name" }]
                  }
                ]
              },
              {
                type: "tableHeader",
                content: [
                  {
                    type: "paragraph",
                    content: [{ type: "text", text: "Role" }]
                  }
                ]
              },
              {
                type: "tableHeader",
                content: [
                  {
                    type: "paragraph",
                    content: [{ type: "text", text: "Status" }]
                  }
                ]
              }
            ]
          },
          {
            type: "tableRow",
            content: [
              {
                type: "tableCell",
                content: [
                  {
                    type: "paragraph",
                    content: [{ type: "text", text: "John Doe" }]
                  }
                ]
              },
              {
                type: "tableCell",
                content: [
                  {
                    type: "paragraph",
                    content: [{ type: "text", text: "Developer" }]
                  }
                ]
              },
              {
                type: "tableCell",
                content: [
                  {
                    type: "paragraph",
                    content: [{ type: "text", text: "Active" }]
                  }
                ]
              }
            ]
          },
          {
            type: "tableRow",
            content: [
              {
                type: "tableCell",
                content: [
                  {
                    type: "paragraph",
                    content: [{ type: "text", text: "Jane Smith" }]
                  }
                ]
              },
              {
                type: "tableCell",
                content: [
                  {
                    type: "paragraph",
                    content: [{ type: "text", text: "Designer" }]
                  }
                ]
              },
              {
                type: "tableCell",
                content: [
                  {
                    type: "paragraph",
                    content: [{ type: "text", text: "Active" }]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  });

  const onEditorStateChange = ({ editor }: { editor: Editor }) => {
    setEditorState(
      converter.generateSanitizedHTML(JSON.stringify(editor.getJSON()))
    );
  };

  return (
    <div className='yl:w-full yl:md:w-[768px]'>
      <Tiptap
        ref={tiptapRef as RefObject<TiptapRef>}
        label='Pre-populated Table'
        value={initialContent}
        toolbarItems={toolbarItems}
        actions={{
          buttons: [TiptapActionsEnum.CANCEL, TiptapActionsEnum.CONFIRM],
          onAction: actionType => alert(actionType),
          isConfirming: false
        }}
        onTransaction={({ editor }) => {
          onEditorStateChange({ editor });
        }}
        required={true}
      />

      <div
        className='yl:mt-8 yl:p-4 rounded border wrap-break-word'
        dangerouslySetInnerHTML={{ __html: editorState }}
      ></div>
    </div>
  );
};
