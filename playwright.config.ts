import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 120000,
  workers: 1,
  use: {
    headless: false,
     viewport: null, 
    launchOptions: {
      args: ["--start-maximized"], 
    },
    screenshot: 'on'
  },
  reporter: [['list']]
});