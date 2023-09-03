const fs = require("fs");
let text = fs.readFileSync("code.text", "utf-8");
text = text.replace("Hello..", "Ashish");

console.log("Read this code");
console.log(text);

console.log("Creating a new file...");
fs.writeFileSync("code.text", text);