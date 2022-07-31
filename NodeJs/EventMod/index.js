const EventEmitter = require("events");

const event = new EventEmitter();

event.on("sayMyName", ()=>{
    console.log("Your name is Siddharth");
});
event.on("sayMyName", ()=>{
    console.log("Your name is Prajapati");
});
event.on("sayMyName", ()=>{
    console.log("Your name is Sachin");
});

// event.emit("sayMyName");

event.on("checkPage",(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
});

event.emit("checkPage", 200, "ok");