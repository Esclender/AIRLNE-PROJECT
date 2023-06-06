import regularClientServices from "../services/regularClient.service.js"

async function getRegularClient(req,res){
  try {

    const rst = await regularClientServices.getRegularClient()
    return await res.json(rst)

  } catch (error) {
    res.status(404).json({
      message:error
    })
  }
}

async function postRegularClient(req,res){
  try {
    
    const rst = await regularClientServices.postRegularClient(req.body)
    return await res.status(201).json({
      message:"Cliente registrado",
      data:rst
    })

  } catch (error) {
    res.status(400).json({
      message:error
    })
  }
}

async function putRegularClient(req,res){
  try {
    const id = req.params.id
    await regularClientServices.putRegularClient(id,req.body)
    return await res.json({
      message:"Info del Cliente actualizada."
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

async function deleteRegularClient(req,res){
  try {
    const id = req.params.id
    await regularClientServices.deleteRegularClient(id)
    return await res.json({
      message:"El Cliente ha sido sancionado."
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
  getRegularClient,
  postRegularClient,
  putRegularClient,
  deleteRegularClient
}