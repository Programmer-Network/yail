import { IWritingGuideline } from "./ZenWritingGuide.types";

export const WRITING_GUIDELINES: IWritingGuideline[] = [
  {
    id: "target-scope",
    section: "Target & Scope",
    description:
      "Assume your reader may be new to this domain — avoid jargon and unexplained terminology.",
    example:
      '"A package manager helps you install libraries. We\'ll use npm, which comes with Node.js."'
  },
  {
    id: "title-intro",
    section: "Title & Intro",
    description:
      "Make title outcome-focused; intro must explain problem & why tutorial matters.",
    example:
      "\"By the end, you'll have a Fastify API returning JSON — perfect if you're starting fresh.\""
  },
  {
    id: "preview-result",
    section: "Preview / Result",
    description:
      "Show what the end result looks like early — demo, screenshot, or running output.",
    example: 'Show expected output up-front: {"status":"ok","message":"Hello"}'
  },
  {
    id: "code-cli",
    section: "Code & CLI Practices",
    description:
      "Examples must be copy/pasteable. Use descriptive flags. Avoid interactive prompts.",
    example: "npx create-fastify-app --template basic --package-manager npm"
  },
  {
    id: "example-clarity",
    section: "Clarity of Example Code",
    description:
      "Separate placeholders from logic. Use realistic or clearly example-style values.",
    example: 'databaseUrl: "postgres://user:pass@localhost:5432/myapp"'
  },
  {
    id: "dependencies",
    section: "Dependencies & Setup",
    description:
      "Minimize dependencies; specify versions if needed. Keep environment as simple as possible.",
    example: "npm install fastify@5 and nothing else at start"
  },
  {
    id: "focus",
    section: "Focus & Scope",
    description:
      "One concept per tutorial. If you must use multiple technologies, defer extras to the end or separate guides.",
    example:
      '"This guide covers only creating a server. Auth will be a separate tutorial."'
  },
  {
    id: "structure",
    section: "Structure & Navigation",
    description:
      "Use clear, consistent headings and meaningful section titles.",
    example:
      "Install Fastify → Create server file → Add first route → Start server"
  },
  {
    id: "completeness",
    section: "Completeness & Validation",
    description:
      "Code must compile/run. Show working demos. Link to full code repository.",
    example: "Running server prints: Server listening at http://localhost:3000"
  }
];
