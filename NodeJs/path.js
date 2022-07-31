const path = require("path");

console.log(path.dirname("C:/Users/91951/Desktop/nodejs bootcamp/path.js"));
console.log(path.extname("C:/Users/91951/Desktop/nodejs bootcamp/path.js"));
console.log(path.basename("C:/Users/91951/Desktop/nodejs bootcamp/path.js"));

console.log(path.parse("C:/Users/91951/Desktop/nodejs bootcamp/path.js"));

const myPath = path.parse("C:/Users/91951/Desktop/nodejs bootcamp/path.js")
console.log(myPath.name);
console.log(myPath.root);
console.log(myPath.dir);