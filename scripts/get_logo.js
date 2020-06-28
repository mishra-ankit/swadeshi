// Logo fetch script -
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

let randomDelay = () =>
  new Promise((resolve) => setTimeout(resolve, getRandomArbitrary(500, 1000)));

let calc = async (i) => {
  if (i.value) return i;

  await randomDelay();
  console.log("Fetch.", i.name);
  const resp = await fetch(
    "https://autocomplete.clearbit.com/v1/companies/suggest?query=" + i.name,
    {
      referrer: "https://clearbit.com/logo",
      referrerPolicy: "unsafe-url",
      body: null,
      method: "GET",
      mode: "cors",
      credentials: "omit",
    }
  ).then((res) => res.json());
  //console.log(resp);
  const match = resp.find(
    (resp) => resp.name.toLowerCase() === i.name.toLowerCase()
  );
  if (match) {
    //icons.add(match);
    i.value = match;
  } else {
    console.log("No MATCH :", i.name);
  }
  return i;
};
let results = [];

let asyncFunc = async () => {
  // const unresolvedPromises = db.map(i=>calc(i));
  for (let item of db) {
    const result = await calc(item);
    //console.log(result);
    results.push(result);
  }
  //results = await Promise.all(unresolvedPromises);
};
asyncFunc();
