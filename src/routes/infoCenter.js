import express from "express"
import infoCenterServices from "../controllers/infoCenter.controller.js";

const infoCenterRouter = express.Router()


/**
* @openapi
* tags:
*  - name: CentroInformativo
*    description: Endpoints para obtener todos los medios de comunicacion para la aerolinea.
*/

/**
 * @openapi
 * components:
 *   schemas:
 *     CentroInformativo:
 *       type: object
 *       properties:
 *         contactNumbers: 
 *           type: Array
 *           example: []
 */


/**
 * @openapi
 * components:
 *   schemas:
 *     CentroInformativoGET:
 *       type: object
 *       properties:
 *         contactNumbers: 
 *           type: Array
 *           example: []
 *         id: 
 *           type: string
 *           example: 6478b0eaa559cc7884a58952
 */


/**
 * @openapi
 * /infoCenter:
*    get:
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

infoCenterRouter.get("/", infoCenterServices.getinfoCenter)

/**
 * @openapi
 * /infoCenter:
*    post:
*      tags:
*        - CentroInformativo
*      summary: Agregar informacion
*      requestBody:
*        description: Los parametros {name,LastName,Age, passport_N, Destination} son OBLIGATORIOS
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
infoCenterRouter.post("/", infoCenterServices.postinfoCenter)


/**
 * @openapi
 * /CentroInformativo/{id}:
*    put:
*      tags:
*        - CentroInformativo
*      summary: Actualizar la informacion.
*      parameters:
*        - name: id
*          description: Ingresa el id de la ifo actualizada
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
infoCenterRouter.put("/:id", infoCenterServices.putinfoCenter)

/**
 * @openapi
 * /CentroInformativo/{id}:
*    delete:
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
infoCenterRouter.delete("/:id", infoCenterServices.deleteinfoCenter)

export default infoCenterRouter