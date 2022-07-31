const { Router } = require("express");
const express = require("express");
const path = require("path");
const hbs = require("hbs");
const requests = require("requests");

const app = express();

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");


// to set the view engine
app.set("view engine","hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath); 

// built in middleware
app.use(express.static(staticPath));

// template engine route
app.get("", (req,res)=>{
    res.render("index",{
        user:"Siddharth"
    });
});
app.get("/about",(req,res)=>{
    res.render("about")
    
})

app.get("/about/temp",(req,res)=>{
    requests(`http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=dbf2526773844de5794136b199809ddb`
    )
        .on("data", (chunk) => {
            const objdata = JSON.parse(chunk);
            const arrData = [objdata];
            console.log(`city name is ${arrData[0].name} and temp is ${arrData[0].main.temp}`);
            res.write(arrData[0].name);
            // console.log(realTimeData);
        })
        .on("end", (err) => {
            if (err) return console.log("connection loss", err);
            res.end();
        });
    // res.send("<h1>404 error page about page</h1>")
})
app.get("/about/*",(req,res)=>{
    res.send("<h1>404 error page about page</h1>")
})
app.get("*",(req,res)=>{
    res.send("<h1>404 error page</h1>")
})

app.get("", (req, res) =>{
    res.send("Hello World!");
});

app.listen(8000, () => {
    console.log("listening the port at 8000");
});