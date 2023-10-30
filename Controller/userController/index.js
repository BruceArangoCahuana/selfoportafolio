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