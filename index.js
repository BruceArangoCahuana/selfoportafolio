const express = require("express")
const router = require("./Router");
const routerUser = require("./Router/User");
const conexion = require("./Database/conexion")
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv").config({path:".env"})

require("./Entity/Usuario")
require("./Entity/Icon")
require("./Entity/General")
require("./Entity/Study")
require("./Entity/Experiencie")
require("./Entity/Proyectos")
require("./Entity/Information")
require("./Entity/Lenguaje")
require("./Entity/Skill")
require("./Entity/Socialnetwork")
require("./Entity/Subgeneral")
conexion.sync()
    .then(() => console.log("conexion  establecida"))
    .catch(e => console.log(e.message))

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use("/",router())
app.use("/user",routerUser())

app.listen(process.env.PORT,() =>{
    console.log("localhost:"+process.env.PORT)
})


