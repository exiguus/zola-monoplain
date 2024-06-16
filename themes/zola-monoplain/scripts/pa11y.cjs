const pa11y = require("pa11y");
// pa11y is a wrapper around axe-core and htmlcs
// axe-core is a JavaScript library that checks for accessibility issues in your web pages
// htmlcs is a HTML Code Sniffer for testing the accessibility of HTML source code

// Run the script with the following command
// node scripts/pa11y.cjs https://example.com

// get url from the command line
const defaultUrl = "public/";
let url = process.argv[2] || defaultUrl;

// validate the URL
if (url === defaultUrl) {
  console.info(`No URL provided, using default: ${defaultUrl}`);
}

// pa11y configuration
// See: https://github.com/pa11y/pa11y?tab=readme-ov-file#configuration
const config = {
  includeNotices: true,
  includeWarnings: true,
  runners: ["axe", "htmlcs"],
  reporter: "json",
  standard: "WCAG2AA",
  viewport: {
    // iPhone SE
    width: 375,
    height: 667,
    isMobile: true,
  },
  ignore: [
    // Ignore Missing form labels because of markdown task lists
    "WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.InputCheckbox.Name",
    "WCAG2AA.Principle1.Guideline1_3.1_3_1.F68",
    "label",
    // Ignore contrast issues because of the code theme and or default browser styles
    "WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail",
    "color-contrast", // axe
    // axe frame-tested - we don't care about external iframes
    "frame-tested",
    // axe aria-prohibited-attr - we like to have more information on parent level
    "aria-prohibited-attr",
    // axe scrollable-region-focusable - we have keyboard access
    "scrollable-region-focusable",
  ],
};

// report path to save the report
const reportPath = "pa11y-report";

// testPaths to test
// Need path + filename + extension to test
const testPaths = [
  "/index.html",
  "/posts/index.html",
  "/gallery/index.html",
  "/tags/index.html",
  "/search/index.html",
  "/posts/ci/index.html",
  "/posts/dictionary/index.html",
  "/posts/icons/index.html",
  "/posts/zola/index.html",
  "/posts/shortcodes/index.html",
  "/posts/emojis/index.html",
  "/posts/markdown/index.html",
];

// remove trailing slash from url
if (url.endsWith("/")) {
  url = url.slice(0, -1);
}
// remove leading slash from url
if (url.startsWith("./")) {
  url = url.slice(2);
}
if (url.startsWith("/")) {
  url = url.slice(1);
}

/**
 * results: [
 *  {
 *   documentTitle: '...',
 *  pageUrl: '...',
 * issues: [
 *   {
 *    code: '...',
 *   type: '...',
 *  typeCode: 1,
 * message: '...',
 * context: '...',
 * selector: '...',
 * runner: '...',
 * runnerExtras: '...',
 * runnerExtrasMessage: '...',
 * runnerExtrasType: '...',
 * runnerExtrasSelector: '...',
 * runnerExtrasContext: '...',
 * ...
 * }
 * ],
 **/
const results = [];

console.log("Start testing...");

Promise.all(
  testPaths.map(async (path) => {
    await run(`${url}${path}`);
  }),
)
  .then(async () => {
    console.log("All tests completed");
    const path = require("path");
    const fs = require("fs");
    const htmlReporter = require("pa11y/lib/reporters/html");

    // remove all files in the report directory
    if (fs.existsSync(reportPath)) fs.rmSync(reportPath, { recursive: true });
    // create report directory
    fs.mkdirSync(reportPath, { recursive: true });

    console.log("Generate reports...");
    await Promise.all(
      results.map(async (result) => {
        const html = await htmlReporter.results(result);
        console.log(result.pageUrl);
        const fileNamePostfix = result.pageUrl
          // remove everything before the url
          .split(url)[1]
          // remove /index.html
          .replace(/\/index.html/gi, "")
          .replace(/[\/]/gi, "-")
          .toLowerCase();
        // write report
        fs.writeFileSync(
          path.resolve(
            reportPath,
            `report${fileNamePostfix === "-" ? "index" : fileNamePostfix}.html`,
          ),
          html,
        );
      }),
    ).then(() => {
      console.log("Reports generated successfully");
    });

    const issuesByPath = results.map((result) => {
      return {
        url: result.pageUrl,
        issues: result.issues,
      };
    });
    if (issuesByPath.length > 0) {
      let errorCount = 0;
      issuesByPath.forEach((path) => {
        const errors = path.issues.filter((issue) => issue.type === "error");
        if (errors.length > 0) {
          errorCount += errors.length;
          console.error(`Issues found in ${path.url}`);
          console.error(
            errors.map((error) => ({
              url: path.url,
              ...error,
            })),
          );
        }
      });
      // exit with error code if there are errors
      if (errorCount > 0) {
        console.error(`${errorCount} tests failed`);
        console.log("End testing...");
        process.exit(1);
        // exit with success code if there are warnings or notices
      } else {
        console.info("All tests passed successfully");
        console.log("End testing...");
        process.exit(0);
      }
    } else {
      console.info("All tests passed successfully");
      console.log("End testing...");
      process.exit(0);
    }
  })
  .catch((error) => {
    console.error(error);
    console.log("End testing...");
    process.exit(1);
  });

// Run the pa11y test
async function run(url) {
  try {
    console.info(`Start test ${url}`);
    const result = await pa11y(url, config);
    console.info(`End test ${url}`);
    results.push(result);
    return result;
  } catch (error) {
    console.error(error.message);
  }
}
