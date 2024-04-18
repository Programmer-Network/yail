import { faker } from "@faker-js/faker";

export function generateParagraph(words = 2) {
  return {
    type: "paragraph",
    content: [
      { type: "text", text: faker.lorem.sentence() },
      {
        type: "text",
        marks: [{ type: "bold" }],
        text: faker.lorem.words(words)
      },
      { type: "text", text: faker.lorem.sentence() },
      {
        type: "text",
        marks: [{ type: "italic" }],
        text: faker.lorem.words(words)
      },
      { type: "text", text: faker.lorem.sentence() }
    ]
  };
}

export function generateHeading(level: number) {
  return {
    type: "heading",
    attrs: { level: level },
    content: [{ type: "text", text: `H${level} ${faker.lorem.words(2)}` }]
  };
}

export function generateBulletList(length = 4) {
  return {
    type: "bulletList",
    content: Array.from({ length }, () => ({
      type: "listItem",
      content: [
        {
          type: "paragraph",
          content: [{ type: "text", text: faker.lorem.words(2) }]
        }
      ]
    }))
  };
}

export function generateOrderedList(length = 4) {
  return {
    type: "orderedList",
    attrs: { start: 1 },
    content: Array.from({ length }, (_, i) => ({
      type: "listItem",
      content: [
        {
          type: "paragraph",
          content: [{ type: "text", text: `number ${i + 1}` }]
        }
      ]
    }))
  };
}

export function generateBlockquote() {
  return {
    type: "blockquote",
    content: [
      {
        type: "paragraph",
        content: [{ type: "text", text: faker.lorem.sentence() }]
      }
    ]
  };
}

export function generateYouTube() {
  return {
    type: "youtube",
    attrs: {
      src: "https://youtu.be/jfxq6-tBUuI",
      start: 0,
      width: 640,
      height: 480
    }
  };
}

const headingWithParagraph = (level: number, words: number) => [
  generateHeading(level),
  generateParagraph(words),
  generateParagraph(words),
  generateParagraph(words),
  generateParagraph(words)
];

export const getDocument = () => {
  return JSON.stringify({
    type: "doc",
    content: [
      ...headingWithParagraph(1, 5),
      ...headingWithParagraph(2, 5),
      ...headingWithParagraph(3, 5),
      ...headingWithParagraph(4, 5),
      ...headingWithParagraph(5, 5),
      ...headingWithParagraph(6, 5),
      generateBulletList(11),
      ...headingWithParagraph(6, 5),
      generateOrderedList(),
      generateBlockquote(),
      generateYouTube()
    ]
  });
};
