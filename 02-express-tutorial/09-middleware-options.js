const express = require("express");
const app = express();
const morgan = require("morgan");

// app.use(express.static("./public"));

app.use(morgan("short"));
app.get("/", (req, res) => {
    res.send("Welcome Home!")
})
app.get("/about", (req, res) => {
    res.send("About")
})
app.get("/api/products", (req, res) => {
    res.send("Products")
})
app.get("/api/items", (req, res) => {
    res.send("Items")
})
app.all("*", (req, res) => {
    res.send("No");
})
app.listen(5000, () => {
    console.log("Server is listening on port 5000")
})