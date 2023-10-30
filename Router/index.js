const express = require("express");
const routes = express.Router();
const home =  require("./../Controller/index")
module.exports = function(){
    routes.get("/",home.getStart);
    
    return routes
}