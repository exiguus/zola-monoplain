const { join } = require("path");

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  // Changes the cache location for Puppeteer.
  cacheDirectory: process.env.STORE_PATH
    ? join(process.env.STORE_PATH, "puppeteer")
    : join(__dirname, ".cache", "puppeteer"),
  // browserRevision: '115.0.5763.0',
};
