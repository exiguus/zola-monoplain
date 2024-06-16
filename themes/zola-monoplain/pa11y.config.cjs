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
// report path to save the report
const reportPath = "pa11y-report";
// default url to test
const defaultUrl = "public/";

module.exports = {
  config,
  testPaths,
  reportPath,
  defaultUrl,
};
