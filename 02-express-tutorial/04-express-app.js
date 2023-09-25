const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "./public")));
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./public/index.html"));
})
app.get("/resume", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./public/resume.html"));
})
app.all("*", (req, res) => {
    res.status(404).send("resource not found");
})
app.listen(5000, () => {
    console.log("server is listening on port 5000")
})