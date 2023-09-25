let fs = require("fs");
let path = require("path");
let folder = "./Siemsen";
let template = "user";
let files = fs.readdirSync(path.join(__dirname, folder));
console.log(files);
files = files.map((item) => {
    return item.split(".");
})
for(let i = 0; i < files.length; i++) {
    fs.renameSync(path.join(__dirname, folder, `${files[i][0]}.${files[i][1]}`), path.join(__dirname, folder, `${template}${i+1}.${files[i][1]}`))
}
console.log(fs.readdirSync(path.join(__dirname, folder)));