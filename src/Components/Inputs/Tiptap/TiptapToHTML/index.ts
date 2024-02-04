import { Extensions, JSONContent, generateHTML } from "@tiptap/core";
import sanitize from "sanitize-html";

import { editorConfig } from "Components/Inputs/Tiptap/config";
import {
  TiptapControls,
  TiptapSuggestionOptions
} from "Components/Inputs/Tiptap/types";

import { toolbarItemToClassName } from "../constants";
import { getAllowedTags } from "./utils";

export default class TiptapToHTML {
  suggestions: TiptapSuggestionOptions | undefined;
  toolbarItems: TiptapControls;

  constructor(
    toolbarItems: TiptapControls,
    suggestions?: TiptapSuggestionOptions
  ) {
    this.suggestions = suggestions;
    this.toolbarItems = toolbarItems;
  }

  /**
   * Generates sanitized HTML from stringified tiptap's content state
   * @param stringifiedContentState - stringified tiptap's content state
   * @returns sanitized HTML
   */
  generateSanitizedHTML(stringifiedContentState: string): string {
    if (!stringifiedContentState) {
      return "";
    }

    const htmlContent = sanitize(
      this.generateHTML(JSON.parse(stringifiedContentState)),
      this.sanitizeConfig()
    );

    return htmlContent;
  }

  private generateHTML(editorContent: JSONContent): string {
    return generateHTML(
      editorContent,
      editorConfig({
        toolbarItems: this.toolbarItems,
        suggestions: this.suggestions
      }).extensions as Extensions
    );
  }

  private sanitizeConfig() {
    return {
      allowedTags: [
        "p",
        "span",
        "a",
        "iframe",
        "img",
        ...getAllowedTags(this.toolbarItems)
      ],
      allowedAttributes: {
        a: ["href", "data-type"],
        iframe: ["src"],
        img: [
          "src",
          "class",
          "srcset",
          "alt",
          "title",
          "width",
          "height",
          "loading"
        ],
        span: ["data-id", "data-type"]
      },
      selfClosing: ["img"],
      allowedClasses: {
        "*": [
          "text-primary",
          "text-xl",
          "text-2xl",
          "text-3xl",
          "text-4xl",
          "text-6xl",
          "my-4",
          "mb-2",
          "mt-2",
          "wordbreak"
        ],
        iframe: ["aspect-video", "w-full", "h-full", "py-4"],
        ...Object.values(toolbarItemToClassName).reduce((acc, tag) => {
          if (!tag.tagName) {
            return acc;
          }

          return {
            ...acc,
            [tag.tagName]: tag.classes.split(" ")
          };
        }, {})
      },
      allowedIframeHostnames: ["www.youtube.com"]
    };
  }
}
