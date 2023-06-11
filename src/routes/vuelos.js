import express from "express"
import vuelosServices from "../controllers/vuelos.controller.js";
import validarJwt from "../middleware/validateJwt.js";

const vuelosRouter = express.Router()


/**
* @openapi
* tags:
*  - name: vuelos
*    description: Endpoints para obtener todos los vuelos que esten disponibles para diferentes destinos.
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
 *     vuelos:
 *       type: object
 *       properties:
 *         destination: 
 *           type: string
 *           example: Argentina
 *         origin:
 *           type: String
 *           example: Perú
 *         roundtrip:
 *           type: Boolean
 *           example: false
 *         aboarding:
 *           type: string
 *           format: date
 *           example: "2023-06-01T10:30:00Z" 
 *         currency:
 *           type: String
 *           example: USD
 *         price:
 *           type: Number
 *           example: 250.60
 *         arrival:
 *           type: string
 *           format: date
 *           example: "2023-06-02T12:30:00Z"
 */


/**
 * @openapi
 * components:
 *   schemas:
 *     vuelosGET:
 *       type: object
 *       properties:
 *         destination: 
 *           type: string
 *           example: Argentina
 *         origin:
 *           type: String
 *           example: Perú
 *         roundtrip:
 *           type: Boolean
 *           example: false
 *         exit:
 *           type: string
 *           format: date
 *           example: "2023-06-01T10:30:00Z" 
 *         currency:
 *           type: String
 *           example: USD
 *         price:
 *           type: Number
 *           example: 250.60
 *         arrival:
 *           type: string
 *           format: date
 *           example: "2023-06-02T12:30:00Z"
 *         id: 
 *           type: string
 *           example: 6478b0eaa559cc7884a58952
 */


/**
 * @openapi
 * /vuelos:
*    get:
*      security:
*        - bearerAuth: []
*      tags:
*        - vuelos
*      summary: Devuelve un array de vuelos
*      responses:
*        '200':
*          description: successful operation
*          content:
*            application/json:
*              schema:
*               type: array
*               items:
*                    $ref: "#/components/schemas/vuelosGET"
*/

vuelosRouter.get("/",[validarJwt], vuelosServices.getvuelos)

/**
 * @openapi
 * /vuelos/{id}:
*    get:
*      security:
*        - bearerAuth: []
*      tags:
*        - vuelos
*      summary: Obtener un vuelo en específico.
*      parameters:
*        - name: id
*          description: Ingresa el id del vuelo
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
*                $ref: "#/components/schemas/vuelosGET"
*/

vuelosRouter.get("/:id",[validarJwt], vuelosServices.getvuelosbyid)

/**
 * @openapi
 * /vuelos:
*    post:
*      security:
*        - bearerAuth: []
*      tags:
*        - vuelos
*      summary: Crear un vuelo
*      requestBody:
*        description: Los parametros {destino,origen,tarifa, llegada, Salida} son OBLIGATORIOS
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/vuelos'
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
*                    example: Vuelo Creado
*                  data:
*                    type: object
*                    $ref: "#/components/schemas/vuelosGET"
*/
vuelosRouter.post("/",[validarJwt], vuelosServices.postvuelos)


/**
 * @openapi
 * /vuelos/{id}:
*    put:
*      security:
*        - bearerAuth: []
*      tags:
*        - vuelos
*      summary: Actualizar un vuelo.
*      parameters:
*        - name: id
*          description: Ingresa el id del vuelo
*          in: path
*          required: true
*          schema:
*            type: string
*      requestBody:
*        description: Parametro a actualizar
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/vuelos'
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
*                    example: Info del vuelo actualizada
*/
vuelosRouter.put("/:id",[validarJwt], vuelosServices.putvuelos)

/**
 * @openapi
 * /vuelos/{id}:
*    delete:
*      security:
*        - bearerAuth: []
*      tags:
*        - vuelos
*      summary: Borrar un vuelo
*      parameters:
*        - name: id
*          description: Escribe el id del vuelo
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
*                    example: Vuelo cancelado
*/
vuelosRouter.delete("/:id",[validarJwt], vuelosServices.deletevuelos)

export default vuelosRouter