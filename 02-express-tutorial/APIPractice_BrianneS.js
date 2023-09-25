try {
    const express = require("express");
    const path = require("path");
    const app = express();
    const menu = require("./menu").menu;

    app.get("/", (req, res) => {
        res.json(menu);
    })
    app.get("/items/:idNumber", (req, res) => {
        let {idNumber} = req.params;
        menu.forEach((item) => {
            if(item.id == idNumber){
                res.json(item);
            }
        })
        res.send("ID does not exist");
    });
    app.get("/query", (req, res) => {
        let {category} = req.query;
        if(category == "all"){
            res.json(menu);
        }
        let sorted = menu.filter((item) => {
            if(item.category == category){
                return item;
            }
        })
        if(sorted[0] != undefined) {
            res.json(sorted);
        } else {
            res.send("Category does not exist");
        }
    })
    app.get("/ascPrice", (req, res) => {
        let sorted = [];
        menu.forEach((item) => {
            let price = item.price;
            if(sorted[0] == undefined) {
                sorted.push(item);
            } else if(price < sorted[0].price) {
                sorted.unshift(item);
            } else {
                let added = false;
                for(let i = 0; i < sorted.length; i++){
                    if(sorted.length - 1 != i){
                        if(price >= sorted[i].price && price <= sorted[i + 1].price && added == false){
                            sorted.splice(i + 1, 0, item);
                            added = true;
                        }
                    } else {
                        if(price >= sorted[i].price && added == false){
                            sorted.splice(i + 1, 0, item);
                            added = true;
                        }
                    }
                }
            }
        })
        res.json(sorted);
    })
    app.get("/decPrice", (req, res) => {
        let sorted = [];
        menu.forEach((item) => {
            let price = item.price;
            if(sorted[0] == undefined) {
                sorted.push(item);
            } else if(price > sorted[0].price) {
                sorted.unshift(item);
            } else {
                let added = false;
                for(let i = 0; i < sorted.length; i++){
                    if(sorted.length - 1 != i){
                        if(price <= sorted[i].price && price >= sorted[i + 1].price && added == false){
                            sorted.splice(i + 1, 0, item);
                            added = true;
                        }
                    } else {
                        if(price <= sorted[i].price && added == false){
                            sorted.splice(i + 1, 0, item);
                            added = true;
                        }
                    }
                }
            }
        })
        res.json(sorted);
    })
    app.all("*", (req, res) => {
        res.send("404 no");
    })
    app.listen(5000, () => {
        console.log("Listening on port 5000");
    })
} catch(err){
    console.log(err);
}