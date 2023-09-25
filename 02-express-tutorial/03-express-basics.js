const express = require("express");
const app = express();

app.get("/", (req, res) => {
    console.log("User hit resource");
    res.status(200).send("Home page found");
})
app.get("/about", (req, res) => {
    res.status(200).send("About page found");
})
app.all("*", (req, res) => {
    res.status(404).send("<h1>Resource not found</h1>");
})
app.listen(5000, () => {
    console.log("Listening on http://localhost:5000")
})

//all the app functions
//app.get
//app.post
//app.put
//app.delete
//app.patch
//app.all
//app.use
//app.listen
//the bottom three are not response functions, they tell the express to run differently