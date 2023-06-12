import paqueteServices from "../services/paqueteVuelo.service.js";


async function getpaquete(req, res) {
  try {
    const rst = await paqueteServices.getPaquete();
    return await res.json(rst);
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
}


async function postpaquete(req, res) {
  try {
    const rst = await paqueteServices.postPaquete(req.body);
    return await res.status(201).json({
      message: "Paquete registrado",
      data: rst,
    });


  } catch (error) {
    console.log(error)
    if (error.cause.status) {
      return res.status(error.cause.status).json({
        message: error.message,
      });
    }


    res.status(400).json({
      message: error,
    });
  }
}


async function putpaquete(req, res) {
  try {
    const id = req.params.id;
    await paqueteServices.putPaquete(id, req.body);
    return await res.json({
      message: "Info del paquete actualizada.",
    });
  } catch (error) {
    console.log(error)
    if (error.cause.status) {
      return res.status(error.cause.status).json({
        message: error.message,
      });
    }


    res.status(500).json({
      message: error,
    });
  }
}


async function deletepaquete(req, res) {
  try {
    const id = req.params.id;
    await paqueteServices.deletePaquete(id);
    return await res.json({
      message: "El Paquete ha sido inhabilitado",
    });
  } catch (error) {
    console.log(error);
    if (error.cause.status) {
      return res.status(error.cause.status).json({
        message: error.message,
      });
    }


    res.status(500).json({
      message: error,
    });
  }
}


export default {
  getpaquete,
  postpaquete,
  putpaquete,
  deletepaquete,
};




