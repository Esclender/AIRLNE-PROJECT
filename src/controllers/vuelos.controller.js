import vuelosServices from "../services/vuelos.service.js"


async function getvuelos(req,res){
  try {

    const rst = await vuelosServices.getVuelos()
    return await res.json(rst)

  } catch (error) {
    res.status(404).json({
      message:error
    })
  }
}

async function getvuelosbyid(req,res){
  try {
    const { id } = req.params
    const rst = await vuelosServices.getVueloById(id)
    return await res.json(rst)

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

async function postvuelos(req,res){
  try {
    
    const rst = await vuelosServices.postVuelos(req.body)
    return await res.status(201).json({
      message:"Vuelo Registrado",
      data:rst
    })

  } catch (error) {
    res.status(400).json({
      message:error
    })
  }
}

async function putvuelos(req,res){
  try {
    const id = req.params.id
    await vuelosServices.putVuelos(id,req.body)
    return await res.json({
      message:"Info del Vuelo Actualizada"
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

async function deletevuelos(req,res){
  try {
    const id = req.params.id
    await vuelosServices.deleteVuelos(id)
    return await res.json({
      message:"Vuelo cancelado"
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

export default {
  getvuelos,
  postvuelos,
  putvuelos,
  getvuelosbyid,
  deletevuelos
}