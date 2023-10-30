const {Sequelize} = require("sequelize")
const conexion = require("./../Database/conexion")
const Usuario = require("./Usuario")

const SocialNetwork = conexion.define("SocialNetwork",{
    idsocialnetwor:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    imgIcon:{
        type:Sequelize.TEXT,
        allowNull: true
    },
    url:{
        type:Sequelize.TEXT,
        allowNull: true
    }
})
Usuario.hasMany(SocialNetwork)
module.exports = SocialNetwork;