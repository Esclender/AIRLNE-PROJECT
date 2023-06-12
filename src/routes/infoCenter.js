import express from "express"
import infoCenterServices from "../controllers/infoCenter.controller.js";
import validarJwt from "../middleware/validateJwt.js";


const infoCenterRouter = express.Router()




/**
* @openapi
* tags:
*  - name: CentroInformativo
*    description: Endpoints para obtener todos los medios de comunicacion para la aerolinea.
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
 *     CentroInformativo:
 *       type: object
 *       properties:
 *         userData:
 *           type: object
 *           example: {"name":"Esclender", "lastname":"Lugo","prefix":"+51","contactNum":"928 590 695","email":"elesclenderlugo@gmail.com"}
 *         comment:
 *           type: string
 *           example: Los comentarios que quieras dar acerca de tu reclamo
 *         claimType:
 *            type: string
 *            example: Devolucion
 */




/**
 * @openapi
 * components:
 *   schemas:
 *     CentroInformativoGET:
 *       type: object
 *       properties:
 *         userData:
 *           type: object
 *           example: {"name":"Esclender", "lastname":"Lugo","prefix":"+51","contactNum":"928 590 695","email":"elesclenderlugo@gmail.com"}
 *         comment:
 *           type: string
 *           example: Los comentarios que quieras dar acerca de tu reclamo
 *         claimType:
 *            type: string
 *            example: Devolucion
 *         id:
 *           type: string
 *           example: 6478b0eaa559cc7884a58952
 */




/**
 * @openapi
 * /infoCenter:
*    get:
*      security:
*        - bearerAuth: []
*      tags:
*        - CentroInformativo
*      summary: Devuelve un array con los reclamos regitrados.
*      responses:
*        '200':
*          description: successful operation
*          content:
*            application/json:
*              schema:
*               type: array
*               items:
*                    $ref: "#/components/schemas/CentroInformativoGET"
*/


infoCenterRouter.get("/",[validarJwt], infoCenterServices.getinfoCenter)


/**
 * @openapi
 * /infoCenter/claims:
*    get:
*      security:
*        - bearerAuth: []
*      tags:
*        - CentroInformativo
*      summary: Devuelve un array con todos los tipos de reclamos disponibles.
*      responses:
*        '200':
*          description: successful operation
*          content:
*            application/json:
*              schema:
*               type: array
*              example:
*                - Devoluciones
*                - Quejas
*                - Embarque
*                - Equipaje
*/


infoCenterRouter.get("/claims",[validarJwt], infoCenterServices.getinfoCenterClaims)


/**
 * @openapi
 * /infoCenter:
*    post:
*      security:
*        - bearerAuth: []
*      tags:
*        - CentroInformativo
*      summary: Registrar un reclamo
*      requestBody:
*        description: Los parametros {userData,comment,claimnt} son OBLIGATORIOS, consulte la lista de reclamos que puede enviar
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/CentroInformativo'
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
*                    example: Reclamo registrado.
*                  data:
*                    type: object
*                    $ref: "#/components/schemas/CentroInformativoGET"
*/
infoCenterRouter.post("/",[validarJwt], infoCenterServices.postinfoCenter)




/**
 * @openapi
 * /infoCenter/{id}:
*    put:
*      security:
*        - bearerAuth: []
*      tags:
*        - CentroInformativo
*      summary: Actualizar un reclamo.
*      parameters:
*        - name: id
*          description: Ingresa el id del reclamo a actualizar
*          in: path
*          required: true
*          schema:
*            type: string
*      requestBody:
*        description: Parametro a actualizar
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/CentroInformativo'
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
*                    example: El reclamo fue actualizado.
*/
infoCenterRouter.put("/:id",[validarJwt], infoCenterServices.putinfoCenter)


/**
 * @openapi
 * /infoCenter/{id}:
*    delete:
*      security:
*        - bearerAuth: []
*      tags:
*        - CentroInformativo
*      summary: Concluir un reclamo.
*      parameters:
*        - name: id
*          description: Escribe el id de la info a eliminar.
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
*                    example: El reclamo ha concluido.
*/
infoCenterRouter.delete("/:id",[validarJwt], infoCenterServices.deleteinfoCenter)


export default infoCenterRouter


