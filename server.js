const express=require('express')
const mongoose=require('mongoose')
require("dotenv").config()
// const cors=require("cors ")
const app=express();
const mongodb="mongodb+srv://Todolist:<todolist>@cluster0.pscctqw.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongodb)
.then(()=>console.log("Mongodb connnected"))
.catch((err)=>console.log(err))
app.use(express.json())
app.listen(5000,()=>{
    console.log('app listening on 5000')
});