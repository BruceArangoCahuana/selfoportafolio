const {Sequelize} = require("sequelize")
const conexion = require("./../Database/conexion")


const Usuario = conexion.define("User",{
    idusuario:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING,
        unique:true,
        allowNull: true
    },
    password:{
        type:Sequelize.TEXT,
        allowNull: true
    },
    firstname:{
        type:Sequelize.STRING,
        allowNull: true
    },
    shortname:{
        type:Sequelize.STRING,
        allowNull: true
    }
})

module.exports = Usuario;