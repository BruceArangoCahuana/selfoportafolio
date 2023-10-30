const {Sequelize} = require("sequelize")
const conexion = require("./../Database/conexion")
const Usuario = require("./Usuario")


const General = conexion.define("General",{
    idgeneral:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    abstract:{
        type:Sequelize.TEXT,
    }
})

Usuario.hasOne(General)
module.exports = General;