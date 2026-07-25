window.searchIndex = {
  fields: ["title", "body"],
  pipeline: ["trimmer", "stopWordFilter", "stemmer"],
  ref: "id",
  version: "0.9.5",
  index: {
    body: { root: { docs: {}, df: 0 } },
    title: { root: { docs: {}, df: 0 } },
  },
  documentStore: {
    save: true,
    docs: {
      "https://exiguus.github.io/zola-monoplain/": {
        body: "",
        id: "https://exiguus.github.io/zola-monoplain/",
        title: "",
      },
    },
    docInfo: {
      "https://exiguus.github.io/zola-monoplain/": { body: 0, title: 0 },
    },
    length: 1,
  },
  lang: "English",
};
