const db = require("../db.json");
const fs = require("fs");
const fetch = require("node-fetch");

// Logo fetch script -
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

let randomDelay = () =>
  new Promise((resolve) => setTimeout(resolve, getRandomArbitrary(200, 500)));

let getLogo = async (i) => {
  if (i.value) return i;

  await randomDelay();
  console.log("Fetch -", i.name);
  const resp = await fetch(
    "https://autocomplete.clearbit.com/v1/companies/suggest?query=" +
      encodeURI(i.name),
    {
      referrer: "https://clearbit.com/logo",
      referrerPolicy: "unsafe-url",
      body: null,
      method: "GET",
      mode: "cors",
      credentials: "omit",
    }
  ).then((response) => {
    if (response.status !== 200) {
      throw new Error(
        "Request failed - " + i.name + " Status" + response.status
      );
    }
    return response.json();
  });
  const match = resp.find(
    (resp) => resp.name.toLowerCase() === i.name.toLowerCase()
  );
  if (match) {
    i.value = match;
  } else {
    console.log("No MATCH :", i.name);
  }
  return i;
};
let results = [];

let asyncFunc = async () => {
  for (let item of db) {
    let result = Object.assign({},item);
    if (!result.value) {
      try {
        result = await getLogo(result);
      } catch (e) {
        console.error(e);
      }
    } else {
      console.log("Skip -", result.name);
    }
    results.push(result);
  }
  console.log("All logos fetched");
  // Check if length and order is maintained.
  if (results.length !== db.length || results[0].name !== db[0].name) {
    throw new Error(
      "FAILED : Result and input mismatch, please check the script."
    );
  } else {
    fs.writeFile("db.json", JSON.stringify(results, null, 2), (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("File has been updated");
      const resultLogo = results.filter(logoFilter);
      console.log(
        "New logo added:",
        resultLogo.length - db.filter(logoFilter).length
      );
      console.log("Total logo:", resultLogo.length);
      console.log("Logo missing:", results.length - resultLogo.length);
    });
  }
};

const logoFilter = (i) => i.value;

asyncFunc();
