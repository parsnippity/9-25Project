//HTTP App Template
const http = require("http");
const path = require("path");
const {readFileSync} = require("fs");

//get All files
const homePage = readFileSync(path.join(__dirname, "/public/index.html"));
const homeStyles = readFileSync(path.join(__dirname, "/public/styles/css/styles.css"));
const homeImage = readFileSync(path.join(__dirname, "/public/images/myfavicon.png"));
const homeLogic = readFileSync(path.join(__dirname, "/public/index.js"));

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(url);
    //homepage
    if(url == "/"){
        res.writeHead(200, {"content-type": "text/html"});
        res.write(homePage);
        res.end();
    }
    //about page
    else if(url == "/about"){
        res.writeHead(200, {"content-type": "text/html"});
        res.write("<h1>About</h1>");
        res.end();
    }
    //stylesheet
    else if(url == "/styles.css"){
        res.writeHead(200, {"content-type": "text/css"});
        res.write(homeStyles);
        res.end();
    }
    //logo
    else if(url == "/myfavicon.png"){
        res.writeHead(200, {"content-type": "image/png"});
        res.write(homeImage);
        res.end();
    }
    //logic
    else if(url == "/index.js"){
        res.writeHead(200, {"content-type": "text/javascript"});
        res.write(homeLogic);
        res.end();
    }
    //404
    else {
        res.writeHead(404, {"content-type": "text/html"});
        res.write("<h1>404 page not found</h1>");
        res.end();
    }
})
//this server never listens