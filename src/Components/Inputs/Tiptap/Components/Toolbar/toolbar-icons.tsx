import { TIPTAP_TOOLBAR_ITEMS } from "../../constants";
import { IToolbarIcons, IToolbarIconsReturn } from "../../types";

const getToolbarIcons = ({ editor }: IToolbarIcons): IToolbarIconsReturn[] => {
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
      iconName: "IconBold",
      className: "text-error",
      isDisabled: () => !editor.can().chain().focus().toggleBold().run(),
      description: "Make text bold"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.ITALIC,
      onClick: () => {
        editor.chain().focus().toggleItalic().run();
      },
      isActive: editor.isActive("italic"),
      iconName: "IconItalic",
      isDisabled: () => !editor.can().chain().focus().toggleItalic().run(),
      description: "Make text italic"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.STRIKE_THROUGH,
      onClick: () => {
        editor.chain().focus().toggleStrike().run();
      },
      isActive: editor.isActive("strike"),
      iconName: "IconStrikethrough",
      isDisabled: () => !editor.can().chain().focus().toggleStrike().run(),
      description: "Add strikethrough to text"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.PARAGRAPH,
      onClick: () => {
        editor.chain().focus().setParagraph().run();
      },
      isActive: editor.isActive("paragraph"),
      iconName: "IconText",
      isDisabled: () => !editor.can().chain().focus().toggleCode().run(),
      description: "Format as paragraph text"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.UNORDERED_LIST,
      onClick: () => {
        editor.chain().focus().toggleBulletList().run();
      },
      isActive: editor.isActive("bulletList"),
      iconName: "IconListUl",
      description: "Create bullet list"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.ORDERED_LIST,
      onClick: () => {
        editor.chain().focus().toggleOrderedList().run();
      },
      isActive: editor.isActive("orderedList"),
      iconName: "IconListOl",
      description: "Create numbered list"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.BLOCK_QUOTE,
      onClick: () => {
        editor.chain().focus().toggleBlockquote().run();
      },
      isActive: editor.isActive("blockquote"),
      iconName: "IconQuote",
      description: "Insert block quote"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.LINK,
      iconName: "IconLink",
      isActive: editor.isActive("link"),
      description: "Add or edit hyperlink"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.YOUTUBE,
      iconName: "IconAddYoutube",
      description: "Embed YouTube video"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.IMAGE,
      iconName: "IconImage",
      description: "Insert image"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.CODE,
      onClick: () => {
        editor.chain().focus().toggleCode().run();
      },
      isActive: editor.isActive("code"),
      iconName: "IconCode",
      isDisabled: () => !editor.can().chain().focus().toggleCode().run(),
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
    }
  ];
};

export default getToolbarIcons;
