const fs = require("fs");
const path = require("path");
fs.writeFileSync(path.join(__dirname, "/name.txt"), "This is new test file for today", function(err) {
    if(err){
        console.log(error);
        return;
    }
});

fs.appendFileSync(path.join(__dirname, "name.txt"), "My name is Bree", function(err){
    if(err){
        console.log(err);
        return;
    }
})

fs.unlink(path.join(__dirname, "name.txt"), function(err){
    if(err){
        console.log(err);
        return;
    }
})

fs.mkdirSync(path.join(__dirname, "/Siemsen"));