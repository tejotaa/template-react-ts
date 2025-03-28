import { defineConfig } from 'cypress';
import * as dotenv from 'dotenv';

export default defineConfig({
  chromeWebSecurity: false,
  retries: {
    // Configure retry attempts for `cypress run`
    runMode: 3,
    // Configure retry attempts for `cypress open`
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      config.env = {
        ...config.env,
        ...process.env,
      };
      return config;
    },
    baseUrl: 'http://localhost:5173/',
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
  },
});
