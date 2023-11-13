const express = require("express");
const userController = require("../../Controller/skillController");
const routes = express.Router();

module.exports = function(){
    routes.post("/create",userController.createSkill)
    routes.get("/list",userController.getSkill)

    return routes
}