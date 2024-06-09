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

// <script>
// This script should be added to the html head with attribute:
//  defer="defer"
// to make sure it is executed after the DOM is loaded.
// And the attribute:
//  fetchpriority="low"
// to make sure it is executed after the main scripts.
window.addEventListener("load", function () {
  appendSVGSprite();
});
