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

exports.getByIdSkill = async (req,res,next) =>{
    try {
        const {id} = req.params
        const skill = await Skill.findByPk(id)
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

exports.updateSkill = async (req,res,next) =>{
    try {
        const {id} = req.params
        const skill = await  Skill.findByPk(id)
        if(!skill){
            return res.status(404).json(responseData(
                404,
                'error',
                {
                    message: "El skill no existe"
                }
            ));
        }
        await  Skill.update(req.body,{
            where:{
                idstack:id
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