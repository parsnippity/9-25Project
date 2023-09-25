const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
let { people } = require("./data");

//static assets
app.use(express.static("./public"));

/*
Parse form data
built in middleware function in express that parses incoming requests. if you check req.body without it, then you will see that the value is undefined*/
app.use(express.urlencoded({extended:false}));

//parse form data this works similarly to the url encoded but handles the json
app.use(express.json())

app.get("/api/people", (req, res) => {
    res.json({success:true, data:people})
})

app.post("/api/people", (req, res) => {
    console.log(req.body);
    const {name} = req.body;
    //If the new person has a name
    if(name){
        return res.status(201).json({success:true, person:name})
    }
    //if the new person does not have a name
    res.status(404).json({success:false, msg:"Please provide a name"})
})

//above is for javascript.html
//below is for index.html

app.post("/login", (req, res) => {
    console.log(req.body);
    const {name} = req.body;
    if(name){
        return res.status(200).json({status: 200, data: name})
    }
    res.send("Please provide credentials")
})

/*Part 1: Above
The above part brings in the public folder from before and then handles the index and javascript versions. I placed the JS for the form in a separate js file in the public folder so we can see that load alongside the html. the /api/people can be tested by going to the url and, but the use is in the script.js, where we call the data with async await.
The get for the /api/people is for our testing, but then the post will be for the request from the script.js
*/

//Testing Postman:
app.post("/api/postman/people", (req, res) => {
    const {name} = req.body;
    if(!name) {
        return res.status(400).json({data: [], success: false, msg: "Please enter a name"})
    }
    let nameObject = {
        "id": people[people.length - 1].id + 1,
        "name": name
    }
    res.status(201).json({success: true, data: [...people, nameObject]})
})

//Put request
app.put("/api/postman/:id", (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    const person = people.find((person) => {
        return person.id === Number(id);
    })
    if(!person) {
        return res.json({success: false, data: []});
    }
    const newPeople = people.map((person) => {
        if(person.id === Number(id)) {
            person.name = name;
        }
        return person;
    })
    res.status(202).json({data: newPeople, success: true});
})

//Delete request
app.delete("/api/people/:id", (req, res) => {
    const {id} = req.params;
    const person = people.find((person) => {
        return person.id === Number(id);
    })
    if(!person){
        res.status(404).json({success: false, msg: "No matching id found"})
    }
    people = people.filter((person) => {
        return person.id != Number(id);
    })
    res.status(202).json({data: people, success: true});
})

//Server listen
app.listen(5000, () => {
    console.log("Listening on port 5000");
})