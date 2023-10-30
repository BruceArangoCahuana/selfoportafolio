const {Sequelize} = require("sequelize")
const conexion = require("./../Database/conexion")
const Usuario = require("./Usuario")

const Lenguaje = conexion.define("Lenguaje",{
    idlanguaje:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING,
    },
    porcentaje:{
        type:Sequelize.DECIMAL,
    }
})
Usuario.hasMany(Lenguaje)
module.exports = Lenguaje;