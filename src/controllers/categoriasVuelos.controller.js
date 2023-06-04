import categoriasVServices from "../services/categoriasVuelos.service.js"


async function getcategoriasVuelos(req,res){
  try {

    const rst = await categoriasVServices.getCategoriasVuelos()
    return await res.json(rst)

  } catch (error) {
    res.status(404).json({
      message:error
    })
  }
}

async function postcategoriasVuelos(req,res){
  try {
    
    const rst = await categoriasVServices.postCategoriasVuelos(req.body)
    return await res.status(201).json({
      message:"Categoria creada",
      data:rst
    })

  } catch (error) {
    res.status(400).json({
      message:error
    })
  }
}

async function putcategoriasVuelos(req,res){
  try {
    const id = req.params.id
    await categoriasVServices.putCategoriasVuelos(id,req.body)
    return await res.json({
      message:"Categoria actualizada"
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

async function deletecategoriasVuelos(req,res){
  try {
    const id = req.params.id
    await categoriasVServices.deleteCategoriasVuelos(id)
    return await res.json({
      message:"Categoria eliminada"
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
  getcategoriasVuelos,
  postcategoriasVuelos,
  putcategoriasVuelos,
  deletecategoriasVuelos
}