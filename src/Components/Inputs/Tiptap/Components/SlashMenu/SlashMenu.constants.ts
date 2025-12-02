import { TIPTAP_TOOLBAR_ITEMS } from "../../Tiptap.constants";
import { CalloutType } from "../Callout";
import { ISlashMenuItemWithCommand, SlashMenuGroup } from "./SlashMenu.types";

export const SLASH_MENU_ITEMS: ISlashMenuItemWithCommand[] = [
  {
    id: TIPTAP_TOOLBAR_ITEMS.HEADING_1,
    label: "Heading 1",
    description: "Big section heading",
    icon: "IconH1",
    keywords: ["h1", "heading", "title", "large"],
    group: SlashMenuGroup.TYPOGRAPHY,
    command: ({ editor, range }) => {
      editor
        .chain()
        .focus()
        .deleteRange(range)
        .setNode("heading", { level: 1 })
        .run();
    }
  },
  {
    id: TIPTAP_TOOLBAR_ITEMS.HEADING_2,
    label: "Heading 2",
    description: "Medium section heading",
    icon: "IconH2",
    keywords: ["h2", "heading", "subtitle"],
    group: SlashMenuGroup.TYPOGRAPHY,
    command: ({ editor, range }) => {
      editor
        .chain()
        .focus()
        .deleteRange(range)
        .setNode("heading", { level: 2 })
        .run();
    }
  },
  {
    id: TIPTAP_TOOLBAR_ITEMS.HEADING_3,
    label: "Heading 3",
    description: "Small section heading",
    icon: "IconH3",
    keywords: ["h3", "heading", "subheading"],
    group: SlashMenuGroup.TYPOGRAPHY,
    command: ({ editor, range }) => {
      editor
        .chain()
        .focus()
        .deleteRange(range)
        .setNode("heading", { level: 3 })
        .run();
    }
  },
  {
    id: TIPTAP_TOOLBAR_ITEMS.HEADING_4,
    label: "Heading 4",
    description: "Small heading",
    icon: "IconH4",
    keywords: ["h4", "heading"],
    group: SlashMenuGroup.TYPOGRAPHY,
    command: ({ editor, range }) => {
      editor
        .chain()
        .focus()
        .deleteRange(range)
        .setNode("heading", { level: 4 })
        .run();
    }
  },
  {
    id: TIPTAP_TOOLBAR_ITEMS.HEADING_5,
    label: "Heading 5",
    description: "Smaller heading",
    icon: "IconH5",
    keywords: ["h5", "heading"],
    group: SlashMenuGroup.TYPOGRAPHY,
    command: ({ editor, range }) => {
      editor
        .chain()
        .focus()
        .deleteRange(range)
        .setNode("heading", { level: 5 })
        .run();
    }
  },
  {
    id: TIPTAP_TOOLBAR_ITEMS.HEADING_6,
    label: "Heading 6",
    description: "Smallest heading",
    icon: "IconH6",
    keywords: ["h6", "heading"],
    group: SlashMenuGroup.TYPOGRAPHY,
    command: ({ editor, range }) => {
      editor
        .chain()
        .focus()
        .deleteRange(range)
        .setNode("heading", { level: 6 })
        .run();
    }
  },
  {
    id: TIPTAP_TOOLBAR_ITEMS.PARAGRAPH,
    label: "Text",
    description: "Just start typing with plain text",
    icon: "ParagraphOutline",
    keywords: ["paragraph", "text", "plain", "normal"],
    group: SlashMenuGroup.TYPOGRAPHY,
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).setParagraph().run();
    }
  },
  {
    id: TIPTAP_TOOLBAR_ITEMS.UNORDERED_LIST,
    label: "Bullet List",
    description: "Create a simple bullet list",
    icon: "ListUnorderedOutline",
    keywords: ["bullet", "list", "unordered", "ul"],
    group: SlashMenuGroup.LISTS,
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).toggleBulletList().run();
    }
  },
  {
    id: TIPTAP_TOOLBAR_ITEMS.ORDERED_LIST,
    label: "Numbered List",
    description: "Create a numbered list",
    icon: "ListOrderedOutline",
    keywords: ["numbered", "list", "ordered", "ol", "number"],
    group: SlashMenuGroup.LISTS,
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).toggleOrderedList().run();
    }
  },
  {
    id: TIPTAP_TOOLBAR_ITEMS.TASK_LIST,
    label: "To-do List",
    description: "Track tasks with a to-do list",
    icon: "IconCheck",
    keywords: ["todo", "task", "checklist", "checkbox"],
    group: SlashMenuGroup.LISTS,
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).toggleTaskList().run();
    }
  },
  {
    id: TIPTAP_TOOLBAR_ITEMS.CODE_BLOCK,
    label: "Code Block",
    description: "Insert a code snippet",
    icon: "IconCodeBlock",
    keywords: ["code", "block", "snippet", "pre", "programming"],
    group: SlashMenuGroup.BLOCKS,
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).toggleCodeBlock().run();
    }
  },
  {
    id: TIPTAP_TOOLBAR_ITEMS.BLOCK_QUOTE,
    label: "Quote",
    description: "Capture a quote",
    icon: "QuoteOutline",
    keywords: ["quote", "blockquote", "citation"],
    group: SlashMenuGroup.BLOCKS,
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).toggleBlockquote().run();
    }
  },
  {
    id: TIPTAP_TOOLBAR_ITEMS.IMAGE,
    label: "Image",
    description: "Upload an image",
    icon: "ImageOutline",
    keywords: ["image", "picture", "photo", "upload"],
    group: SlashMenuGroup.INSERT,
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).run();
    }
  },
  {
    id: TIPTAP_TOOLBAR_ITEMS.TABLE,
    label: "Table",
    description: "Insert a table",
    icon: "TableOutline",
    keywords: ["table", "grid", "rows", "columns"],
    group: SlashMenuGroup.INSERT,
    command: ({ editor, range }) => {
      editor
        .chain()
        .focus()
        .deleteRange(range)
        .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
        .run();
    }
  },
  // Callout with submenu for type selection
  {
    id: TIPTAP_TOOLBAR_ITEMS.CALLOUT,
    label: "Callout",
    description: "Insert a callout block",
    icon: "InfoOutline",
    keywords: [
      "callout",
      "admonition",
      "note",
      "warning",
      "tip",
      "info",
      "alert"
    ],
    group: SlashMenuGroup.BLOCKS,
    command: ({ editor, range }) => {
      // Default to Note if selected directly (e.g., pressing Enter without opening submenu)
      editor
        .chain()
        .focus()
        .deleteRange(range)
        .setCallout({ type: CalloutType.NOTE })
        .run();
    },
    submenu: [
      {
        id: "callout-note",
        label: "Note",
        icon: "InfoOutline",
        command: ({ editor, range }) => {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .setCallout({ type: CalloutType.NOTE })
            .run();
        }
      },
      {
        id: "callout-tip",
        label: "Tip",
        icon: "BulbOnOutline",
        command: ({ editor, range }) => {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .setCallout({ type: CalloutType.TIP })
            .run();
        }
      },
      {
        id: "callout-warning",
        label: "Warning",
        icon: "ExclamationCircleOutline",
        command: ({ editor, range }) => {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .setCallout({ type: CalloutType.WARNING })
            .run();
        }
      },
      {
        id: "callout-critical",
        label: "Critical",
        icon: "XCircleOutline",
        command: ({ editor, range }) => {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .setCallout({ type: CalloutType.CRITICAL })
            .run();
        }
      },
      {
        id: "callout-success",
        label: "Success",
        icon: "TickCircleOutline",
        command: ({ editor, range }) => {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .setCallout({ type: CalloutType.SUCCESS })
            .run();
        }
      },
      {
        id: "callout-example",
        label: "Example",
        icon: "SearchOutline",
        command: ({ editor, range }) => {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .setCallout({ type: CalloutType.EXAMPLE })
            .run();
        }
      },
      {
        id: "callout-component",
        label: "Component",
        icon: "LegoOutline",
        command: ({ editor, range }) => {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .setCallout({ type: CalloutType.COMPONENT })
            .run();
        }
      },
      {
        id: "callout-navigation",
        label: "Navigation",
        icon: "CompassOutline",
        command: ({ editor, range }) => {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .setCallout({ type: CalloutType.NAVIGATION })
            .run();
        }
      }
    ]
  }
];

export const SLASH_MENU_GROUP_LABELS: Record<SlashMenuGroup, string> = {
  [SlashMenuGroup.TYPOGRAPHY]: "Typography",
  [SlashMenuGroup.LISTS]: "Lists",
  [SlashMenuGroup.BLOCKS]: "Blocks",
  [SlashMenuGroup.INSERT]: "Insert",
  [SlashMenuGroup.CALLOUTS]: "Callouts" // Keep for backwards compatibility
};

export const SLASH_MENU_GROUP_ORDER: SlashMenuGroup[] = [
  SlashMenuGroup.TYPOGRAPHY,
  SlashMenuGroup.LISTS,
  SlashMenuGroup.BLOCKS,
  SlashMenuGroup.INSERT
];
