const fs = require("fs");
const shelljs = require("shelljs");

const result  = shelljs.ls("./public/node_modules/prismjs/themes");
console.log(result);
fs.copyFileSync("./404.html", "./public/404.html");