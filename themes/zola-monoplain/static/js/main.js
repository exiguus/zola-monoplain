/**
 * Lazy append the SVG sprite to the DOM
 * Only append the symbols that are used in the DOM
 * @returns {Promise < void>}
 */
const appendSVGSprite = async () => {
  const usedSVGs = Array.from(document.querySelectorAll("use")).map(
    (node) => node.href.baseVal,
  );

  if (usedSVGs.length === 0) {
    return;
  }

  const baseUrl = document.querySelector("body").dataset.baseUrl || "";
  const tablerSVGSprite = await fetch(
    `${baseUrl}/images/tabler-sprite.svg`,
  ).then((response) => (response.ok ? response.text() : null));

  if (!tablerSVGSprite) {
    console.warn("SVG sprite not found");
    return;
  }

  const svgSprite = document.createElement("div");
  svgSprite.setAttribute("id", "svg-sprite");
  svgSprite.setAttribute("aria-hidden", "true");
  svgSprite.setAttribute(
    "style",
    "position: absolute; width: 0; height: 0; overflow: hidden;",
  );
  svgSprite.innerHTML = tablerSVGSprite;

  // only define the symbols we need
  const symbols = Array.from(svgSprite.querySelectorAll("symbol") || []).filter(
    (symbol) => usedSVGs.includes(`#${symbol.id}`),
  );
  if (symbols.length > 0) {
    const defs = svgSprite.querySelector("defs");
    if (defs) {
      defs.innerHTML = symbols.map((symbol) => symbol.outerHTML).join("");
    } else {
      console.warn("SVG sprite defs not found");
    }
    document.body.appendChild(svgSprite);
  } else {
    console.warn("SVG sprite defined symbols not found");
  }
};

/**
 * de-obfuscate email address
 *  Obfuscate email address look like this: &#x3C;me&#x40;example&#8203;&#x2E;com&#x3E;
 * @param {string} email - obfuscated email address
 * @returns {string} - de-obfuscated email address
 **/
const deobfuscateEmail = (email) =>
  email
    .replace(/&#8203;/g, "")
    .replace(/&#x3C;/g, "<")
    .replace(/&#x40;/g, "@")
    .replace(/&#x2E;/g, ".")
    .replace(/&#x3E;/g, ">");

/**
 * Ensure markdown task-list checkboxes have accessible names.
 */
const labelTaskListCheckboxes = () => {
  const taskCheckboxes = document.querySelectorAll("input[type='checkbox']");

  Array.from(taskCheckboxes).forEach((checkbox) => {
    if (
      checkbox.parentElement?.querySelector("label[for='" + checkbox.id + "']")
    ) {
      // checkbox already has a label
      return;
    }
    if (!checkbox.id) {
      // add an id to the checkbox if it doesn't have one
      checkbox.id = `task-checkbox-${Math.random().toString(36).substr(2, 9)}`;
    }
    if (!checkbox.name) {
      // add a name to the checkbox if it doesn't have one
      checkbox.setAttribute("name", checkbox.id);
    }
    // add a hidden label before the checkbox
    const label = document.createElement("label");

    label.setAttribute("for", checkbox.id);
    label.setAttribute("class", "sr-only");
    label.textContent = "Task item";
    checkbox.parentElement?.insertBefore(label, checkbox);
  });
};

/**
 * Make preformatted content keyboard reachable.
 */
const makeScrollableRegionsFocusable = () => {
  const scrollableRegions = document.querySelectorAll("pre");

  Array.from(scrollableRegions).forEach((region) => {
    if (region.hasAttribute("tabindex")) {
      return;
    }

    region.setAttribute("tabindex", "0");
  });
};
// <script>
// This script should be added to the html head with attribute:
//  defer="defer"
// to make sure it is executed after the DOM is loaded.
// And the attribute:
//  fetchpriority="low"
// to make sure it is executed after the main scripts.
window.addEventListener("load", function () {
  appendSVGSprite();
  labelTaskListCheckboxes();
  makeScrollableRegionsFocusable();
  const emailElements = document.querySelectorAll("a[data-obfuscated-email]");
  Array.from(emailElements).forEach((emailElement) => {
    emailElement.addEventListener("click", function (event) {
      const email = deobfuscateEmail(event.target.dataset.obfuscatedEmail);
      event.target.href = `mailto:${email}`;
    });
  });
});
