import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      // Generates .d.ts files for your TypeScript library
      insertTypesEntry: true, // This adds an entry for the .d.ts files in your dist
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'MyReactLibrary',
      formats: ['es', 'umd'], // Specify your desired output formats here
      fileName: format => `my-react-library.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
