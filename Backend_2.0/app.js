const express=require('express');
const dotenv=require('dotenv')
const mongoose=require('mongoose');
const app=express();
dotenv.config({path:"./config.env"})
require("./db/conn");
// const User=require("./model/userSchema");
app.use(express.json());
app.use(require('./router/auth'));
const PORT=process.env.PORT;

app.get('/about',(req,res)=>{
    res.send("hello About is server");
});
app.get('/contact',(req,res)=>{
    res.send("hello contact is server");
});
app.get('/signin',(req,res)=>{
    res.send("hello signin is server");
});
app.get('/signup',(req,res)=>{
    res.send("hello signup is server");
});
app.listen(PORT,()=>{
    console.log(`server is running at port no ${PORT}`);
})