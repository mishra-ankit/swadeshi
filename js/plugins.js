// autoComplete.js on typing event emitter
document
  .querySelector("#autoComplete")
  .addEventListener("autoComplete", (event) => {
    console.log(event);
  });

// let data = null;
const placeholder = "Type product or brand name to check...";

// The autoComplete.js Engine instance creator
const autoCompletejs = new autoComplete({
  data: {
    src: async () => {
      // Loading placeholder text
      document
        .querySelector("#autoComplete")
        .setAttribute("placeholder", "Loading...");
      // Fetch External Data Source
      const source = await fetch("db.json");
      const data = await source.json();
      // Post loading placeholder text
      document
        .querySelector("#autoComplete")
        .setAttribute("placeholder", placeholder);
      // Returns Fetched data
      return data;
    },
    key: ["name", "company"],
    cache: true,
  },
  sort: (a, b) => {
    if (a.match < b.match) return -1;
    if (a.match > b.match) return 1;
    return 0;
  },
  placeHolder: placeholder,
  selector: "#autoComplete",
  threshold: 1,
  debounce: 100,
  searchEngine: "loose",
  highlight: true,
  maxResults: 10,
  resultsList: {
    render: true,
    container: (source) => {
      source.setAttribute("id", "autoComplete_list");
    },
    destination: document.querySelector("#autoComplete"),
    position: "afterend",
    element: "ul",
  },
  resultItem: {
    content: (data, source) => {
      source.innerHTML = data.match;
    },
    element: "li",
  },
  noResults: () => {
    const result = document.createElement("li");
    result.setAttribute("class", "no_result");
    result.setAttribute("tabindex", "1");
    result.innerHTML = "No Results";
    document.querySelector("#autoComplete_list").appendChild(result);
  },
  onSelection: onItemSelected,
});

// Toggle results list and other elements
const action = function (action) {
  const title = document.querySelector(".header");
  const selection = document.querySelector(".selection");
  const footer = document.querySelector(".footer");

  if (action === "dim") {
    title.style.opacity = 1;
    selection.style.opacity = 1;
    footer.style.opacity = 1;
  } else {
    title.style.opacity = 0.3;
    selection.style.opacity = 0.1;
    footer.style.opacity = 0.1;
  }
};

// Toggle event for search input
// showing & hidding results list onfocus / blur
["focus", "blur"].forEach(function (eventType) {
  const resultsList = document.querySelector("#autoComplete_list");

  document
    .querySelector("#autoComplete")
    .addEventListener(eventType, function () {
      // Hide results list & show other elements
      if (eventType === "blur") {
        action("dim");
        resultsList.style.display = "none";
      } else if (eventType === "focus") {
        // Show results list & hide other elements
        action("light");
        resultsList.style.display = "block";
      }
    });
});
