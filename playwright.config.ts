import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  
  // 通知の設定
  reporter: [
    ['line'], // コンソールに結果を表示
    [
      'playwright-slack-report',
      {
        slackWebHookUrl: `https://hooks.slack.com/services/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64`,
        sendResults: 'always', // 成功しても失敗しても通知する
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
});