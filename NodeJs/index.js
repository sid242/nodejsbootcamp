const fs = require("fs");

// fs.writeFileSync("text.txt","I am Siddharth");
// fs.appendFileSync("text.txt"," I'm learning nodeJs");

// const read = fs.readFileSync("text.txt")
// const original = read.toString();
// console.log(read);
// console.log(original);

// const read = fs.readFileSync("text.txt","utf8");
// console.log(read);

// fs.renameSync("text.txt","myText.txt");

// fs.rmSync("myText.txt");

// fs.mkdirSync("files")
// fs.rmdirSync("files")

// fs.writeFile("test.txt", "hello world!",(err)=>{
//     console.log("done");
//     console.log(err);
// });

// fs.appendFile("test.txt"," Good Morning!",(err)=>{
//     console.log("done");
//     console.log(err);
// });

// fs.readFile("test.txt", "utf8",(err,data)=>{
//     console.log(data);
//     console.log(err);
// });

// fs.rename("test.txt","myTest.txt",(err)=>{
//     console.log("success");
// });

// fs.rm("myTest.txt",()=>{
//     console.log("deleted");
// })

// fs.writeFile("test2.txt", "delete using unlink method!",(err)=>{
//     console.log("done");
//     console.log(err);
// });

fs.unlink("test2.txt",()=>{})