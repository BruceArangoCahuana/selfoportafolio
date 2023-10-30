const {Sequelize} = require("sequelize")
const conexion = require("./../Database/conexion")
const Usuario = require("./Usuario")

const Stady = conexion.define("Stady",{
    idstudy:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:Sequelize.STRING,
    },
    company:{
        type:Sequelize.STRING,
    },
    start_date:{
        type:Sequelize.DATE,
    },
    final_date:{
        type:Sequelize.DATE,
    },
    actuality:{
        type: Sequelize.BOOLEAN,
    },
    abstract:{
        type:Sequelize.TEXT,
    },
    status:{
        type: Sequelize.BOOLEAN,
    }
})
Usuario.hasOne(Stady)
module.exports = Stady;