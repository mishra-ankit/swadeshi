Bugs -
- switch to minified build
- dedupe as npm task
- google analytics event, input and share
- make PR necessary for all

Template -
- add lighthouse, pre-commit
    - maybe some can be auto fixed ?
        - preconnect, dns-prefetch
- fix accesibility
- social cards, metadata etc
- Add recaptcha

x- connect to DB
x- add SW

copy(JSON.stringify(localStorage));

javascript:(function(){items = document.getElementsByClassName('p13n-sc-truncated');products = Array.from(items).map((i, index) => ({name : i.textContent, href: items[index].parentNode.href}));localStorage.setItem(location.href, JSON.stringify(products));alert('saved', products.length);})();

Dup finder -
comp = new Set();
products = new Set();
dbg = [];
t = db.map(i=>{
    if (i.type === "COMPANY") {
        if (comp.has(i.name.toLowerCase())) {
            console.error('Duplicate company found - ', i.name);
        } else {
            comp.add(i.name.toLowerCase());
            return i;
        }
    } else {
        if (products.has(i.name.toLowerCase())) {
            console.error('Duplicate product found - ', i.name);
        } else {
            products.add(i.name.toLowerCase());
            return i;
        }
    }
}
).filter(Boolean);

Cleanup :
- Trim
-  \((.*)\)", -> ", "meta" : "$1",

// Github link
// Icon in autosuggestion/result
// Browse all
// Investment
// Footnote/Source/event on not found