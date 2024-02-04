import { mergeAttributes } from "@tiptap/core";
import BlockQuote from "@tiptap/extension-blockquote";
import Bold from "@tiptap/extension-bold";
import UnorderedList from "@tiptap/extension-bullet-list";
import Code from "@tiptap/extension-code";
import CodeBlock from "@tiptap/extension-code-block";
import Color from "@tiptap/extension-color";
import Document from "@tiptap/extension-document";
import Dropcursor from "@tiptap/extension-dropcursor";
import HardBreak from "@tiptap/extension-hard-break";
import Heading from "@tiptap/extension-heading";
import History from "@tiptap/extension-history";
import Image from "@tiptap/extension-image";
import Italic from "@tiptap/extension-italic";
import Link from "@tiptap/extension-link";
import ListItem from "@tiptap/extension-list-item";
import Mention from "@tiptap/extension-mention";
import OrderedList from "@tiptap/extension-ordered-list";
import Paragraph from "@tiptap/extension-paragraph";
import Placeholder from "@tiptap/extension-placeholder";
import Strike from "@tiptap/extension-strike";
import Text from "@tiptap/extension-text";
import TextStyle from "@tiptap/extension-text-style";
import Youtube from "@tiptap/extension-youtube";

import Suggestion from "./Components/Suggestion";
import { TIPTAP_TOOLBAR_ITEMS, toolbarItemToClassName } from "./constants";
import { Extensions, IExtensionsMap, IGetExtensions } from "./types";

const headers = Heading.configure({ levels: [1, 2, 3, 4, 5, 6] }).extend({
  levels: [1, 2, 3, 4, 5, 6],
  renderHTML({ node, HTMLAttributes }) {
    const level = this.options.levels.includes(node.attrs.level)
      ? node.attrs.level
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
  [TIPTAP_TOOLBAR_ITEMS.CODE_BLOCK]: CodeBlock,
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
  [TIPTAP_TOOLBAR_ITEMS.IMAGE]: Image.configure({
    allowBase64: true,
    HTMLAttributes: {
      class: toolbarItemToClassName[TIPTAP_TOOLBAR_ITEMS.IMAGE].classes
    }
  })
};

const getExtensions = ({
  toolbarItems,
  placeholder,
  suggestions
}: IGetExtensions) => {
  const defaultExtensions = [
    Document,
    Text,
    Code,
    HardBreak,
    Dropcursor,
    Placeholder.configure({
      emptyEditorClass: "is-editor-empty",
      placeholder
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

  const extensions = defaultExtensions.concat(
    toolbarItems?.length
      ? Object.keys(extensionsMap)
          .filter(key =>
            toolbarItems.includes(key as keyof typeof extensionsMap)
          )
          .map(key => extensionsMap[key as Extensions])
      : []
  );

  if (suggestions) {
    if (!suggestions.items) {
      throw new Error("Suggestions are enabled but missing required props");
    }

    extensions.push(
      Mention.configure({
        HTMLAttributes: {
          class: toolbarItemToClassName[TIPTAP_TOOLBAR_ITEMS.MENTION].classes
        },
        renderText({ options, node }) {
          return `${options.suggestion.char}${
            node.attrs.label || node.attrs.id
          }`;
        },
        suggestion: Suggestion({ suggestions })
      })
    );
  }

  return extensions;
};

export default getExtensions;
