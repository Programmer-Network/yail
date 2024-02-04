import { MentionOptions } from "@tiptap/extension-mention";
import { ReactRenderer } from "@tiptap/react";
import {
  SuggestionKeyDownProps,
  SuggestionOptions,
  SuggestionProps
} from "@tiptap/suggestion";
import tippy, { GetReferenceClientRect, Instance, Props } from "tippy.js";

import { MentionHandle, TiptapSuggestionOptions } from "../../types";
import Mention from "../Mention";

const Suggestion = ({
  suggestions
}: {
  suggestions: TiptapSuggestionOptions;
  mentionTriggerCharacter?: string;
}): Partial<SuggestionOptions> => {
  return {
    char: suggestions.mentionTriggerCharacter || "#",
    items: suggestions.items,
    render: () => {
      let Component: ReactRenderer<MentionHandle, MentionOptions>;
      let tippyInstance: Instance;

      return {
        onStart: (props: SuggestionProps) => {
          Component = new ReactRenderer(Mention, {
            props,
            editor: props.editor
          });

          if (!props.clientRect) {
            return;
          }

          const body = document.querySelector("body");
          if (!body) {
            return;
          }

          const tippyOptions: Partial<Props> = {
            getReferenceClientRect: props.clientRect as GetReferenceClientRect,
            appendTo: () => document.body,
            content: Component.element,
            showOnCreate: true,
            interactive: true,
            trigger: "manual",
            placement: "bottom",
            hideOnClick: true
          };

          tippyInstance = tippy(body, tippyOptions);
        },

        onUpdate(props: SuggestionProps) {
          Component.updateProps(props);

          if (!props.clientRect) {
            return;
          }

          tippyInstance.setProps({
            getReferenceClientRect: props.clientRect as GetReferenceClientRect
          });
        },

        onKeyDown(props: SuggestionKeyDownProps) {
          if (props.event.key === "Escape") {
            tippyInstance.hide();

            return true;
          }

          if (Component.ref?.onKeyDown) {
            return Component.ref.onKeyDown(props);
          }

          return false;
        },

        onExit() {
          tippyInstance.destroy();
          Component.destroy();
        }
      };
    }
  };
};

export default Suggestion;
