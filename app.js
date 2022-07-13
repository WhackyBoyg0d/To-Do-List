const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.set("view engine", "ejs");


app.get("/",function(req, res){
    
    var today = new Date();
    var currentDay = today.getDay();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var day = '';



    if(today.getDay() == 6 || today.getDay == 0) {
        day = days[today.getDay()];
    }
    else{
       day = days[today.getDay()];

    }


    res.render("list", {kindOfDay: day});
});

app.listen(500, function(){
    console.log("Server is running at 500");
});