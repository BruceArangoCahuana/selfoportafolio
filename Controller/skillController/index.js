/**
 *CRUD SKILL  BARANGO
 * **/
const Skill = require("../../Entity/Skill")
const responseData = require("../../helpers");

exports.createSkill = async (req,res,next) =>{
  try {
    const{name,porcentaje,UserIdusuario} = req.body;
    const skill = new Skill({
        name:name,
        porcentaje:porcentaje,
        UserIdusuario:UserIdusuario
    });
    await skill.save();
    res.status(200).json(responseData(
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

exports.getSkill = async (req,res,next) =>{
    try {
        const skill = await  Skill.findAll({})
        res.status(200).json(responseData(
            200,
            'success',
            skill
        ));

    }catch (e) {
        console.log(e)
        res.send(e)
        res.status(500).err(e)
        res.status(500).json({message: e.message})
    }
}