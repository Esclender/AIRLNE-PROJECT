import infoCenterServices from "../services/infoCenter.service.js"

async function getinfoCenter(req,res){
  try {

    const rst = await infoCenterServices.getinfoCenter()
    return await res.json(rst)

  } catch (error) {
    res.status(404).json({
      message:error
    })
  }
}

async function postinfoCenter(req,res){
  try {
    
    const rst = await infoCenterServices.postinfoCenter(req.body)
    return await res.status(201).json({
      message:"Información registrada",
      data:rst
    })

  } catch (error) {
    res.status(400).json({
      message:error
    })
  }
}

async function putinfoCenter(req,res){
  try {
    const id = req.params.id
    await infoCenterServices.putinfoCenter(id,req.body)
    return await res.json({
      message:"Info del Pasajero actualizada."
    })

  } catch (error) {
    if(error.cause.status){
      return res.status(error.cause.status).json({
        message:error.message
      })
    }

    res.status(500).json({
      message:error
    })
  }
}

async function deleteinfoCenter(req,res){
  try {
    const id = req.params.id
    await infoCenterServices.deleteinfoCenter(id)
    return await res.json({
      message:"La Info ha sido eliminado."
    })

  } catch (error) {
    console.log(error);
    if(error.cause.status){
      return res.status(error.cause.status).json({
        message:error.message
      })
    }

    res.status(500).json({
      message:error
    })
  }
}

export default {
  getinfoCenter,
  postinfoCenter,
  putinfoCenter,
  deleteinfoCenter
}