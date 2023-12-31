/**
 *CRUD USUARIO  BARANGO
 * **/
const Usuario = require("../../Entity/Usuario");
const responseData = require("../../helpers");

exports.createUser = async (req,res,next) =>{
  try{
      const{name,password,firstname,shortname} = req.body;
      const usuario = new Usuario({
          name : name,
          password : password,
          firstname : firstname,
          shortname : shortname,
      });
      await usuario.save()
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

exports.getUser = async (req,res,next) =>{
    try{
        const usuario = await Usuario.findAll({})
        res.status(200).json(responseData(
            200,
            'success',
            usuario));
    }catch (e) {
        console.log(e)
        res.send(e)
        res.status(500).err(e)
        res.status(500).json({message: e.message})
    }
}

exports.getByIdUser = async (req,res,next) =>{
    try{
        const{id} = req.params
        const usuario = await Usuario.findByPk(id)
        if(!usuario){
            return res.status(404).json(responseData(
                404,
                'error',
                {
                    message:"El resumen general no existe"
                }));
        }
        res.status(200).json(responseData(
            200,
            'success',
            usuario));
    }catch (e) {
        console.log(e)
        res.send(e)
        res.status(500).err(e)
        res.status(500).json({message: e.message})
    }
}

exports.updateUser = async(req,res,next) =>{
    try {
        const{id} = req.params
        const usuario = await Usuario.findByPk(id)
        if(!usuario){
            return res.status(404).json(responseData(
                404,
                'error',
                {
                    message:"El usuario no existe"
                }));
        }
        await Usuario.update(req.body,{
            where:{
                idusuario:id
            }
        })
        res.status(200).json(responseData(
            200,
            'success',
            {
                message:"Se actulizo correctamente"
            }));
    }catch (e) {
        console.log(e)
        res.send(e)
        res.status(500).err(e)
        res.status(500).json({message: e.message})
    }
}