const {Sequelize} = require("sequelize")
const conexion = require("./../Database/conexion")
const Usuario = require("./Usuario")

const Skill = conexion.define("Skill",{
    idstack:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING,
    },
    porcentaje:{
        type:Sequelize.DECIMAL
    }

})
Usuario.hasMany(Skill)
module.exports = Skill;