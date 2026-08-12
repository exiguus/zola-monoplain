/**

- de-obfuscate email address
- Obfuscate email address look like this: &#x3C;me&#x40;example&#8203;&#x2E;com&#x3E;
- @param {string} email - obfuscated email address
- @returns {string} - de-obfuscated email address

  **/
const deobfuscateEmail = (email) =>
  email
    .replace(/&#8203;/g, "")
    .replace(/&#x3C;/g, "<")
    .replace(/&#x40;/g, "@")
    .replace(/&#x2E;/g, ".")
    .replace(/&#x3E;/g, ">");

/**

- Ensure markdown task-list checkboxes have accessible names.

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

- Make preformatted content keyboard reachable.

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
// defer="defer"
// to make sure it is executed after the DOM is loaded.
// And the attribute:
// fetchpriority="low"
// to make sure it is executed after the main scripts.
window.addEventListener("load", function () {
  labelTaskListCheckboxes();
  makeScrollableRegionsFocusable();
  const emailElements = document.querySelectorAll("a[data-obfuscated-email]");
  Array.from(emailElements).forEach((emailElement) => {
    emailElement.addEventListener(
      "click",
      function (event) {
        const element = event.target.closest("[data-obfuscated-email]");
        const obfuscatedEmail = element?.dataset.obfuscatedEmail;
        if (!obfuscatedEmail) {
          console.warn("Obfuscated email not found");
          return;
        }
        const email = deobfuscateEmail(obfuscatedEmail);
        element.href = `mailto:${email}`;
      },
      { capture: true },
    );
  });
});
