const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
    res.send("<h1>Welcome to ddd my balwant youtube channel</h1>")
});

app.get("/about", function(req, res) {
    res.send("I am a web developer")
});

app.get("/contact", function(req, res) {
    res.send("<h1>Shalimar bagh</h1>")
});

app.get("/bmi", function(req, res) {
    //console.log(__dirname);
    res.sendFile(__dirname+ "/bmi.html");
});

app.post("/bmi", function(req, res) {
    let w1 = Number(req.body.weight);
    let h1 = Number(req.body.height);
    let bmi = w1 + h1;
    res.send("The BMI of your body is :"+bmi);
});


    app.listen(9000,  function(req, res) {
     console.log("Port running on 9000 port");
});