/**
 *CRUD GENERAL  BARANGO
 * **/
const General = require("../../Entity/General");
const responseData = require("../../helpers");

exports.getGeneral = async (req,res,next) =>{
    try {
        const general = await General.findAll({})
        res.status(200).json(responseData(
            200,
            'success',
            general));
    }catch (e) {
        console.log(e)
        res.send(e)
        res.status(500).err(e)
        res.status(500).json({message: e.message})
    }
}

exports.createGeneral = async(req,res,next) =>{
    try{
        const{abstract,UserIdusuario} = req.body
        const general = await new General({
            abstract:abstract,
            UserIdusuario:UserIdusuario
        })
        await general.save()
        res.status(201).json(responseData(
            200,
            'success',
            {message:"se creo correctamente"}
        ));
    }catch (e) {
        console.log(e)
        res.send(e)
        res.status(500).err(e)
        res.status(500).json({message: e.message})
    }
}

exports.getByIdGeneral = async(req,res,next) =>{
    try {
        const{id} = req.params
        const general = await General.findByPk(id)
        if(!general){
            return res.status(404).json(responseData(
                404,
                'error',
                {
                    message: "El resumen general no existe"
                }
            ));
        }
        res.status(200).json(responseData(
            200,
            'success',
            general));
    }catch (e) {
        console.log(e)
        res.send(e)
        res.status(500).err(e)
        res.status(500).json({message: e.message})
    }
}

exports.updateGeneral = async (req,res,next) =>{
    try {
        const{id} = req.params
        const general = await  General.findByPk(id)
        if(!general){
            return res.status(404).json(responseData(
                404,
                'error',
                {
                    message: "El resumen general no existe"
                }
            ));
        }
        await General.update(req.body,{
            where:{
                idgeneral:id
            }
        })
        res.status(200).json(responseData(
            200,
            'success',
            {
                message: "Se actulizo correctamente"
            }));
    }catch (e) {
        console.log(e)
        res.send(e)
        res.status(500).err(e)
        res.status(500).json({message: e.message})
    }
}