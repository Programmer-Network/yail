/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    dts({
      insertTypesEntry: true
    })
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "Yail",
      formats: ["es", "umd"],
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
