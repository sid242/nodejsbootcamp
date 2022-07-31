const express = require("express");

const app = express();
const port = 3000;

app.get("", (req, res) =>{
    // res.write("<h1>Welcome to home page</h1>");
    // res.write("<h1>Welcome to home page again!</h1>");
    // res.send();
    res.send("<h1>Welcome to home page</h1>");
});
app.get("/about", (req, res) =>{
    res.status(200).send("This is about us page");
});
app.get("/contact", (req, res) =>{
    res.write("<h1>This is contact us page</h1>");
    res.write("<h3>How can we help you?</h3>");
    res.send();
});
app.get("/services", (req, res) =>{
    res.send({
        service1:"programming",
        service2:"web developing",
        service3:3
    });
});
app.get("/api", (req, res) =>{
    res.json([{
        service1:"programming",
        service2:"web developing",
        service3:3
    },
    {
        service1:"programming",
        service2:"web developing",
        service3:3
    },{
        service1:"programming",
        service2:"web developing",
        service3:3
    }]);
});

app.listen(port, () => {
    console.log(`listening the port at ${port}`);
})