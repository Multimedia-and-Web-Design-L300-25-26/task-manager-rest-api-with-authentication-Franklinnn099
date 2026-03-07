export default {
  testEnvironment: "node",
  setupFiles: ["./tests/setup.js"],
  setupFilesAfterEnv: ["./tests/teardown.js"],
  globalSetup: "./tests/globalSetup.js",
  globalTeardown: "./tests/globalTeardown.js",
};