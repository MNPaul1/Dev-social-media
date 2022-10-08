const express = require("express");
const connectDB = require("./config/db");
const app = express()

//connect DB
connectDB();

app.get('/',(req,res)=>{
    res.send("API is working.")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log("app is running at port",PORT)
)