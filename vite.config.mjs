import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    viteTsconfigPaths(),
    dts({
      insertTypesEntry: true,
      include: ["src/**/*"],
      exclude: ["src/**/*.stories.*", "src/**/*.test.*"],
      tsconfigPath: "./tsconfig.build.json"
    })
  ],

  build: {
    outDir: "dist",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "Yail",
      formats: ["es"],
      fileName: format => `yail.${format}.js`
    },

    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react-router-dom",
        "classnames",
        "@tiptap/react",
        "@tiptap/core",
        "@tiptap/extension-blockquote",
        "@tiptap/extension-bold",
        "@tiptap/extension-bullet-list",
        "@tiptap/extension-code",
        "@tiptap/extension-code-block",
        "@tiptap/extension-color",
        "@tiptap/extension-document",
        "@tiptap/extension-dropcursor",
        "@tiptap/extension-hard-break",
        "@tiptap/extension-heading",
        "@tiptap/extension-history",
        "@tiptap/extension-image",
        "@tiptap/extension-italic",
        "@tiptap/extension-link",
        "@tiptap/extension-list-item",
        "@tiptap/extension-mention",
        "@tiptap/extension-ordered-list",
        "@tiptap/extension-paragraph",
        "@tiptap/extension-placeholder",
        "@tiptap/extension-strike",
        "@tiptap/extension-text",
        "@tiptap/extension-text-style",
        "@tiptap/extension-youtube",
        "@tiptap/suggestion",
        "prosemirror-model",
        "prosemirror-state",
        "fuse.js",
        "react-colorful",
        "react-copy-to-clipboard",
        "react-datepicker",
        "react-image-crop",
        "react-select",
        "react-select-async-paginate",
        "react-step-wizard",
        "react-tabs",
        "react-tooltip",
        "sanitize-html",
        "tippy.js",
        "boring-avatars",
        "@popperjs/core",
        "@programmer_network/ajv"
      ]
    }
  }
});
