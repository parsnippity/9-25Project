const express = require("express");
const path = require("path");
const app = express();

//setup static middleware
//middleware comes in the middle of the request and response sycle fo the node.js execution. it also provides access to many functions like request and response objects

//Response Object is passed as the second parameter to the requestListener function. The response object represents the writeable stream back to the client
//write() sends text or text stream to the client
//writeHead() sends status and response headers to the client
//end() signals that the server should consider that the response is complete
//getHeader() returns the value of the specified header
//setTimeout sets the timeout value of the socket to the specified value in milliseconds
//statusCode sets the status code that will be sent to the client
/*For the writeHead and statusCode methods, the following are acceptable:
100-199 information response
200-299 successful response
300-399 Redirect Message
400-499 Client error
500-599 server error
You can find the detailed list on mdn in docs/web/http/Status
*/
/*Request Object is made by a client to a named host, which is located on the server. The aim of the reqest is to access resources on the server.
A proper HTTP request contains the following:
A request line
A series of HTTP header(s)
A Message body if needed

Request line has three main aspects:
a method like GET, UPDATE, DELETE, etc. tells the server what it should do with the resource
the path component identifies the resource on the server
the HTTP version number showing the specification to which the client has tried to make message comply

HTTP Headers:
HTTP Headers are written on a message to provide the recipient with information about the request, the sender, and the way in which the sender wants to communicate with the server/recipient
EX: {"content-type": "text/html"}
host, user-agent, etc.
*/
app.use(express.static(path.join(__dirname, "/public")));
app.get("/", (req, res) => {
    console.log(req.url);
    res.sendFile(path.resolve(__dirname, "/public/index.html"));
})
app.get("*", (req, res) => {
    res.status(404).send("404 Not Found");
})
app.listen(5000, ()=>{
    console.log("Server is listening on port 5000");
});