import express from "express"
import pasajeroServices from "../controllers/pasajeros.controller.js";
import validarJwt from "../middleware/validateJwt.js"

const pasajeroRouter = express.Router()


/**
* @openapi
* tags:
*  - name: pasajero
*    description: Endpoints para obtener todos los pasajeros.
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
 *     pasajero:
 *       type: object
 *       properties:
 *         name: 
 *           type: string
 *           example: Gerson Favian
 *         lastName:
 *           type: String
 *           example: Arcentales Zavala
 *         age:
 *           type: Number
 *           example: 19
 *         passport_N:
 *           type: string
 *           example: "ZAB000254" 
 */


/**
 * @openapi
 * components:
 *   schemas:
 *     pasajeroGET:
 *       type: object
 *       properties:
 *         name: 
 *           type: string
 *           example: Gerson
 *         lastName:
 *           type: String
 *           example: Arcentales
 *         age:
 *           type: Number
 *           example: 19
 *         passport_N:
 *           type: string
 *           example: "ZAB000254" 
 *         id: 
 *           type: string
 *           example: 6478b0eaa559cc7884a58952
 */


/**
 * @openapi
 * /pasajero:
*    get:
*      security:
*        - bearerAuth: []
*      tags:
*        - pasajero
*      summary: Devuelve un array de pasajeros
*      responses:
*        '200':
*          description: successful operation
*          content:
*            application/json:
*              schema:
*               type: array
*               items:
*                    $ref: "#/components/schemas/pasajeroGET"
*/

pasajeroRouter.get("/",[validarJwt], pasajeroServices.getpasajero)

/**
 * @openapi
 * /pasajero:
*    post:
*      security:
*        - bearerAuth: []
*      tags:
*        - pasajero
*      summary: Agregar un pasajero
*      requestBody:
*        description: Los parametros {name,LastName,Age, passport_N} son OBLIGATORIOS
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/pasajero'
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
*                    $ref: "#/components/schemas/pasajeroGET"
*/
pasajeroRouter.post("/",[validarJwt], pasajeroServices.postpasajero)


/**
 * @openapi
 * /pasajero/{id}:
*    put:
*      security:
*        - bearerAuth: []
*      tags:
*        - pasajero
*      summary: Actualizar a un pasajero.
*      parameters:
*        - name: id
*          description: Ingresa el id del pasajero
*          in: path
*          required: true
*          schema:
*            type: string
*      requestBody:
*        description: Parametro a actualizar
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/pasajero'
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
*                    example: Info del Pasajero actualizada.
*/
pasajeroRouter.put("/:id",[validarJwt], pasajeroServices.putpasajero)

/**
 * @openapi
 * /pasajero/{id}:
*    delete:
*      security:
*        - bearerAuth: []
*      tags:
*        - pasajero
*      summary: Borrar a un pasajero
*      parameters:
*        - name: id
*          description: Escribe el id del pasajero
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
*                    example: El pasajero ha cancelado su vuelo.
*/
pasajeroRouter.delete("/:id",[validarJwt], pasajeroServices.deletepasajero)

export default pasajeroRouter