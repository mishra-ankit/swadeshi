//Run these together to update tags in db.json from https://gist.githubusercontent.com/mishra-ankit/6fb2126e922a1a58014c6bd76b80efa1/raw/90975dd1665844d3e7b4beec30db9c245e5c2fd4/productsDB.js

//1. Create company to tags object
var companyToTags = {}
var jsons = [chineseProducts, indianProducts, otherProducts];
for (var i in jsons) {
    var json = jsons[i];
    for (var prop in json) {
        for (var x in json[prop]) {
            var comp = json[prop][x]["name"];
            console.log(x + " " + comp);
            if (companyToTags[comp]) {
                companyToTags[comp].push(prop);
            } else {
                companyToTags[comp] = [];
                companyToTags[comp].push(prop);
            }
        }
    }
}


//2. update DB.json with tags
//var db = <db.json array>
for (var i in db) {
    var comp = db[i]["name"];
    if (companyToTags[comp]) {
        db[i]["tags"] = companyToTags[comp];
    }
}
copy(db);