import { Extensions, JSONContent, generateHTML } from "@tiptap/core";
import sanitize from "sanitize-html";

import { editorConfig } from "../config";
import { toolbarItemToClassName } from "../constants";
import { TiptapControls, TiptapSuggestionOptions } from "../types";
import { getAllowedTags } from "./utils";

/**
 * Converts Tiptap editor content to sanitized HTML.
 * This class takes toolbar items and optional suggestion configurations to generate HTML content
 * from a Tiptap editor's JSON content state. The HTML is then sanitized based on a set of allowed tags,
 * attributes, and classes to ensure safety and compliance with expected content structures.
 */
export class TiptapToHTML {
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
        "br",
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
          "loading",
          "data-align"
        ],
        span: ["data-id", "data-type", "text-primary"],
        "rough-annotation": [
          "data-type",
          "data-color",
          "data-label",
          "data-stroke-width"
        ],
        td: ["colspan", "rowspan", "colwidth"],
        th: ["colspan", "rowspan", "colwidth"],
        // TaskList attributes
        ul: ["data-type"],
        li: ["data-type", "data-checked"],
        input: ["type", "checked", "disabled"],
        label: [],
        // Highlight attributes
        mark: ["data-color"]
      },
      selfClosing: ["img", "br", "input"],
      allowedClasses: {
        "*": [
          "text-text",
          "text-xl",
          "text-2xl",
          "text-3xl",
          "text-4xl",
          "text-6xl",
          "my-4",
          "mb-2",
          "mt-2",
          "break-words"
        ],
        a: ["underline,", "text-text", "cursor-pointer", "font-bold"],
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
