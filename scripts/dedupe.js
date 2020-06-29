const fs = require("fs");
const db = JSON.parse(fs.readFileSync("db.json", "utf-8"));

comp = new Set();
const filtered = db
  .map((i) => {
    if (i.type.toLowerCase() === "company" || i.type.toLowerCase() === "app") {
      if (comp.has(i.name.toLowerCase())) {
        console.error("Duplicate company found - ", i.name);
      } else {
        comp.add(i.name.toLowerCase());
        return i;
      }
    } else {
      return i;
    }
  })
  .filter(Boolean);

console.log("Removed :", db.length - filtered.length);

fs.writeFile("db.json", JSON.stringify(filtered,null, 2), (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Total entries:", filtered.length);
  console.log("File has been updated");
});
