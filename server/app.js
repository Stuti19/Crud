require ("dotenv").config();
const express=require("express");
const app=express();
const mongoose=require("mongoose")
const DB="mongodb+srv://stutib19:<Netflix123>@cluster0.axlfy3g.mongodb.net/mernstack?retryWrites=true&w=majority"
require("./db/conn");
const users=require("./models/userSchema")

const port=8003;

app.listen(port,()=>{
    console.log(`server starts at port ${port}`);
});