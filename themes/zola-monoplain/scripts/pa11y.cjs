const pa11y = require("pa11y");
const {
  config,
  testPaths,
  reportPath,
  defaultUrl,
} = require("../pa11y.config.cjs");

// pa11y is a wrapper around axe-core and htmlcs
// axe-core is a JavaScript library that checks for accessibility issues in your web pages
// htmlcs is a HTML Code Sniffer for testing the accessibility of HTML source code

// Run the script with the following command
// node scripts/pa11y.cjs https://example.com

// get url from the command line
let url = process.argv[2] || defaultUrl;

// validate the URL
if (url === defaultUrl) {
  console.info(`No URL provided, using default: ${defaultUrl}`);
}
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
    return run(`${url}${path}`);
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
    const result = await Promise.race([
      pa11y(url, config),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), 30000),
      ), // 30 seconds timeout
    ]);
    console.info(`End test ${url}`);
    results.push(result);
    return result; // Ensure this resolves
  } catch (error) {
    console.error(`Error occurred while testing ${url}: ${error.message}`);
    return Promise.reject(error); // Explicitly reject the promise on error
  }
}
