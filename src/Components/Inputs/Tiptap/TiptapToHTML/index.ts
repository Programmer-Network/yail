import { Extensions, JSONContent, generateHTML } from "@tiptap/core";
import sanitize from "sanitize-html";

import { CALLOUT_CONFIG } from "../Components/Callout";
import { TEXT_COLOR_CLASSES } from "../Components/ColorDropdown";
import { toolbarItemToClassName } from "../Tiptap.constants";
import { editorConfig } from "../Tiptap.editorConfig";
import { TiptapControls, TiptapSuggestionOptions } from "../Tiptap.types";
import { getAllowedTags } from "./utils";

/**
 * Get all callout-related CSS classes for sanitization
 */
const getCalloutClasses = (): string[] => {
  const baseClasses = [
    // Wrapper classes
    "callout-wrapper",
    "yl:my-4",
    "yl:rounded-r-md",
    "yl:border-l-4",
    "yl:p-4",
    // Header classes
    "callout-header",
    "yl:mb-2",
    "yl:flex",
    "yl:items-center",
    "yl:gap-2",
    "yl:font-semibold",
    "yl:uppercase",
    // Icon classes
    "yl:h-5",
    "yl:w-5",
    // Content classes
    "callout-content",
    "yl:prose",
    "yl:prose-sm",
    "yl:max-w-none",
    "[&>*:first-child]:yl:mt-0",
    "[&>*:last-child]:yl:mb-0"
  ];

  // Add color classes from all callout types (split backgroundColor for gradient classes)
  const colorClasses = Object.values(CALLOUT_CONFIG).flatMap(config => [
    config.borderColor,
    ...config.backgroundColor.split(" "),
    config.headerColor
  ]);

  return [...baseClasses, ...colorClasses];
};

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
        "div",
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
        span: ["data-id", "data-type", "data-color", "class"],
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
        mark: ["data-color"],
        // Callout attributes
        div: ["data-type", "data-callout-type", "class", "contenteditable"]
      },
      selfClosing: ["img", "br", "input"],
      allowedClasses: {
        "*": [
          "yl:text-text",
          "yl:text-xl",
          "yl:text-2xl",
          "yl:text-3xl",
          "yl:text-4xl",
          "yl:text-6xl",
          "yl:my-4",
          "yl:mb-2",
          "yl:mt-2",
          "yl:break-words",
          // Callout classes for all elements
          ...getCalloutClasses()
        ],
        a: [
          "yl:underline",
          "yl:text-text",
          "yl:cursor-pointer",
          "yl:font-bold"
        ],
        iframe: ["yl:aspect-video", "yl:w-full", "yl:h-full", "yl:py-4"],
        span: [
          ...Object.values(TEXT_COLOR_CLASSES),
          "callout-icon",
          "callout-label",
          "yl:h-5",
          "yl:w-5"
        ],
        ...this.toolbarItems.reduce(
          (acc, item) => {
            const config =
              toolbarItemToClassName[
                item as keyof typeof toolbarItemToClassName
              ];

            if (!config?.tagName) {
              return acc;
            }

            const existingClasses = acc[config.tagName] || [];
            const newClasses = config.classes.split(" ");
            return {
              ...acc,
              [config.tagName]: [
                ...new Set([...existingClasses, ...newClasses])
              ]
            };
          },
          {} as Record<string, string[]>
        )
      },
      allowedIframeHostnames: ["www.youtube.com"]
    };
  }
}
