const express = require("express");
require("dotenv").config();
require("./db/connect");
const app = express();
const people = require("./routes/people-controller");
const auth = require("./routes/auth");
const connectDB = require("./db/connect");

//Static assets
app.use(express.static("./public"));
//Parse Form and JSON Data
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//Routes/Router
app.use("/api/people", people);
app.use("/login", auth);

const initServer = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(5000, () => {
            console.log("Listening on port 5000");
        })
    } catch(err) {
        console.log(err);
    }
}
initServer();