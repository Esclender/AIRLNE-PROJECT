import express from "express"
import regularClientServices from "../controllers/regularClient.controller.js";
import validarJwt from "../middleware/validateJwt.js"
import validarClientJwt from "../middleware/validateClientJwt.js"


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
*      name: defautl1
 */


/**
* @openapi
*components:
*  securitySchemes:
*    clientAuth:
*      type: apiKey
*      in: header
*      name: X-API-KEY
 */




/**
 * @openapi
 * components:
 *   schemas:
 *     ClienteFrecuente:
 *       type: object
 *       properties:
 *         names:
 *           type: String
 *           example: Esclender Antonio
 *         lastnames:
 *           type: String
 *           example: Lugo Silva
 *         birthday:
 *           type: Date
 *           example: 2004-08-08T00:00:00.000+00:00
 *         document:
 *           type: String
 *           example: 4008596
 *         documentType:
 *           type: String
 *           example: DNI
 *         email:
 *           type: String
 *           example: elesclenderlugo@gmail.com
 *         password:
 *           type: String
 *           example: 12345M
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
 *         names:
 *           type: String
 *           example: Esclender Antonio
 *         lastnames:
 *           type: String
 *           example: Lugo Silva
 *         birthday:
 *           type: Date
 *           example: 2004-08-08T00:00:00.000+00:00
 *         document:
 *           type: String
 *           example: 4008596
 *         documentType:
 *           type: String
 *           example: DNI
 *         email:
 *           type: String
 *           example: elesclenderlugo@gmail.com
 *         password:
 *           type: String
 *           example: 12345M
 */




/**
 * @openapi
 * /regularClient:
*    post:
*      security:
*        - bearerAuth: []
*      tags:
*        - ClienteFrecuente
*      summary: Agregar un cliente
*      requestBody:
*        description: Los parametros {names,lastnames,birthday,document,documentType,email,password } son OBLIGATORIOS
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
*                  data:
*                    type: object
*                    example: {"message": "Cliente registrado", "data": "Este es tu usuario para ingresar: elesclenderlugo68"}
*/
regularClienteRouter.post("/",[validarJwt], regularClientServices.postRegularClient)


/**
 * @openapi
 * /regularClient/info:
 *   get:
*      security:
*        - bearerAuth: []
*        - clientAuth: []
 *      tags:
 *        - ClienteFrecuente
 *      summary: Devuelve la info del cliente autenticado
 *      responses:
 *        '200':
 *          description: successful operation
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/ClienteFrecuenteGET"
 */


regularClienteRouter.get("/info",[validarJwt, validarClientJwt], regularClientServices.getRegularClientInfo)




/**
 * @openapi
 * /regularClient:
*    put:
*      security:
*        - bearerAuth: []
*        - clientAuth: []
*      tags:
*        - ClienteFrecuente
*      summary: Actualizar la info del cliente autenticado.
*      requestBody:
*        description: Ingresa  los parametros a actualizar en la propiedad parameters.
*        content:
*          application/json:
*            schema:
 *             type: object
 *             properties:
 *               parameters:
 *                 type: String
 *                 example: {"names":"Esclender Antonio","lastnames":"Lugo Silva","birthday":"2004-08-08","documents":"4008596","documentType":"DNI"}
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
regularClienteRouter.put("/",[validarJwt, validarClientJwt], regularClientServices.putRegularClient)


/**
 * @openapi
 * /regularClient/login:
*    post:
*      security:
*        - bearerAuth: []
*      tags:
*        - ClienteFrecuente
*      summary: Obten tu token
*      requestBody:
*        description: Los parametros {username, password} son OBLIGATORIOS
*        content:
*          application/json:
*            schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: String
 *                 example: elesclenderlugo78
 *               password:
 *                 type: String
 *                 example: 12345M
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
*                    example: This is your client Token.
*                  token:
*                    type: String
*                    example: Here will be your token.
*/
regularClienteRouter.post("/login",[validarJwt], regularClientServices.getRegularClient)






/**
 * @openapi
 * /regularClient:
*    delete:
*      security:
*        - bearerAuth: []
*        - clientAuth: []
*      tags:
*        - ClienteFrecuente
*      summary: Inhabilitar la cuenta
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
*                    example: Se ha Inhabilitado la cuenta.
*/
regularClienteRouter.delete("/",[validarJwt, validarClientJwt], regularClientServices.deleteRegularClient)


export default regularClienteRouter


