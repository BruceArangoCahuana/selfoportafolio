const express = require("express");
const userController = require("../../Controller/userController");
const routes = express.Router();

module.exports = function(){
    routes.post("/create",userController.createUser);
    routes.get("/list",userController.getUser);
    routes.get("/list/:id",userController.getByIdUser);
    routes.put("/update/:id",userController.updateUser);
    return routes
}