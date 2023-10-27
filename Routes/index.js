const express = require("express");
const routes = express.Router();

module.exports = function(){
    routes.get("/",(req,res,next) =>{
        res.send("Server listo")
    });
    
    return routes
}