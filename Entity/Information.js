const {Sequelize} = require("sequelize")
const conexion = require("./../Database/conexion")
const Usuario = require("./Usuario")

const Information = conexion.define("Information",{
    idinformation:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    email:{
        type:Sequelize.STRING,
    },
    cellphone:{
        type:Sequelize.STRING
    },
    age:{
        type:Sequelize.DECIMAL
    }

})
Usuario.hasOne(Information)
module.exports = Information;