// autoComplete.js on typing event emitter

const throttle = (fn, wait) => {
  let inThrottle, lastFn, lastTime;
  return function () {
    const context = this,
      args = arguments;
    if (!inThrottle) {
      fn.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(function () {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};

document.querySelector("#autoComplete").addEventListener(
  "autoComplete",
  throttle((e) => {
    trackSearch(e);
  }, 1500)
);

document
  .querySelector("#autoComplete")
  .addEventListener(
    "click",
    () => (document.querySelector("#autoComplete").value = "")
  );

function trackSearch(e) {
  const query = e.detail && e.detail.query;
  console.log(query);
  if (query && query.length > 2) {
    gtag("event", "search", {
      search_term: query,
    });
  }
}

// let data = null;
const placeholder = "Type brand name to check...";

// The autoComplete.js Engine instance creator
const autoCompletejs = new autoComplete({
  data: {
    src: () => {
      // Loading placeholder text
      document
        .querySelector("#autoComplete")
        .setAttribute("placeholder", "Loading...");
      // Fetch External Data Source
      return fetch("db.json")
        .then((source) => source.json())
        .then((data) => {
          // Post loading placeholder text
          document
            .querySelector("#autoComplete")
            .setAttribute("placeholder", placeholder);
          // Returns Fetched data
          console.log("DB length -", data.length);
          window.data = data;
          if (window.location.search) {
            // If opened with a URL like q=Bajaj
            window.showResultFromQueryParam(window.location);
          }
          return data;
        });
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
    // shareMyQuery(document.querySelector("#autoComplete").value);
  },
  onSelection: (obj) => {
    const selectedObj = obj.selection.value;
    history.pushState(
      selectedObj,
      document.title + " " + selectedObj.name,
      "?q=" + selectedObj.name
    );
    window.onItemSelected(selectedObj);
  },
});

// Toggle results list and other elements
const action = function (action) {
  const resultCard = document.querySelector("#result-div");
  if (action === "dim") {
    resultCard.style.opacity = 1;
  } else {
    resultCard.style.opacity = 0.1;
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
