/// <reference types="vitest/config" />
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import eslint from "vite-plugin-eslint";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ command, mode }) => {
  const isWatchMode = command === "build" && process.env.VITE_WATCH === "true";
  const isDev = mode === "development" || isWatchMode;
  const isCI = process.env.CI === "true" || process.env.GITHUB_ACTIONS === "true";

  return {
    plugins: [
      tailwindcss(),
      react(),
      viteTsconfigPaths(),
      /**
       * Disable ESLint in watch mode for faster builds
       */
      !isWatchMode &&
      eslint({
        failOnError: true,
        failOnWarning: true,
        include: ["src/**/*.ts", "src/**/*.tsx"]
      }),
      dts({
        insertTypesEntry: true,
        /**
         * Disable rollupTypes in CI environments to avoid API Extractor issues
         * but keep it enabled for local development builds
         */
        rollupTypes: !isCI && !isWatchMode
      })
    ].filter(Boolean),

    optimizeDeps: isWatchMode ? {
      include: [
        "react",
        "react-dom",
        "react-router-dom",
        "classnames",
        "@tiptap/react",
        "@tiptap/core"
      ],
      force: false
    } : undefined,

    build: {
      minify: isWatchMode ? false : "terser",
      sourcemap: isDev ? true : false,
      watch: isWatchMode
        ? {
          // Exclude unnecessary files from watching
          exclude: [
            "node_modules/**",
            "dist/**",
            "test/**",
            "**/*.test.*",
            "**/*.stories.*"
          ],
          include: ["src/**/*"], // Optimize file watching
          clearScreen: false // Reduce watch overhead
        }
        : null,

      lib: {
        entry: "src/index.ts",
        name: "Yail",
        formats: ["es"],
        fileName: format => `yail.${format}.js`
      },

      rollupOptions: {
        external: ["react", "react-dom", "react-router-dom"],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "react-router-dom": "ReactRouterDOM"
          },
          // Optimize chunk splitting for faster rebuilds
          manualChunks: !isWatchMode
            ? undefined
            : () => {
              // Keep everything in main chunk for faster watch builds
              return "index";
            }
        },
        treeshake: isWatchMode ? false : true, // Speed up builds by reducing bundle analysis
        cache: true // Cache directory for faster subsequent builds
      }
    },

    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./test/setup.js",
      css: true
    }
  };
});
