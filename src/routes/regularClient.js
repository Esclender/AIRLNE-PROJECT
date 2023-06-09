import express from "express"
import regularClientServices from "../controllers/regularClient.controller.js";
import validarJwt from "../middleware/validateJwt.js"

const regularClienteRouter = express.Router()


/**
* @openapi
* tags:
*  - name: ClienteFrecuente
*    description: Endpoints para obtener todos los Clientes que usan la aerolina con frecuencia.
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
 *     ClienteFrecuente:
 *       type: object
 *       properties:
 *         miles: 
 *           type: Number
 *           example: 350
 *         passenger:
 *           type: object
 *           $ref: "#/components/schemas/pasajeroGET"
 */


/**
 * @openapi
 * components:
 *   schemas:
 *     ClienteFrecuenteGET:
 *       type: object
 *       properties:
 *         miles: 
 *           type: Number
 *           example: 350
 *         passenger:
 *           type: object
 *           $ref: "#/components/schemas/pasajeroGET"
 *         id: 
 *           type: string
 *           example: 6478b0eaa559cc7884a58952
 */


/**
 * @openapi
 * /regularClient:
*    get:
*      security:
*        - bearerAuth: []
*      tags:
*        - ClienteFrecuente
*      summary: Devuelve un array de ClienteFrecuente
*      responses:
*        '200':
*          description: successful operation
*          content:
*            application/json:
*              schema:
*               type: array
*               items:
*                    $ref: "#/components/schemas/ClienteFrecuenteGET"
*/

regularClienteRouter.get("/",[validarJwt], regularClientServices.getRegularClient)

/**
 * @openapi
 * /regularClient:
*    post:
*      security:
*        - bearerAuth: []
*      tags:
*        - ClienteFrecuente
*      summary: Agregar un pasajero
*      requestBody:
*        description: Los parametros {name,LastName,Age, passport_N, Destination} son OBLIGATORIOS
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/ClienteFrecuente'
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
*                    example: Pasajero registrado.
*                  data:
*                    type: object
*                    $ref: "#/components/schemas/ClienteFrecuenteGET"
*/
regularClienteRouter.post("/",[validarJwt], regularClientServices.postRegularClient)


/**
 * @openapi
 * /regularClient/{id}:
*    put:
*      security:
*        - bearerAuth: []
*      tags:
*        - ClienteFrecuente
*      summary: Actualizar a un cliente.
*      parameters:
*        - name: id
*          description: Ingresa el id del cliente
*          in: path
*          required: true
*          schema:
*            type: string
*      requestBody:
*        description: Parametro a actualizar
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/ClienteFrecuente'
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
*                    example: Info del Cliente fue actualizada.
*/
regularClienteRouter.put("/:id",[validarJwt], regularClientServices.putRegularClient)

/**
 * @openapi
 * /regularClient/{id}:
*    delete:
*      security:
*        - bearerAuth: []
*      tags:
*        - ClienteFrecuente
*      summary: Sancionar a un cliente 
*      parameters:
*        - name: id
*          description: Escribe el id del cliente
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
*                    example: El cliente ha sido sancionado.
*/
regularClienteRouter.delete("/:id",[validarJwt], regularClientServices.deleteRegularClient)

export default regularClienteRouter