const express = require("express");
const userController = require("../../Controller/userController");
const routes = express.Router();

module.exports = function(){
    routes.post("/create",userController.createUser);
    routes.get("/list",userController.getUser);
    routes.get("/list/:id",userController.getByIdUser);

    return routes
}