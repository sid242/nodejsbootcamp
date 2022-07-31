const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const Register = require('./models/registers');
const {json} = require("express");
const port = process.env.PORT || 3000;
require("./db/conn");
//const register = require("../models/registers.js")
const static_path = path.join(__dirname,"../public")
const template_path = path.join(__dirname,"../templates/views")
const partial_path = path.join(__dirname,"../templates/partials")

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(express.static(static_path))
app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partial_path);

app.get("/",(req,res)=>{
  res.render("index")
});

app.get("/register",(req,res)=>{
  res.render("register");
})

app.get("/login",(req,res)=>{
  res.render("login");
})

app.post("/register",async(req,res)=>{
//  res.render(`register`);
try{
  const password = req.body.password;
  const Cpassword = req.body.conformPassword;

    if(password=== Cpassword){
        const registerEmployee = new Register({
          name:req.body.name,
          email:req.body.email,
          password:req.body.password,
          conformPassword:req.body.conformPassword

        })

       const registered = await registerEmployee.save();
       res.status(201).render("index")

    }else{
      res.send('passwor not matching ')
    }

  
}
catch(err){
  console.log("aaa")
  //res.status(400).send(err)
}
})

app.post("/login",async(req,res)=>{
  try{
      const email = req.body.email;
      const password = req.body.password;

      const useremail = await Register.findOne({email:email});

      if(useremail.password===password){
        res.status(201).render('index');
        console.log("logged in");
      }
      else{
        res.send("invalid login ");
      }

      //res.send(useremail)
      //console.log(`server is running at port no ${password}`)
  }
  catch(error){
    res.status(404).send("invalid login try again");
  }
})

app.listen(port,()=>{
  console.log(`server is running on ${port}`);
})