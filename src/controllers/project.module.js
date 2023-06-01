import mongoose from "mongoose"

class db {
  constructor(req){
    this.data = req.app.db.data.articulos
  }

  get(id){
    if(id != null){
      return this.data.find(articulo => articulo.id == id)
    }else{
      return this.data
    }
  }

  post(body){

    const newArticle = {
      ...body
    }

    this.data.push(newArticle)
  }

  put(id,body){
    const articulo = this.get(id)
    const index = this.data.findIndex(art => art.id == id)

    this.data[index] = {
      ...articulo,
      ...body
    }

  }

  delete(id, req){
    req.app.db.data.articulos = this.data.filter(art => art.id != id)
    this.data = req.app.db.data.articulos
  }

}