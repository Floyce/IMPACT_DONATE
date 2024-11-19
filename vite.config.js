import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { AntDesignThemePlugin } from 'vite-plugin-theme';

// Custom theme variables
const themeVariables = {
  'primary-color': '#d4f674', // Replace default blue with your custom color
  'link-color': '#4a90e2',    // Secondary or link color
  'success-color': '#52c41a', // Success messages
  'warning-color': '#faad14', // Warnings
  'error-color': '#f5222d',   // Errors
  'font-size-base': '16px',   // Base font size
  'border-radius-base': '4px',// Border radius
};

export default defineConfig({
  plugins: [
    react(),
    AntDesignThemePlugin({
      resolveSelector: (selector) => selector.startsWith('.ant') && selector,
      vars: themeVariables,
    }),
  ],
});
