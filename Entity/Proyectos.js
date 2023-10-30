const {Sequelize} = require("sequelize")
const conexion = require("./../Database/conexion")
const Usuario = require("./Usuario")

const Proyectos = conexion.define("Proyectos",{
    idproyect:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.TEXT,
        allowNull: true
    },
    pathimage:{
        type:Sequelize.TEXT,
        allowNull: true
    },
    pathimage:{
        type:Sequelize.TEXT,
        allowNull: true
    },
    link:{
        type:Sequelize.TEXT,
        allowNull: true
    }
})
Usuario.hasMany(Proyectos)
module.exports = Proyectos;