/// <reference types="vitest/config" />
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import eslint from "vite-plugin-eslint";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    viteTsconfigPaths(),
    eslint({
      failOnError: true,
      failOnWarning: true,
      include: ["src/**/*.ts", "src/**/*.tsx"]
    }),
    dts({
      insertTypesEntry: true
    })
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "Yail",
      formats: ["es"],
      fileName: format => `yail.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/setup.js",
    css: true
  }
});
