import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'build/',
        'out/',
        '**/*.config.*',
        '**/types/**',
        '**/*.d.ts',
        '**/*.test.*',
        '**/*.spec.*',
        'vitest.setup.ts',
      ],
      include: [
        'shared/**/*.{ts,tsx}',
        'entities/**/*.{ts,tsx}',
        'features/**/*.{ts,tsx}',
        'widgets/**/*.{ts,tsx}',
      ],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './'),
      '@/shared': resolve(__dirname, './shared'),
      '@/entities': resolve(__dirname, './entities'),
      '@/features': resolve(__dirname, './features'),
      '@/widgets': resolve(__dirname, './widgets'),
    },
  },
});

