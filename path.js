const  path = require('path');

const  myCurrentPath = __filename;

console.log(path.basename(myCurrentPath));

console.log(__dirname);
console.log(path.extname(myCurrentPath));

let pathObj = {
    dir : "usr/local",
    name:"testFile",
    ext:".js"
}

console.log(path.format(pathObj));
console.log(path.parse(myCurrentPath));
console.log(path.isAbsolute(myCurrentPath));
console.log(path.isAbsolute("./math.js"));
console.log(path.join("usr","local","Ratul","Hello.js"));
console.log(path.resolve(__dirname,"script","test.js"));