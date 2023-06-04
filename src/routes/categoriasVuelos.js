import express from "express"
import categoriasVservices from "../controllers/categoriasVuelos.controller.js";

const categoriasVuelosRuter = express.Router()


/**
* @openapi
* tags:
*  - name: CategoriasDeVuelos
*    description: Endpoints para obtener las categorias de vuelos que esten dispnibles para diferentes destinos.
*/

/**
 * @openapi
 * components:
 *   schemas:
 *     CategoriasDeVuelos:
 *       type: object
 *       properties:
 *         beneficies:
 *           type: array
 *           example: [
 *                       bolso o mochila pequeña,
 *                       Equipaje de mano 10 kg,
 *                       1 equipaje bodega 23 kg,
 *                       Cambio con cargo,
 *                       Selección de asiento,
 *                       30 % de devolución,
 *                       Uso de cupones Upgrade
 *                       ]
 *         categoryName:
 *           type: string
 *           example: Plus
 *         price:
 *           type: number
 *           example: 250
 *         currency:
 *           type: string
 *           example: USD
 * 
 */


/**
 * @openapi
 * components:
 *   schemas:
 *     categoriasVuelosGET:
 *       type: object
 *       properties:
 *         beneficies:
 *           type: array
 *           example: [
 *                       bolso o mochila pequeña,
 *                       Equipaje de mano 10 kg,
 *                       1 equipaje bodega 23 kg,
 *                       Cambio con cargo,
 *                       Selección de asiento,
 *                       30 % de devolución,
 *                       Uso de cupones Upgrade
 *                       ]
 *         categoryName:
 *           type: string
 *           example: Plus
 *         price:
 *           type: number
 *           example: 250
 *         currency:
 *           type: string
 *           example: USD
 *         id: 
 *           type: string
 *           example: 6478b0eaa559cc7884a58952
 */


/**
 * @openapi
 * /categoriasVuelos:
*    get:
*      tags:
*        - CategoriasDeVuelos
*      summary: Devuelve un array de todas las categorías actuales
*      responses:
*        '200':
*          description: successful operation
*          content:
*            application/json:
*              schema:
*               type: array
*               items:
*                    $ref: "#/components/schemas/categoriasVuelosGET"
*/

categoriasVuelosRuter.get("/", categoriasVservices.getcategoriasVuelos)

/**
 * @openapi
 * /categoriasVuelos:
*    post:
*      tags:
*        - CategoriasDeVuelos
*      summary: Añadir una nueva categoria
*      requestBody:
*        description: Los parametros {beneficies,categoryName,price,currency} son OBLIGATORIOS
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/CategoriasDeVuelos'
*        required: true
*      responses:
*        '200':
*          description: successful operation
*          content:
*            application/json:
*              schema:
*                  messagge:
*                    type: String
*                    example: Categoria creada
*                  data:
*                    type: object
*                    $ref: "#/components/schemas/categoriasVuelosGET"
*/
categoriasVuelosRuter.post("/", categoriasVservices.postcategoriasVuelos)


/**
 * @openapi
 * /categoriasVuelos/{id}:
*    put:
*      tags: 
*        - CategoriasDeVuelos
*      summary: Actualizar una categoria.
*      parameters:
*        - name: id
*          description: Ingresa el id de la categoria
*          in: path
*          required: true
*          schema:
*            type: string
*      requestBody:
*        description: Parametro a actualizar
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/CategoriasDeVuelos'
*        required: true
*      responses:
*        '200':
*          description: successful operation
*          content:
*            application/json:
*              schema:
*               type: string
*               example: Categoria actualizada
*/
categoriasVuelosRuter.put("/:id", categoriasVservices.putcategoriasVuelos)

/**
 * @openapi
 * /categoriasVuelos/{id}:
*    delete:
*      tags:
*        - CategoriasDeVuelos
*      summary: Borrar una categoria de vuelo
*      parameters:
*        - name: id
*          description: Escribe el ID de la categoría a escoger
*          in: path
*          required: true
*          schema:
*            type: string
*      responses:
*        '200':
*          description: successful operation
*          content:
*            application/json:
*              schema:
*               type: string
*               example: Categoria eliminada
*/
categoriasVuelosRuter.delete("/:id", categoriasVservices.deletecategoriasVuelos)

export default categoriasVuelosRuter