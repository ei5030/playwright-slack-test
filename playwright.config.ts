import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  
 reporter: [
    ['line'],
    [
      'playwright-slack-report',
      {
        slackWebHookUrl: 'https://hooks.slack.com/services/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',
        sendResults: 'always',
      },
    ],
  ],

  use: {
    launchOptions: {
      slowMo: 500,
    },
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});// test