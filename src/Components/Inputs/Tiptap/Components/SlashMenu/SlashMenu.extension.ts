import { Extension } from "@tiptap/core";
import { ReactRenderer } from "@tiptap/react";
import Suggestion, {
  SuggestionKeyDownProps,
  SuggestionOptions,
  SuggestionProps
} from "@tiptap/suggestion";
import tippy, { Instance, Props } from "tippy.js";

import { TIPTAP_TOOLBAR_ITEMS } from "../../Tiptap.constants";
import { Extensions } from "../../Tiptap.types";
import { SlashMenuList } from "./SlashMenu";
import {
  ISlashMenuExtensionOptions,
  ISlashMenuItemWithCommand,
  ISlashMenuListHandle
} from "./SlashMenu.types";
import {
  filterSlashMenuItems,
  getAvailableSlashMenuItems
} from "./SlashMenu.utils";

const DEFAULT_RECT: DOMRect = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  toJSON: () => ({})
};

/**
 * Creates a safe reference rect getter that tippy.js expects.
 * Handles the case where clientRect might return null.
 */
const createSafeClientRectGetter = (
  clientRect: (() => DOMRect | null) | null
): (() => DOMRect) => {
  return () => {
    if (!clientRect) {
      return DEFAULT_RECT;
    }

    const rect = clientRect();

    return rect ?? DEFAULT_RECT;
  };
};

/**
 * Creates the Tiptap Suggestion configuration for the slash menu
 */
const createSlashMenuSuggestion = (
  options: ISlashMenuExtensionOptions
): Partial<SuggestionOptions<ISlashMenuItemWithCommand>> => {
  const availableItems = getAvailableSlashMenuItems(options.toolbarItems);

  return {
    char: "/",
    allowSpaces: false,
    startOfLine: false,

    // Custom allow function for trigger rules
    allow: ({ state, range, editor }) => {
      // Don't trigger in code blocks
      if (editor.isActive("codeBlock")) {
        return false;
      }

      // Get the position before the trigger character
      const $from = state.doc.resolve(range.from);

      // Allow at the start of the document
      if (range.from === 1) {
        return true;
      }

      // Get the character before the slash
      const textBefore = $from.parent.textBetween(
        Math.max(0, $from.parentOffset - 1),
        $from.parentOffset,
        undefined,
        "\ufffc"
      );

      // Allow if at start of a text node (parent offset is 0 or 1)
      if ($from.parentOffset <= 1) {
        return true;
      }

      // Allow after whitespace (space, newline, tab)
      if (/\s/.test(textBefore)) {
        return true;
      }

      // Don't allow after other characters (prevents triggering in URLs, etc.)
      return false;
    },

    items: ({ query }) => {
      return filterSlashMenuItems(availableItems, query);
    },

    command: ({ editor, range, props }) => {
      // Execute the command associated with the selected item
      props.command({ editor, range, props });

      // Handle special cases that need callback
      if (props.id === TIPTAP_TOOLBAR_ITEMS.IMAGE && options.onImageSelect) {
        options.onImageSelect();
      }
    },

    render: () => {
      let component: ReactRenderer<ISlashMenuListHandle>;
      let popup: Instance<Props>[];

      return {
        onStart: (props: SuggestionProps<ISlashMenuItemWithCommand>) => {
          component = new ReactRenderer(SlashMenuList, {
            props,
            editor: props.editor
          });

          if (!props.clientRect) {
            return;
          }

          popup = tippy("body", {
            getReferenceClientRect: createSafeClientRectGetter(
              props.clientRect
            ),
            appendTo: () => document.body,
            content: component.element,
            showOnCreate: true,
            interactive: true,
            trigger: "manual",
            placement: "bottom-start",
            hideOnClick: false,
            maxWidth: "none"
          });
        },

        onUpdate: (props: SuggestionProps<ISlashMenuItemWithCommand>) => {
          component.updateProps(props);

          if (!props.clientRect) {
            return;
          }

          popup[0]?.setProps({
            getReferenceClientRect: createSafeClientRectGetter(props.clientRect)
          });
        },

        onKeyDown: (props: SuggestionKeyDownProps) => {
          if (props.event.key === "Escape") {
            popup[0]?.hide();
            return true;
          }

          if (component.ref?.onKeyDown) {
            return component.ref.onKeyDown(props);
          }

          return false;
        },

        onExit: () => {
          popup[0]?.destroy();
          component.destroy();
        }
      };
    }
  };
};

/**
 * Slash Menu Extension for Tiptap
 *
 * Provides a Notion-style "/" command menu for quickly inserting
 * blocks, headings, lists, and other content types.
 */
export const SlashMenuExtension = Extension.create<ISlashMenuExtensionOptions>({
  name: "slashMenu",

  addOptions() {
    return {
      toolbarItems: undefined,
      onImageSelect: undefined
    };
  },

  addProseMirrorPlugins() {
    return [
      Suggestion({
        editor: this.editor,
        ...createSlashMenuSuggestion(this.options)
      })
    ];
  }
});

/**
 * Creates a configured SlashMenuExtension with the given options
 */
export const createSlashMenuExtension = (options: {
  toolbarItems?: Extensions[];
  onImageSelect?: () => void;
}) => {
  return SlashMenuExtension.configure(options);
};
