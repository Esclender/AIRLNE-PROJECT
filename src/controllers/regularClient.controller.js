import regularClientServices from "../services/regularClient.service.js"


async function getRegularClient(req,res){
  try {
    const rst = await regularClientServices.getRegularClient(req.body)
    return await res.json({
      message: "This is your client Token",
      token: rst
    })


  } catch (error) {
    console.log(error)
    res.status(404).json({
      message:error
    })
  }
}


async function getRegularClientInfo(req,res){
  try {
    const rst = await regularClientServices.getRegularClientInfo(req.authenticatedUser)
    return await res.json({
      data: rst
    })


  } catch (error) {
    console.log(error)
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
      data:`Este es tu usuario para ingresar: ${rst.data.username}`
    })


   
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message:error
    })
  }
}


async function putRegularClient(req,res){
  try {
    await regularClientServices.putRegularClient(req.authenticatedUser,req.body)
    return await res.json({
      message:"Info del Cliente actualizada."
    })


  } catch (error) {
    console.log(error)
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
    await regularClientServices.deleteRegularClient(req.authenticatedUser)
    return await res.json({
      message:"Se ha Inhabilitado la cuenta."
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
  deleteRegularClient,
  getRegularClientInfo
}
