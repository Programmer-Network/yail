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
      iconName: "IconH1"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.HEADING_2,
      onClick: () => {
        editor.chain().focus().toggleHeading({ level: 2 }).run();
      },
      isActive: editor.isActive("heading", { level: 2 }),
      iconName: "IconH2"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.HEADING_3,
      onClick: () => {
        editor.chain().focus().toggleHeading({ level: 3 }).run();
      },
      isActive: editor.isActive("heading", { level: 3 }),
      iconName: "IconH3"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.HEADING_4,
      onClick: () => {
        editor.chain().focus().toggleHeading({ level: 4 }).run();
      },
      isActive: editor.isActive("heading", { level: 4 }),
      iconName: "IconH4"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.HEADING_5,
      onClick: () => {
        editor.chain().focus().toggleHeading({ level: 5 }).run();
      },
      isActive: editor.isActive("heading", { level: 5 }),
      iconName: "IconH5"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.HEADING_6,
      onClick: () => {
        editor.chain().focus().toggleHeading({ level: 6 }).run();
      },
      isActive: editor.isActive("heading", { level: 6 }),
      iconName: "IconH6"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.BOLD,
      onClick: () => {
        editor.chain().focus().toggleBold().run();
      },
      isActive: editor.isActive("bold"),
      iconName: "IconBold",
      className: "text-rose-500",
      isDisabled: () => !editor.can().chain().focus().toggleBold().run()
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.ITALIC,
      onClick: () => {
        editor.chain().focus().toggleItalic().run();
      },
      isActive: editor.isActive("italic"),
      iconName: "IconItalic",
      isDisabled: () => !editor.can().chain().focus().toggleItalic().run()
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.STRIKE_THROUGH,
      onClick: () => {
        editor.chain().focus().toggleStrike().run();
      },
      isActive: editor.isActive("strike"),
      iconName: "IconStrikethrough",
      isDisabled: () => !editor.can().chain().focus().toggleStrike().run()
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.PARAGRAPH,
      onClick: () => {
        editor.chain().focus().setParagraph().run();
      },
      isActive: editor.isActive("paragraph"),
      iconName: "IconText",
      isDisabled: () => !editor.can().chain().focus().toggleCode().run()
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.UNORDERED_LIST,
      onClick: () => {
        editor.chain().focus().toggleBulletList().run();
      },
      isActive: editor.isActive("bulletList"),
      iconName: "IconListUl"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.ORDERED_LIST,
      onClick: () => {
        editor.chain().focus().toggleOrderedList().run();
      },
      isActive: editor.isActive("orderedList"),
      iconName: "IconListOl"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.BLOCK_QUOTE,
      onClick: () => {
        editor.chain().focus().toggleBlockquote().run();
      },
      isActive: editor.isActive("blockquote"),
      iconName: "IconQuote"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.LINK,
      iconName: "IconLink",
      isActive: editor.isActive("link")
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.YOUTUBE,
      iconName: "IconAddYoutube"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.IMAGE,
      iconName: "IconImage"
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.CODE,
      onClick: () => {
        editor.chain().focus().toggleCode().run();
      },
      isActive: editor.isActive("code"),
      iconName: "IconCode",
      isDisabled: () => !editor.can().chain().focus().toggleCode().run()
    },
    {
      id: TIPTAP_TOOLBAR_ITEMS.CODE_BLOCK,
      onClick: () => {
        editor.chain().focus().toggleCodeBlock().run();
      },
      isActive: editor.isActive("codeBlock"),
      iconName: "IconCodeBlock"
    }
  ];
};

export default getToolbarIcons;
