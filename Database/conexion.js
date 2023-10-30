const {Sequelize} = require("sequelize")
require("dotenv").config({path:".env"})
const conexion =  new Sequelize(process.env.NAME_DATABASE,process.env.NAME_USER,process.env.NAME_PASS,{
    host:process.env.NAME_HOST,
    dialect:"mysql",
    port:process.env.NAME_PORT,
    operatorsAliases:false,
    define:{
        timestamps:false
    },
    pool:{
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000
    }
})

module.exports = conexion;