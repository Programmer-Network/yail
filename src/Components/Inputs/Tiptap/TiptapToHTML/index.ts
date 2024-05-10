import { Extensions, JSONContent, generateHTML } from "@tiptap/core";
import sanitize from "sanitize-html";

import { editorConfig } from "Components/Inputs/Tiptap/config";
import {
  TiptapControls,
  TiptapSuggestionOptions
} from "Components/Inputs/Tiptap/types";

import { toolbarItemToClassName } from "../constants";
import { getAllowedTags } from "./utils";

/**
 * Converts Tiptap editor content to sanitized HTML.
 * This class takes toolbar items and optional suggestion configurations to generate HTML content
 * from a Tiptap editor's JSON content state. The HTML is then sanitized based on a set of allowed tags,
 * attributes, and classes to ensure safety and compliance with expected content structures.
 */
export default class TiptapToHTML {
  suggestions: TiptapSuggestionOptions | undefined;
  toolbarItems: TiptapControls;

  /**
   * Constructs an instance of the TiptapToHTML converter.
   * @param {TiptapControls} toolbarItems - The toolbar items configuration for the Tiptap editor.
   * @param {TiptapSuggestionOptions} [suggestions] - Optional suggestions configuration for the Tiptap editor.
   */
  constructor(
    toolbarItems: TiptapControls,
    suggestions?: TiptapSuggestionOptions
  ) {
    this.suggestions = suggestions;
    this.toolbarItems = toolbarItems;
  }

  /**
   * Generates sanitized HTML from a stringified Tiptap editor content state.
   * @param {string} stringifiedContentState - The JSON stringified content state of the Tiptap editor.
   * @returns {string} The sanitized HTML string.
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

  /**
   * Generates HTML from the Tiptap editor's JSON content state.
   * This method utilizes the Tiptap `generateHTML` function along with the editor configuration
   * to convert JSON content state into HTML.
   * @private
   * @param {JSONContent} editorContent - The JSON content state of the Tiptap editor.
   * @returns {string} The generated HTML string.
   */
  private generateHTML(editorContent: JSONContent): string {
    return generateHTML(
      editorContent,
      editorConfig({
        toolbarItems: this.toolbarItems,
        suggestions: this.suggestions
      }).extensions as Extensions
    );
  }

  /**
   * Defines the configuration for the HTML sanitizer.
   * Specifies allowed tags, attributes, classes, and iframe hostnames to ensure the generated HTML
   * is safe and meets the defined constraints.
   * @private
   * @returns {Object} The sanitizer configuration object.
   */
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
          "yl-text-primary",
          "yl-text-xl",
          "yl-text-2xl",
          "yl-text-3xl",
          "yl-text-4xl",
          "yl-text-6xl",
          "yl-my-4",
          "yl-mb-2",
          "yl-mt-2",
          "yl-break-words"
        ],
        a: [
          "yl-underline,",
          "yl-text-primary",
          "yl-cursor-pointer",
          "yl-font-bold"
        ],
        iframe: ["yl-aspect-video", "yl-w-full", "yl-h-full", "yl-py-4"],
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
