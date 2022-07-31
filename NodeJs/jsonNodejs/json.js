// convert to json 
// add in another file
// readfile
// again convert back to js obj ori
// console.log

const fs = require("fs");
const student = {
    name : "Siddharth",
    age : 21,
    learning : "nodejs"
};

const jData = JSON.stringify(student);
// console.log(jData);

// fs.writeFile("json1.json", jData, (err)=>{
//     console.log("done");
// });

fs.readFile("json1.json","utf-8",(err,data)=>{
    console.log(data);
    const orgData = JSON.parse(data);
    console.log(orgData);
})