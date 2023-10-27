const express = require("express")
const router = require("./Routes");
require("dotenv").config({path:".env"})


const app = express()
app.use("/",router())
const port = process.env.PORT
app.listen(port,() =>{
    console.log("localhost:"+port)
})


