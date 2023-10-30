const {Sequelize} = require("sequelize")
const conexion = require("./../Database/conexion")
const Usuario = require("./Usuario")
const Proyect = require("./Proyectos")

const Icon = conexion.define("Icon",{
    idicon:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING,
    },
    urlicon:{
        type:Sequelize.TEXT
    },
    age:{
        type:Sequelize.DECIMAL
    }

})
Proyect.hasMany(Icon)
Usuario.hasOne(Icon)
module.exports = Icon;