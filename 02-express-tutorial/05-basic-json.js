const express = require("express");
const path = require("path");
const app = express();
const {products} = require("./data");
app.get("/", (req, res) => {
    res.json(products);
}).listen(5000, () => {
    console.log("listening on port 5000")
})