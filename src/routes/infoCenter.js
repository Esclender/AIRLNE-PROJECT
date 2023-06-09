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
 *         center: 
 *           type: string
 *           example: Embarque
 *         description: 
 *           type: string
 *           example: Descubre qué necesitas en nuestro nuevo proceso de embarque por grupos…
 *         contacts: 
 *           items:
 *              type: string
 *           example:
 *             - "+56 928 590 695"
 *             - "+51 556 789 412"
 */


/**
 * @openapi
 * components:
 *   schemas:
 *     CentroInformativoGET:
 *       type: object
 *       properties:
 *         center: 
 *           type: string
 *           example: Embarque
 *         description: 
 *           type: string
 *           example: Descubre qué necesitas en nuestro nuevo proceso de embarque por grupos…
 *         contacts: 
 *           items:
 *              type: string
 *           example:
 *             - "+56 928 590 695"
 *             - "+51 556 789 412"
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
*      summary: Devuelve un array de informacion
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
 * /infoCenter:
*    post:
*      security:
*        - bearerAuth: []
*      tags:
*        - CentroInformativo
*      summary: Agregar informacion
*      requestBody:
*        description: Los parametros {center,description,contacts} son OBLIGATORIOS
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
*                    example: Informacion registrada.
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
*      summary: Actualizar la informacion.
*      parameters:
*        - name: id
*          description: Ingresa el id de la info a actualizar
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
*                    example: La Info fue actualizada.
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
*      summary: Borrar la informacion
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
*                    example: La info ha sido eliminada.
*/
infoCenterRouter.delete("/:id",[validarJwt], infoCenterServices.deleteinfoCenter)

export default infoCenterRouter