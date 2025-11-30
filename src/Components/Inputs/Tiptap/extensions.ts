import { mergeAttributes } from "@tiptap/core";
import BlockQuote from "@tiptap/extension-blockquote";
import Bold from "@tiptap/extension-bold";
import UnorderedList from "@tiptap/extension-bullet-list";
import CharacterCount from "@tiptap/extension-character-count";
import Code from "@tiptap/extension-code";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Color from "@tiptap/extension-color";
import Document from "@tiptap/extension-document";
import Dropcursor from "@tiptap/extension-dropcursor";
import HardBreak from "@tiptap/extension-hard-break";
import Heading from "@tiptap/extension-heading";
import Highlight from "@tiptap/extension-highlight";
import History from "@tiptap/extension-history";
import Italic from "@tiptap/extension-italic";
import Link from "@tiptap/extension-link";
import ListItem from "@tiptap/extension-list-item";
import Mention from "@tiptap/extension-mention";
import OrderedList from "@tiptap/extension-ordered-list";
import Paragraph from "@tiptap/extension-paragraph";
import Placeholder from "@tiptap/extension-placeholder";
import Strike from "@tiptap/extension-strike";
import { TableKit } from "@tiptap/extension-table";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import Text from "@tiptap/extension-text";
import { TextStyle } from "@tiptap/extension-text-style";
import Youtube from "@tiptap/extension-youtube";
import { common, createLowlight } from "lowlight";

import { ResizableImageExtension } from "./Components/ResizableImage";
import { RoughAnnotationExtension } from "./Components/RoughAnnotation";
import Suggestion from "./Components/Suggestion";
import { TIPTAP_TOOLBAR_ITEMS, toolbarItemToClassName } from "./constants";
import { IExtensionsMap, IGetExtensions } from "./types";

// Create lowlight instance with common programming languages
const lowlight = createLowlight(common);

const headers = Heading.configure({ levels: [1, 2, 3, 4, 5, 6] }).extend({
  levels: [1, 2, 3, 4, 5, 6],
  renderHTML(attributes: Record<string, any>) {
    const { node, HTMLAttributes } = attributes;

    const level = this.options.levels.includes(node.attrs["level"])
      ? node.attrs["level"]
      : this.options.levels[0];

    const headingClassNames = {
      1: toolbarItemToClassName[TIPTAP_TOOLBAR_ITEMS.HEADING_1].classes,
      2: toolbarItemToClassName[TIPTAP_TOOLBAR_ITEMS.HEADING_2].classes,
      3: toolbarItemToClassName[TIPTAP_TOOLBAR_ITEMS.HEADING_3].classes,
      4: toolbarItemToClassName[TIPTAP_TOOLBAR_ITEMS.HEADING_4].classes,
      5: toolbarItemToClassName[TIPTAP_TOOLBAR_ITEMS.HEADING_5].classes,
      6: toolbarItemToClassName[TIPTAP_TOOLBAR_ITEMS.HEADING_6].classes
    };

    return [
      `h${level}`,
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        class: `${headingClassNames[level as keyof typeof headingClassNames]}`
      }),
      0
    ];
  }
});

const extensionsMap: IExtensionsMap = {
  [TIPTAP_TOOLBAR_ITEMS.BOLD]: Bold,
  [TIPTAP_TOOLBAR_ITEMS.ITALIC]: Italic,
  [TIPTAP_TOOLBAR_ITEMS.LIST_ITEM]: ListItem,
  [TIPTAP_TOOLBAR_ITEMS.UNORDERED_LIST]: UnorderedList.configure({
    HTMLAttributes: {
      class: toolbarItemToClassName[TIPTAP_TOOLBAR_ITEMS.UNORDERED_LIST].classes
    },
    keepMarks: true,
    keepAttributes: false
  }),
  [TIPTAP_TOOLBAR_ITEMS.ORDERED_LIST]: OrderedList.configure({
    HTMLAttributes: {
      class: toolbarItemToClassName[TIPTAP_TOOLBAR_ITEMS.ORDERED_LIST].classes
    },
    keepMarks: true,
    keepAttributes: false
  }),
  [TIPTAP_TOOLBAR_ITEMS.CODE]: Code,
  [TIPTAP_TOOLBAR_ITEMS.STRIKE_THROUGH]: Strike,
  [TIPTAP_TOOLBAR_ITEMS.CODE_BLOCK]: CodeBlockLowlight.configure({
    lowlight,
    defaultLanguage: "plaintext"
  }),
  [TIPTAP_TOOLBAR_ITEMS.BLOCK_QUOTE]: BlockQuote,
  [TIPTAP_TOOLBAR_ITEMS.LINK]: Link.configure({
    openOnClick: false,
    autolink: true,
    linkOnPaste: true,
    validate: href => /^https?:\/\//.test(href),
    HTMLAttributes: {
      "data-type": "link",
      class: toolbarItemToClassName[TIPTAP_TOOLBAR_ITEMS.LINK].classes,
      rel: "noopener noreferrer"
    }
  }),
  [TIPTAP_TOOLBAR_ITEMS.MENTION]: Mention,
  [TIPTAP_TOOLBAR_ITEMS.STRIKE]: Strike,
  [TIPTAP_TOOLBAR_ITEMS.YOUTUBE]: Youtube.configure({
    HTMLAttributes: {
      class: toolbarItemToClassName[TIPTAP_TOOLBAR_ITEMS.YOUTUBE].classes
    }
  }),
  [TIPTAP_TOOLBAR_ITEMS.COLOR]: Color,
  [TIPTAP_TOOLBAR_ITEMS.TEXT_STYLE]: TextStyle,
  [TIPTAP_TOOLBAR_ITEMS.PARAGRAPH]: Paragraph,
  [TIPTAP_TOOLBAR_ITEMS.HEADING_1]: headers,
  [TIPTAP_TOOLBAR_ITEMS.HEADING_2]: headers,
  [TIPTAP_TOOLBAR_ITEMS.HEADING_3]: headers,
  [TIPTAP_TOOLBAR_ITEMS.HEADING_4]: headers,
  [TIPTAP_TOOLBAR_ITEMS.HEADING_5]: headers,
  [TIPTAP_TOOLBAR_ITEMS.HEADING_6]: headers,
  [TIPTAP_TOOLBAR_ITEMS.IMAGE]: ResizableImageExtension.configure({
    allowBase64: true,
    HTMLAttributes: {
      class: toolbarItemToClassName[TIPTAP_TOOLBAR_ITEMS.IMAGE].classes
    }
  }),
  [TIPTAP_TOOLBAR_ITEMS.TABLE]: TableKit,
  [TIPTAP_TOOLBAR_ITEMS.TASK_LIST]: TaskList.configure({
    HTMLAttributes: {
      class: "yl:list-none yl:pl-0"
    }
  }),
  [TIPTAP_TOOLBAR_ITEMS.TASK_ITEM]: TaskItem.configure({
    nested: true
  }),
  [TIPTAP_TOOLBAR_ITEMS.HIGHLIGHT]: Highlight.configure({
    multicolor: true
  }),
  [TIPTAP_TOOLBAR_ITEMS.CHARACTER_COUNT]: CharacterCount.configure({
    limit: null
  }),
  [TIPTAP_TOOLBAR_ITEMS.ROUGH_ANNOTATION]: RoughAnnotationExtension
};

export const defaultExtensions = ({
  placeholder
}: {
  placeholder?: string;
}) => [
  Document,
  Text,
  Code,
  HardBreak,
  Dropcursor.configure({
    color: "var(--color-accent, #fbad00)",
    width: 1,
    class: "tiptap-dropcursor"
  }),
  Placeholder.configure({
    emptyEditorClass: "is-editor-empty",
    showOnlyWhenEditable: true,
    placeholder: ({ editor }: { editor: { isEmpty: boolean } }) => {
      if (editor.isEmpty) {
        return placeholder || "Start writing...";
      }

      return "";
    }
  }),
  Paragraph.configure({
    HTMLAttributes: {
      class: toolbarItemToClassName[TIPTAP_TOOLBAR_ITEMS.PARAGRAPH].classes
    }
  }),
  History.configure({
    depth: 10
  })
];

const getExtensions = ({
  toolbarItems,
  placeholder,
  suggestions
}: IGetExtensions) => {
  const uniqueExtensions = new Map();

  defaultExtensions({ placeholder }).forEach(extension => {
    uniqueExtensions.set(extension.name, extension);
  });

  if (toolbarItems?.length) {
    toolbarItems.forEach(item => {
      const extension = extensionsMap[item];
      if (extension) {
        uniqueExtensions.set(extension.name, extension);
      }
    });
  }

  if (suggestions) {
    if (!suggestions.items) {
      throw new Error("Suggestions are enabled but missing required props");
    }

    const mentionExtension = Mention.configure({
      HTMLAttributes: {
        class: toolbarItemToClassName[TIPTAP_TOOLBAR_ITEMS.MENTION].classes
      },
      renderText({ options, node }) {
        return `${options.suggestion.char}${node.attrs["label"] || node.attrs["id"]}`;
      },
      suggestion: Suggestion({ suggestions })
    });

    uniqueExtensions.set(mentionExtension.name, mentionExtension);
  }

  return Array.from(uniqueExtensions.values());
};

export default getExtensions;
