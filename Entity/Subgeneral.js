const {Sequelize} = require("sequelize")
const conexion = require("./../Database/conexion")
const Usuario = require("./Usuario")

const Subgeneral = conexion.define("Subgeneral",{
    idsubgeneral:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    abstract:{
        type:Sequelize.TEXT,
        allowNull: true
    }
})
Usuario.hasOne(Subgeneral)
module.exports = Subgeneral;