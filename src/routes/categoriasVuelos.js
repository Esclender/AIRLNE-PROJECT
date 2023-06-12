import express from "express"
import categoriasVservices from "../controllers/categoriasVuelos.controller.js";
import validarJwt from "../middleware/validateJwt.js";

const categoriasVuelosRuter = express.Router()
const fieldsToValidate = (req, res) => {
  const fields = []
}


/**
* @openapi
* tags:
*  - name: CategoriasDeVuelos
*    description: Endpoints para obtener las categorias de vuelos que esten dispnibles para diferentes destinos.
*/

/**
* @openapi
*components:
*  securitySchemes:
*    bearerAuth:            
*      type: http
*      scheme: bearer
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
*      security:
*        - bearerAuth: []
*      tags:
*        - CategoriasDeVuelos
*      summary: Devuelve un array de todas las categorías de vuelo actuales
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

categoriasVuelosRuter.get("/",[validarJwt], categoriasVservices.getcategoriasVuelos)

/**
 * @openapi
 * /categoriasVuelos:
*    post:
*      security:
*        - bearerAuth: []
*      tags:
*        - CategoriasDeVuelos
*      summary: Registrar una nueva categoria
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
*                type: object
*                properties:
*                  messagge:
*                    type: String
*                    example: Categoria registrada
*                  data:
*                    type: object
*                    $ref: "#/components/schemas/categoriasVuelosGET"
*/
categoriasVuelosRuter.post("/",[validarJwt], categoriasVservices.postcategoriasVuelos)


/**
 * @openapi
 * /categoriasVuelos/{id}:
*    put:
*      security:
*        - bearerAuth: []
*      tags: 
*        - CategoriasDeVuelos
*      summary: Actualizar informacion de una categoria.
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
*                type: object
*                properties:
*                  messagge:
*                    type: String
*                    example: Info de la categoria actualizada.
*/
categoriasVuelosRuter.put("/:id",[validarJwt], categoriasVservices.putcategoriasVuelos)

/**
 * @openapi
 * /categoriasVuelos/{id}:
*    delete:
*      security:
*        - bearerAuth: []
*      tags:
*        - CategoriasDeVuelos
*      summary: Inhabilitar una categoria de vuelo
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
*                type: object
*                properties:
*                  messagge:
*                    type: String
*                    example: Categoria Inhabilitada
*/
categoriasVuelosRuter.delete("/:id",[validarJwt], categoriasVservices.deletecategoriasVuelos)

export default categoriasVuelosRuter