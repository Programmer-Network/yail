import { Editor } from "@tiptap/core";

import { TIPTAP_TOOLBAR_ITEMS } from "../../Tiptap.constants";
import {
  DEFAULT_TYPOGRAPHY_LABEL,
  TYPOGRAPHY_LABELS
} from "./Toolbar.constants";
import { IToolbarIconReturn, IToolbarIconsProps } from "./Toolbar.types";

export const getToolbarIcons = ({
  editor
}: IToolbarIconsProps): IToolbarIconReturn[] => {
  return [
    {
      id: TIPTAP_TOOLBAR_ITEMS.HEADING_1,
      onClick: () => {
        editor.chain().focus().toggleHeading({ level: 1 }).run();
      },
      isActive: editor.isActive("heading", { level: 1 }),
      iconName: "IconH1",
      description: "Format as Heading 1 - largest heading"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.HEADING_2,
      onClick: () => {
        editor.chain().focus().toggleHeading({ level: 2 }).run();
      },
      isActive: editor.isActive("heading", { level: 2 }),
      iconName: "IconH2",
      description: "Format as Heading 2"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.HEADING_3,
      onClick: () => {
        editor.chain().focus().toggleHeading({ level: 3 }).run();
      },
      isActive: editor.isActive("heading", { level: 3 }),
      iconName: "IconH3",
      description: "Format as Heading 3"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.HEADING_4,
      onClick: () => {
        editor.chain().focus().toggleHeading({ level: 4 }).run();
      },
      isActive: editor.isActive("heading", { level: 4 }),
      iconName: "IconH4",
      description: "Format as Heading 4"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.HEADING_5,
      onClick: () => {
        editor.chain().focus().toggleHeading({ level: 5 }).run();
      },
      isActive: editor.isActive("heading", { level: 5 }),
      iconName: "IconH5",
      description: "Format as Heading 5"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.HEADING_6,
      onClick: () => {
        editor.chain().focus().toggleHeading({ level: 6 }).run();
      },
      isActive: editor.isActive("heading", { level: 6 }),
      iconName: "IconH6",
      description: "Format as Heading 6 - smallest heading"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.BOLD,
      onClick: () => {
        editor.chain().focus().toggleBold().run();
      },
      isActive: editor.isActive("bold"),
      iconName: "BoldOutline",
      isDisabled: () => !editor.can().toggleBold(),
      description: "Make text bold"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.ITALIC,
      onClick: () => {
        editor.chain().focus().toggleItalic().run();
      },
      isActive: editor.isActive("italic"),
      iconName: "ItalicOutline",
      isDisabled: () => !editor.can().toggleItalic(),
      description: "Make text italic"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.STRIKE_THROUGH,
      onClick: () => {
        editor.chain().focus().toggleStrike().run();
      },
      isActive: editor.isActive("strike"),
      iconName: "StrikethroughOutline",
      isDisabled: () => !editor.can().toggleStrike(),
      description: "Add strikethrough to text"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.PARAGRAPH,
      onClick: () => {
        editor.chain().focus().setParagraph().run();
      },
      isActive: editor.isActive("paragraph"),
      iconName: "ParagraphOutline",
      isDisabled: () => !editor.can().setParagraph(),
      description: "Format as paragraph text"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.UNORDERED_LIST,
      onClick: () => {
        editor.chain().focus().toggleBulletList().run();
      },
      isActive: editor.isActive("bulletList"),
      iconName: "ListUnorderedOutline",
      description: "Create bullet list"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.ORDERED_LIST,
      onClick: () => {
        editor.chain().focus().toggleOrderedList().run();
      },
      isActive: editor.isActive("orderedList"),
      iconName: "ListOrderedOutline",
      description: "Create numbered list"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.BLOCK_QUOTE,
      onClick: () => {
        editor.chain().focus().toggleBlockquote().run();
      },
      isActive: editor.isActive("blockquote"),
      iconName: "QuoteOutline",
      description: "Insert block quote"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.LINK,
      iconName: "LinkOutline",
      isActive: editor.isActive("link"),
      description: "Add or edit hyperlink"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.YOUTUBE,
      iconName: "YoutubeOutline",
      description: "Embed YouTube video"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.IMAGE,
      iconName: "ImageOutline",
      description: "Insert image"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.CODE,
      onClick: () => {
        editor.chain().focus().toggleCode().run();
      },
      isActive: editor.isActive("code"),
      iconName: "CodeOutline",
      isDisabled: () => !editor.can().toggleCode(),
      description: "Format as inline code"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.CODE_BLOCK,
      onClick: () => {
        editor.chain().focus().toggleCodeBlock().run();
      },
      isActive: editor.isActive("codeBlock"),
      iconName: "IconCodeBlock",
      description: "Insert code block"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.TABLE,
      iconName: "TableOutline",
      description: "Insert table"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.TABLE_ADD_ROW_BEFORE,
      onClick: () => {
        editor.commands.addRowBefore();
      },
      iconName: "PlusCircleOutline",
      description: "Add row above",
      isDisabled: () => !editor.can().addRowBefore()
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.TABLE_ADD_ROW_AFTER,
      onClick: () => {
        editor.commands.addRowAfter();
      },
      iconName: "PlusCircleOutline",
      description: "Add row below",
      isDisabled: () => !editor.can().addRowAfter()
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.TABLE_DELETE_ROW,
      onClick: () => {
        editor.commands.deleteRow();
      },
      iconName: "MinusCircleOutline",
      description: "Delete row",
      isDisabled: () => !editor.can().deleteRow()
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.TABLE_ADD_COLUMN_BEFORE,
      onClick: () => {
        editor.commands.addColumnBefore();
      },
      iconName: "ViewColumnOutline",
      description: "Add column left",
      isDisabled: () => !editor.can().addColumnBefore()
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.TABLE_ADD_COLUMN_AFTER,
      onClick: () => {
        editor.commands.addColumnAfter();
      },
      iconName: "ViewColumnOutline",
      description: "Add column right",
      isDisabled: () => !editor.can().addColumnAfter()
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.TABLE_DELETE_COLUMN,
      onClick: () => {
        editor.commands.deleteColumn();
      },
      iconName: "MinusCircleOutline",
      description: "Delete column",
      isDisabled: () => !editor.can().deleteColumn()
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.TABLE_MERGE_CELLS,
      onClick: () => {
        editor.commands.mergeCells();
      },
      iconName: "ViewGridOutline",
      description: "Merge cells",
      isDisabled: () => !editor.can().mergeCells()
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.TABLE_SPLIT_CELL,
      onClick: () => {
        editor.commands.splitCell();
      },
      iconName: "ViewGridOutline",
      description: "Split cell",
      isDisabled: () => !editor.can().splitCell()
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.TABLE_DELETE_TABLE,
      onClick: () => {
        editor.commands.deleteTable();
      },
      iconName: "MinusCircleOutline",
      description: "Delete table",
      isDisabled: () => !editor.can().deleteTable()
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.TASK_LIST,
      onClick: () => {
        editor.chain().focus().toggleTaskList().run();
      },
      isActive: editor.isActive("taskList"),
      iconName: "IconCheck",
      description: "Create task list / checklist"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.HIGHLIGHT,
      onClick: () => {
        editor.chain().focus().toggleHighlight().run();
      },
      isActive: editor.isActive("highlight"),
      iconName: "IconHighlight",
      description: "Highlight selected text"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.ROUGH_ANNOTATION,
      isActive: editor.isActive("roughAnnotation"),
      iconName: "IconPencilSquare",
      description: "Add hand-drawn annotation"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.IMAGE_ALIGN_LEFT,
      onClick: () => {
        editor
          .chain()
          .focus()
          .updateAttributes("image", { "data-align": "left" })
          .run();
      },
      isActive: editor.isActive("image", { "data-align": "left" }),
      iconName: "AlignTextLeftOutline",
      description: "Align image left",
      isDisabled: () => !editor.isActive("image")
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.IMAGE_ALIGN_CENTER,
      onClick: () => {
        editor
          .chain()
          .focus()
          .updateAttributes("image", { "data-align": "center" })
          .run();
      },
      isActive: editor.isActive("image", { "data-align": "center" }),
      iconName: "AlignTextCenterOutline",
      description: "Align image center",
      isDisabled: () => !editor.isActive("image")
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.IMAGE_ALIGN_RIGHT,
      onClick: () => {
        editor
          .chain()
          .focus()
          .updateAttributes("image", { "data-align": "right" })
          .run();
      },
      isActive: editor.isActive("image", { "data-align": "right" }),
      iconName: "AlignTextRightOutline",
      description: "Align image right",
      isDisabled: () => !editor.isActive("image")
    }
  ];
};

export const getActiveTypographyLabel = (editor: Editor): string => {
  for (let level = 1; level <= 6; level++) {
    if (editor.isActive("heading", { level })) {
      return TYPOGRAPHY_LABELS[level] || DEFAULT_TYPOGRAPHY_LABEL;
    }
  }
  return DEFAULT_TYPOGRAPHY_LABEL;
};
