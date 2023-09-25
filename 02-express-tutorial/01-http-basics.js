const http = require("http");
const path = require("path");

const server = http.createServer((req, res) => {
    console.log(req.method);
    const url = req.url;
    //home page
    if(url == "/"){
        res.writeHead(200, {"content-type": "text/html"})
        res.write("<h1>Home Page</h1>");
        res.end();
    }
    //about page
    else if(url == "./about"){
        res.writeHead(200, {"content-page": "text/html"});
        res.write("<h1>About Page,</h1>");
        res.end();
    }
    //404
    else {
        res.writeHead(200, {"content-page": "text/html"});
        res.write("<h1>No</h1>");
        res.end();
    }
});
server.listen(6000);
//this doesn't work