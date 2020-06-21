const BASE_URL = "http://localhost:3001";

const fetchAPI = (path, method, body) => {
  const subPath = path ? `/${path}` : "";
  return fetch(`${BASE_URL}${subPath}`, {
    method: method || "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
    mode: "cors",
    body: body && JSON.stringify(body),
  }).then(function (response) {
    if (!response.ok) {
      // make the promise be rejected if we didn't get a 2xx response
      throw new Error("Not 2xx response");
    } else {
      return response.json();
    }
  });
};

async function sendFeedback(message) {
  await fetchAPI("feedback", "PUT", { message: message });
}

async function shareQuery(query) {
  const x = await fetchAPI(`query/${query}`, "PUT", {});
  console.log(x);
}
