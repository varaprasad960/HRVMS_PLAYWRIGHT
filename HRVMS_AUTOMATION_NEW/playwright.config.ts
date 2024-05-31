import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";
import * as path from "path";

const today = new Date();

const resultDir = path.join(
  "Automation_Reports_" +
    String(today.getMonth() + 1).padStart(2, "0") +
    "_" +
    String(today.getDate()).padStart(2, "0") +
    "_" +
    today.getHours() +
    "_" +
    today.getMinutes() +
    "_" +
    today.getSeconds()

);

const config: PlaywrightTestConfig = {
  workers: 1,
  testDir: "./e2e/",
  timeout: 1000 * 1000,
  expect: {
    timeout: 5000,
  },
  use: {
    // viewport : { width: 1920, height: 1080 },
    viewport: null,
    headless: !true,
    baseURL: "",
    screenshot: "on",
    video: "on",
    channel: "chrome",
    launchOptions: { args: ["--start-maximized"],slowMo:1000},
    actionTimeout: 10000,
    //trace: 'on-first-retry',
  }, //Utilities\globalSetup.ts
  globalSetup: "Utilities/globalSetup.ts",
  testMatch: ["Login.spec.ts"],
  reporter:[
    ["line"],["allure-playwright"],
    ],
  retries: 0,
  // reporter: [
  //   ["html", { outputFolder: `./reports/${resultDir}`, open: "never" }],
  // ],
};

export default config;
