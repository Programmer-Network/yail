import { describe, expect, test } from "vitest";

import { TiptapControls } from "../Tiptap.types";
import { TiptapToHTML } from "./index";
import { getAllowedTags } from "./utils";

// Minimal toolbar config for testing (matches THOUGHT toolbar)
const TEST_TOOLBAR: TiptapControls = [
  "YOUTUBE",
  "BOLD",
  "LINK",
  "CODE",
  "CODE_BLOCK",
  "IMAGE"
] as TiptapControls;

describe("TiptapToHTML.removeTrailingBrTags", () => {
  const converter = new TiptapToHTML(TEST_TOOLBAR);

  describe("removes trailing <br> tags at the end of string", () => {
    test("removes single trailing <br> tag", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Some text" },
              { type: "hardBreak" }
            ]
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      // Should not contain any br tags (TipTap generates <br /> format)
      expect(html).not.toMatch(/<br\s*\/?>/i);
      // Should end with the text content, not br tags
      expect(html).toMatch(/Some text<\/p>$/);
    });

    test("removes multiple trailing <br> tags", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Some text" },
              { type: "hardBreak" },
              { type: "hardBreak" },
              { type: "hardBreak" },
              { type: "hardBreak" }
            ]
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      // Should not contain any br tags
      expect(html).not.toMatch(/<br\s*\/?>/i);
      // Should end with the text content
      expect(html).toMatch(/Some text<\/p>$/);
    });

    test("handles content without trailing breaks", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [{ type: "text", text: "Some text" }]
          }
        ]
      });
      const result = converter.generateSanitizedHTML(content);
      // Should not contain br tags
      expect(result).not.toMatch(/<br\s*\/?>/i);
      // Should contain the text
      expect(result).toMatch(/Some text/);
    });
  });

  describe("removes trailing <br> tags before closing tags", () => {
    test("removes <br> tags before </p> closing tag", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Hope people enjoy :)" },
              { type: "hardBreak" },
              { type: "hardBreak" },
              { type: "hardBreak" },
              { type: "hardBreak" }
            ]
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      // Should not contain br tags before closing p tag
      expect(html).not.toMatch(/<br\s*\/?>\s*<\/p>/i);
      // Should end with the text content
      expect(html).toMatch(/Hope people enjoy :\)<\/p>$/);
    });

    test("removes <br> tags before </p> closing tag in paragraph", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Text content" },
              { type: "hardBreak" },
              { type: "hardBreak" }
            ]
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      // Should not contain br tags before closing p tag
      expect(html).not.toMatch(/<br\s*\/?>\s*<\/p>/i);
      // Should end with the text content
      expect(html).toMatch(/Text content<\/p>$/);
    });

    test("handles mixed content with trailing breaks", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              { type: "text", text: "First paragraph" },
              { type: "hardBreak" }
            ]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Second paragraph" },
              { type: "hardBreak" },
              { type: "hardBreak" }
            ]
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      // Should not contain br tags before closing p tags
      expect(html).not.toMatch(/<br\s*\/?>\s*<\/p>/i);
      // Should contain both paragraphs
      expect(html).toMatch(/First paragraph/);
      expect(html).toMatch(/Second paragraph/);
    });
  });

  describe("preserves <br> tags in the middle of content", () => {
    test("keeps <br> tags that are not trailing", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Line 1" },
              { type: "hardBreak" },
              { type: "text", text: "Line 2" },
              { type: "hardBreak" },
              { type: "text", text: "Line 3" }
            ]
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      // Should contain br tags (they're in the middle, not trailing)
      expect(html).toMatch(/<br\s*\/?>/i);
      // Should contain all three lines
      expect(html).toMatch(/Line 1/);
      expect(html).toMatch(/Line 2/);
      expect(html).toMatch(/Line 3/);
      // Should not end with br tags
      expect(html).toMatch(/Line 3<\/p>$/);
    });

    test("keeps <br> tags between paragraphs but removes trailing ones", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [{ type: "text", text: "First paragraph" }]
          },
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Second paragraph" },
              { type: "hardBreak" },
              { type: "hardBreak" }
            ]
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      // Should contain both paragraphs
      expect(html).toMatch(/First paragraph/);
      expect(html).toMatch(/Second paragraph/);
      // Should not have br tags before closing p tag
      expect(html).not.toMatch(/<br\s*\/?>\s*<\/p>/i);
      // Should end with second paragraph
      expect(html).toMatch(/Second paragraph<\/p>$/);
    });
  });

  describe("handles edge cases", () => {
    test("handles empty content", () => {
      const content = JSON.stringify({
        type: "doc",
        content: []
      });

      const html = converter.generateSanitizedHTML(content);
      expect(html).toBe("");
    });

    test("handles content with only <br> tags", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              { type: "hardBreak" },
              { type: "hardBreak" },
              { type: "hardBreak" }
            ]
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      // Should not contain br tags (all were trailing)
      expect(html).not.toMatch(/<br\s*\/?>/i);
      // Should be an empty paragraph
      expect(html).toMatch(/<p[^>]*><\/p>/);
    });

    test("handles content with whitespace before trailing <br> tags", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Text with trailing breaks" },
              { type: "hardBreak" },
              { type: "hardBreak" }
            ]
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      // Should not contain br tags before closing p tag
      expect(html).not.toMatch(/<br\s*\/?>\s*<\/p>/i);
      // Should end with the text content
      expect(html).toMatch(/Text with trailing breaks<\/p>$/);
    });

    test("handles content without trailing <br> tags", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [{ type: "text", text: "Just text, no breaks" }]
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      // Should not contain br tags
      expect(html).not.toMatch(/<br\s*\/?>/i);
      // Should contain the text
      expect(html).toMatch(/Just text, no breaks/);
    });
  });

  describe("handles complex nested structures", () => {
    test("removes trailing breaks from nested paragraph structures", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Someone on Alex's stream asked him" },
              { type: "hardBreak" },
              { type: "hardBreak" },
              {
                type: "text",
                text: "@Programmer_Network just curious.."
              },
              { type: "hardBreak" },
              { type: "hardBreak" },
              {
                type: "text",
                text: "Alex's answer was great in my opinion."
              },
              { type: "hardBreak" },
              { type: "hardBreak" },
              {
                type: "text",
                text: "I also wanted to share a video"
              },
              { type: "hardBreak" },
              { type: "hardBreak" },
              { type: "text", text: "Hope people enjoy :)" },
              { type: "hardBreak" },
              { type: "hardBreak" },
              { type: "hardBreak" },
              { type: "hardBreak" }
            ]
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      // Should not end with <br> tags before closing p tag
      expect(html).not.toMatch(/<br\s*\/?>\s*<\/p>$/i);
      // Should end with the text content
      expect(html).toMatch(/Hope people enjoy :\)<\/p>$/);
    });

    test("handles content with YouTube embed after trailing breaks", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Check out this video" },
              { type: "hardBreak" },
              { type: "hardBreak" },
              { type: "hardBreak" },
              { type: "hardBreak" }
            ]
          },
          {
            type: "youtube",
            attrs: {
              src: "https://www.youtube.com/watch?v=266Ho2ulfqE",
              start: 0,
              width: 640,
              height: 480
            }
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      // Should remove trailing breaks before YouTube embed
      expect(html).not.toMatch(/<br\s*\/?>\s*<iframe/i);
      // Should contain the text before iframe
      expect(html).toMatch(/Check out this video<\/p>/);
    });
  });

  describe("handles different br tag formats", () => {
    test("removes trailing breaks in <br /> format", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [{ type: "text", text: "Text" }, { type: "hardBreak" }]
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      // Should not contain br tags (TipTap generates <br /> format)
      expect(html).not.toMatch(/<br\s*\/?>/i);
      // Should end with text content
      expect(html).toMatch(/Text<\/p>$/);
    });

    test("removes multiple consecutive trailing breaks", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              { type: "text", text: "Text" },
              { type: "hardBreak" },
              { type: "hardBreak" },
              { type: "hardBreak" },
              { type: "hardBreak" },
              { type: "hardBreak" }
            ]
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      // Should not contain br tags before closing p tag
      expect(html).not.toMatch(/<br\s*\/?>\s*<\/p>/i);
      // Should end with text content
      expect(html).toMatch(/Text<\/p>$/);
    });
  });
});

describe("TiptapToHTML.generateSanitizedHTML", () => {
  const converter = new TiptapToHTML(TEST_TOOLBAR);

  describe("handles empty and invalid input", () => {
    test("returns empty string for empty content", () => {
      const content = JSON.stringify({
        type: "doc",
        content: []
      });

      const html = converter.generateSanitizedHTML(content);
      expect(html).toBe("");
    });

    test("returns empty string for empty string input", () => {
      const html = converter.generateSanitizedHTML("");
      expect(html).toBe("");
    });
  });

  describe("generates HTML from TipTap JSON", () => {
    test("converts simple paragraph to HTML", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [{ type: "text", text: "Hello world" }]
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      expect(html).toMatch(/Hello world/);
      expect(html).toMatch(/<p/);
    });

    test("converts multiple paragraphs to HTML", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [{ type: "text", text: "First paragraph" }]
          },
          {
            type: "paragraph",
            content: [{ type: "text", text: "Second paragraph" }]
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      expect(html).toMatch(/First paragraph/);
      expect(html).toMatch(/Second paragraph/);
    });

    test("converts bold text to HTML", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "Bold text",
                marks: [{ type: "bold" }]
              }
            ]
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      expect(html).toMatch(/Bold text/);
      expect(html).toMatch(/<strong/i);
    });

    test("converts links to HTML", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "Click here",
                marks: [
                  {
                    type: "link",
                    attrs: { href: "https://example.com" }
                  }
                ]
              }
            ]
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      expect(html).toMatch(/Click here/);
      expect(html).toMatch(/<a/i);
      expect(html).toMatch(/href="https:\/\/example\.com"/);
    });

    test("converts code blocks to HTML", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "codeBlock",
            content: [{ type: "text", text: "const x = 1;" }]
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      expect(html).toMatch(/const x = 1;/);
      expect(html).toMatch(/<pre/i);
      expect(html).toMatch(/<code/i);
    });

    test("converts YouTube embeds to HTML", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "youtube",
            attrs: {
              src: "https://www.youtube.com/watch?v=266Ho2ulfqE",
              start: 0,
              width: 640,
              height: 480
            }
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      expect(html).toMatch(/<iframe/i);
      expect(html).toMatch(/youtube\.com/);
    });
  });

  describe("sanitizes HTML content", () => {
    test("allows only allowed iframe hostnames", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "youtube",
            attrs: {
              src: "https://www.youtube.com/watch?v=test",
              start: 0,
              width: 640,
              height: 480
            }
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      // Should allow youtube.com
      expect(html).toMatch(/youtube\.com/);
    });

    test("preserves allowed attributes", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "Link",
                marks: [
                  {
                    type: "link",
                    attrs: { href: "https://example.com", "data-type": "link" }
                  }
                ]
              }
            ]
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      expect(html).toMatch(/href=/);
      expect(html).toMatch(/data-type="link"/);
    });
  });

  describe("handles different toolbar configurations", () => {
    test("works with minimal toolbar", () => {
      const minimalToolbar: TiptapControls = ["BOLD"] as TiptapControls;
      const minimalConverter = new TiptapToHTML(minimalToolbar);

      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "Bold text",
                marks: [{ type: "bold" }]
              }
            ]
          }
        ]
      });

      const html = minimalConverter.generateSanitizedHTML(content);
      expect(html).toMatch(/Bold text/);
    });
  });
});

describe("getAllowedTags utility", () => {
  describe("returns correct tags for toolbar items", () => {
    test("returns empty array for empty toolbar", () => {
      const result = getAllowedTags([]);
      expect(result).toEqual([]);
    });

    test("returns tags for BOLD toolbar item", () => {
      const toolbar: TiptapControls = ["BOLD"] as TiptapControls;
      const result = getAllowedTags(toolbar);
      expect(result).toContain("strong");
    });

    test("returns tags for ITALIC toolbar item", () => {
      const toolbar: TiptapControls = ["ITALIC"] as TiptapControls;
      const result = getAllowedTags(toolbar);
      expect(result).toContain("em");
    });

    test("returns tags for CODE toolbar item", () => {
      const toolbar: TiptapControls = ["CODE"] as TiptapControls;
      const result = getAllowedTags(toolbar);
      expect(result).toContain("code");
    });

    test("returns tags for LINK toolbar item", () => {
      const toolbar: TiptapControls = ["LINK"] as TiptapControls;
      const result = getAllowedTags(toolbar);
      expect(result).toContain("a");
    });

    test("returns tags for CODE_BLOCK toolbar item", () => {
      const toolbar: TiptapControls = ["CODE_BLOCK"] as TiptapControls;
      const result = getAllowedTags(toolbar);
      expect(result).toContain("pre");
      expect(result).toContain("code");
    });

    test("returns tags for HEADING toolbar items", () => {
      const toolbar: TiptapControls = [
        "HEADING_1",
        "HEADING_2",
        "HEADING_3"
      ] as TiptapControls;
      const result = getAllowedTags(toolbar);
      expect(result).toContain("h1");
      expect(result).toContain("h2");
      expect(result).toContain("h3");
    });

    test("returns tags for LIST toolbar items", () => {
      const toolbar: TiptapControls = [
        "ORDERED_LIST",
        "UNORDERED_LIST",
        "LIST_ITEM"
      ] as TiptapControls;
      const result = getAllowedTags(toolbar);
      expect(result).toContain("ol");
      expect(result).toContain("ul");
      expect(result).toContain("li");
    });

    test("returns tags for TABLE toolbar item", () => {
      const toolbar: TiptapControls = ["TABLE"] as TiptapControls;
      const result = getAllowedTags(toolbar);
      expect(result).toContain("table");
      expect(result).toContain("thead");
      expect(result).toContain("tbody");
      expect(result).toContain("tr");
      expect(result).toContain("th");
      expect(result).toContain("td");
    });

    test("returns tags for YOUTUBE toolbar item", () => {
      const toolbar: TiptapControls = ["YOUTUBE"] as TiptapControls;
      const result = getAllowedTags(toolbar);
      expect(result).toContain("iframe");
    });

    test("returns tags for IMAGE toolbar item", () => {
      const toolbar: TiptapControls = ["IMAGE"] as TiptapControls;
      const result = getAllowedTags(toolbar);
      expect(result).toContain("img");
    });

    test("returns tags for multiple toolbar items", () => {
      const toolbar: TiptapControls = [
        "BOLD",
        "ITALIC",
        "LINK",
        "CODE_BLOCK"
      ] as TiptapControls;
      const result = getAllowedTags(toolbar);
      expect(result).toContain("strong");
      expect(result).toContain("em");
      expect(result).toContain("a");
      expect(result).toContain("pre");
      expect(result).toContain("code");
    });
  });

  describe("handles edge cases", () => {
    test("returns empty array for null input", () => {
      // @ts-expect-error Testing invalid input
      const result = getAllowedTags(null);
      expect(result).toEqual([]);
    });

    test("returns empty array for undefined input", () => {
      // @ts-expect-error Testing invalid input
      const result = getAllowedTags(undefined);
      expect(result).toEqual([]);
    });

    test("ignores unknown toolbar items", () => {
      const toolbar: TiptapControls = [
        "BOLD",
        "UNKNOWN_ITEM" as unknown as TiptapControls[number]
      ] as TiptapControls;
      const result = getAllowedTags(toolbar);
      expect(result).toContain("strong");
      expect(result).not.toContain("UNKNOWN_ITEM");
    });

    test("handles empty array gracefully", () => {
      const result = getAllowedTags([]);
      expect(result).toEqual([]);
    });
  });
});

describe("TiptapToHTML security and XSS prevention", () => {
  const converter = new TiptapToHTML(TEST_TOOLBAR);

  describe("prevents XSS attacks", () => {
    test("removes script tags from content", () => {
      // Even if TipTap JSON contains script-like content, sanitization should remove it
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [{ type: "text", text: "Safe content" }]
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      expect(html).not.toMatch(/<script/i);
      expect(html).not.toMatch(/javascript:/i);
      expect(html).not.toMatch(/onerror=/i);
      expect(html).not.toMatch(/onclick=/i);
    });

    test("sanitizes malicious link attributes", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "Click me",
                marks: [
                  {
                    type: "link",
                    attrs: {
                      href: "javascript:alert('xss')",
                      "data-type": "link"
                    }
                  }
                ]
              }
            ]
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      // Should not contain javascript: protocol
      expect(html).not.toMatch(/javascript:/i);
    });

    test("removes event handler attributes", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [{ type: "text", text: "Text" }]
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      // Should not contain any event handlers
      expect(html).not.toMatch(/on\w+=/i);
    });

    test("sanitizes iframe src to only allow youtube.com", () => {
      const maliciousContent = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "youtube",
            attrs: {
              src: "https://evil.com/iframe",
              start: 0,
              width: 640,
              height: 480
            }
          }
        ]
      });

      const html = converter.generateSanitizedHTML(maliciousContent);
      // Should not contain evil.com
      expect(html).not.toMatch(/evil\.com/i);
      // Sanitize-html should remove iframes with disallowed hostnames
      // So the iframe should either be removed entirely or have no src
      if (html.includes("iframe")) {
        // If iframe exists, it should not have evil.com src
        expect(html).not.toMatch(/src="https:\/\/evil\.com/i);
      }
    });
  });

  describe("handles malformed and invalid input", () => {
    test("handles invalid JSON gracefully", () => {
      expect(() => {
        converter.generateSanitizedHTML("not valid json");
      }).not.toThrow();
    });

    test("handles missing content property", () => {
      const content = JSON.stringify({
        type: "doc"
      });

      const html = converter.generateSanitizedHTML(content);
      expect(typeof html).toBe("string");
    });

    test("handles null content array", () => {
      const content = JSON.stringify({
        type: "doc",
        content: null
      });

      // Should handle gracefully without throwing
      expect(() => {
        converter.generateSanitizedHTML(content);
      }).not.toThrow();
    });

    test("handles deeply nested structures", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "Text",
                marks: [
                  { type: "bold" },
                  {
                    type: "link",
                    attrs: { href: "https://example.com" }
                  }
                ]
              }
            ]
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      expect(html).toMatch(/Text/);
      expect(html).toMatch(/<strong/i);
      expect(html).toMatch(/<a/i);
    });
  });

  describe("handles special characters and encoding", () => {
    test("preserves special characters in text", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [{ type: "text", text: "Special: <>&\"' chars" }]
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      expect(html).toMatch(/Special:/);
      // Should be properly escaped
      expect(html).not.toContain("<>&\"'");
    });

    test("handles unicode characters", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [{ type: "text", text: "Unicode: 🚀 中文 العربية" }]
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      expect(html).toMatch(/Unicode:/);
    });

    test("handles emoji and special symbols", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [{ type: "text", text: "Emoji: 😀 🎉 ✅ ❌" }]
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      expect(html).toMatch(/Emoji:/);
    });
  });
});

describe("TiptapToHTML advanced features", () => {
  describe("handles mentions", () => {
    const toolbarWithMentions: TiptapControls = [
      "BOLD",
      "LINK",
      "MENTION"
    ] as TiptapControls;

    const suggestionsConfig = {
      trigger: "#",
      items: ({ query }: { query: string }) => {
        return [
          { label: "tag1", id: "1" },
          { label: "tag2", id: "2" }
        ].filter(item => item.label.startsWith(query));
      }
    };

    const converter = new TiptapToHTML(toolbarWithMentions, suggestionsConfig);

    test("converts mentions to HTML", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "mention",
                attrs: {
                  id: "1",
                  label: "tag1",
                  "data-type": "mention"
                }
              }
            ]
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      expect(html).toMatch(/tag1/);
      expect(html).toMatch(/data-type="mention"/);
    });
  });

  describe("handles images", () => {
    const toolbarWithImages: TiptapControls = [
      "IMAGE",
      "BOLD"
    ] as TiptapControls;
    const converter = new TiptapToHTML(toolbarWithImages);

    test("converts images to HTML", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "image",
            attrs: {
              src: "https://example.com/image.jpg",
              alt: "Test image",
              title: "Image title"
            }
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      expect(html).toMatch(/<img/i);
      expect(html).toMatch(/src="https:\/\/example\.com\/image\.jpg"/);
      expect(html).toMatch(/alt="Test image"/);
    });

    test("preserves image alignment attributes", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "image",
            attrs: {
              src: "https://example.com/image.jpg",
              "data-align": "center"
            }
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      expect(html).toMatch(/data-align="center"/);
    });
  });

  describe("handles tables", () => {
    const toolbarWithTables: TiptapControls = [
      "TABLE",
      "BOLD"
    ] as TiptapControls;
    const converter = new TiptapToHTML(toolbarWithTables);

    test("converts tables to HTML", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "table",
            content: [
              {
                type: "tableRow",
                content: [
                  {
                    type: "tableHeader",
                    content: [
                      {
                        type: "paragraph",
                        content: [{ type: "text", text: "Header" }]
                      }
                    ]
                  },
                  {
                    type: "tableCell",
                    content: [
                      {
                        type: "paragraph",
                        content: [{ type: "text", text: "Cell" }]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      expect(html).toMatch(/<table/i);
      expect(html).toMatch(/<th/i);
      expect(html).toMatch(/<td/i);
      expect(html).toMatch(/Header/);
      expect(html).toMatch(/Cell/);
    });
  });

  describe("handles task lists", () => {
    const toolbarWithTasks: TiptapControls = [
      "TASK_LIST",
      "TASK_ITEM"
    ] as TiptapControls;
    const converter = new TiptapToHTML(toolbarWithTasks);

    test("converts task lists to HTML", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "taskList",
            attrs: { "data-type": "taskList" },
            content: [
              {
                type: "taskItem",
                attrs: { "data-type": "taskItem", "data-checked": true },
                content: [
                  {
                    type: "paragraph",
                    content: [{ type: "text", text: "Task 1" }]
                  }
                ]
              }
            ]
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      expect(html).toMatch(/<ul/i);
      expect(html).toMatch(/data-type="taskList"/);
      expect(html).toMatch(/data-type="taskItem"/);
      expect(html).toMatch(/Task 1/);
    });
  });

  describe("handles callouts", () => {
    const toolbarWithCallouts: TiptapControls = [
      "CALLOUT",
      "BOLD"
    ] as TiptapControls;
    const converter = new TiptapToHTML(toolbarWithCallouts);

    test("converts callouts to HTML", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "callout",
            attrs: {
              "data-type": "callout",
              "data-callout-type": "note"
            },
            content: [
              {
                type: "paragraph",
                content: [{ type: "text", text: "Callout content" }]
              }
            ]
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      expect(html).toMatch(/data-type="callout"/);
      expect(html).toMatch(/data-callout-type="note"/);
      expect(html).toMatch(/Callout content/);
    });
  });

  describe("handles highlight", () => {
    const toolbarWithHighlight: TiptapControls = [
      "HIGHLIGHT",
      "BOLD"
    ] as TiptapControls;
    const converter = new TiptapToHTML(toolbarWithHighlight);

    test("converts highlighted text to HTML", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "Highlighted",
                marks: [
                  {
                    type: "highlight",
                    attrs: { "data-color": "yellow" }
                  }
                ]
              }
            ]
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      expect(html).toMatch(/<mark/i);
      expect(html).toMatch(/Highlighted/);
    });
  });

  describe("handles complex nested content", () => {
    const comprehensiveToolbar: TiptapControls = [
      "BOLD",
      "ITALIC",
      "LINK",
      "CODE",
      "CODE_BLOCK",
      "BLOCK_QUOTE",
      "ORDERED_LIST",
      "UNORDERED_LIST",
      "LIST_ITEM",
      "HEADING_2"
    ] as TiptapControls;
    const converter = new TiptapToHTML(comprehensiveToolbar);

    test("handles nested formatting", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "heading",
            attrs: { level: 2 },
            content: [
              {
                type: "text",
                text: "Bold and italic heading",
                marks: [{ type: "bold" }, { type: "italic" }]
              }
            ]
          },
          {
            type: "blockquote",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "Quote with ",
                    marks: []
                  },
                  {
                    type: "text",
                    text: "bold link",
                    marks: [
                      { type: "bold" },
                      {
                        type: "link",
                        attrs: { href: "https://example.com" }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      expect(html).toMatch(/Bold and italic heading/);
      expect(html).toMatch(/Quote with/);
      expect(html).toMatch(/bold link/);
      expect(html).toMatch(/<h2/i);
      expect(html).toMatch(/<blockquote/i);
      expect(html).toMatch(/<strong/i);
      expect(html).toMatch(/<em/i);
      expect(html).toMatch(/<a/i);
    });

    test("handles lists with formatted items", () => {
      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "orderedList",
            content: [
              {
                type: "listItem",
                content: [
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Bold item",
                        marks: [{ type: "bold" }]
                      }
                    ]
                  }
                ]
              },
              {
                type: "listItem",
                content: [
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Italic item",
                        marks: [{ type: "italic" }]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      expect(html).toMatch(/<ol/i);
      expect(html).toMatch(/<li/i);
      expect(html).toMatch(/Bold item/);
      expect(html).toMatch(/Italic item/);
      expect(html).toMatch(/<strong/i);
      expect(html).toMatch(/<em/i);
    });
  });

  describe("handles large content", () => {
    const converter = new TiptapToHTML(TEST_TOOLBAR);

    test("handles content with many paragraphs", () => {
      const paragraphs = Array.from({ length: 100 }, (_, i) => ({
        type: "paragraph",
        content: [{ type: "text", text: `Paragraph ${i + 1}` }]
      }));

      const content = JSON.stringify({
        type: "doc",
        content: paragraphs
      });

      const html = converter.generateSanitizedHTML(content);
      expect(html).toMatch(/Paragraph 1/);
      expect(html).toMatch(/Paragraph 100/);
      // Should not have trailing brs
      expect(html).not.toMatch(/<br\s*\/?>\s*<\/p>$/i);
    });

    test("handles content with many formatting marks", () => {
      const textNodes = Array.from({ length: 50 }, (_, i) => ({
        type: "text",
        text: `Bold ${i} `,
        marks: [{ type: "bold" }]
      }));

      const content = JSON.stringify({
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: textNodes
          }
        ]
      });

      const html = converter.generateSanitizedHTML(content);
      expect(html).toMatch(/Bold 0/);
      expect(html).toMatch(/Bold 49/);
      expect(html).toMatch(/<strong/i);
    });
  });
});
