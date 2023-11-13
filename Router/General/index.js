const express = require("express")
const generalController = require("../../Controller/generalController")
const routes = express.Router();

module.exports = function (){
    routes.post("/create",generalController.createGeneral);
    routes.get("/list",generalController.getGeneral);
    routes.get("/list/:id",generalController.getByIdGeneral);
    routes.put("/update/:id",generalController.updateGeneral);
    return routes
}