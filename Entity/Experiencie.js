const {Sequelize} = require("sequelize")
const conexion = require("./../Database/conexion")
const Usuario = require("./Usuario")


const Experiencie = conexion.define("Experiencie",{
    idexperience:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    job:{
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
        type:Sequelize.TEXT
    },
    company:{
        type:Sequelize.STRING
    },
    imagecompany:{
        type:Sequelize.STRING
    }
})

Usuario.hasOne(Experiencie)
module.exports = Experiencie;