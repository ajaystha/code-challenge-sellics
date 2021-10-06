import path from 'path';
// const path = require('path');

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@redux': path.resolve(__dirname, './src/redux'),
      '@api': path.resolve(__dirname, './src/api'),
      '@shared': path.resolve(__dirname, './src/shared'),
    },
  },
  plugins: [react()],
});
