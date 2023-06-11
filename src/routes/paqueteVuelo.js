import express from "express";
import paqueteServices from "../controllers/paqueteVuelo.controller.js";
import validarJwt from "../middleware/validateJwt.js"


const paqueteRouter = express.Router();


/**
 * @openapi
 * tags:
 *  - name: Paquete
 *    description: Endpoints para obtener todos los paquetes.
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
 *     paquete:
 *       type: object
 *       properties:
 *         packageName:
 *           type: string
 *           example: "Paquete BUENOS AIRES"
 *         origin:
 *           type: string
 *           example: Peru
 *         destination:
 *           type: string
 *           example: Argentina
 *         avaibleDates:
 *           type: object
 *           example: {"since": "2023-07-09T10:30:00.000+00:00","to":"2023-07-12T13:30:00.000+00:00"}
 */


/**
 * @openapi
 * components:
 *   schemas:
 *     paqueteGET:
 *       type: object
 *       properties:
 *         packageName:
 *           type: string
 *           example: "Paquete BUENOS AIRES"
 *         origin:
 *           type: string
 *           example: Peru
 *         destination:
 *           type: string
 *           example: Argentina
 *         avaibleDates:
 *           type: object
 *           example: {"since": "2023-07-09T10:30:00.000+00:00","to":"2023-07-12T13:30:00.000+00:00"}
 *         endingDate:
 *           type: date
 *           example: "2023-07-12T13:30:00.000+00:00"
 *         status:
 *           type: boolean
 *           example: true
 *         avaibleHotels:
 *           type: array
 *           items:
 *                $ref: "#/components/schemas/ReservasHotelesRE"
 *         avaibleFlies:
 *           type: array
 *           items:
 *                $ref: "#/components/schemas/vuelosGET"
 *         id:
 *           type: string
 *           example: 6478b0eaa559cc7884a58952
 */


/**
 * @openapi
 * /paquete:
 *   get:
*      security:
*        - bearerAuth: []
 *      tags:
 *        - Paquete
 *      summary: Devuelve un array de paquetes
 *      responses:
 *        '200':
 *          description: successful operation
 *          content:
 *            application/json:
 *              schema:
 *               type: array
 *               items:
 *                    $ref: "#/components/schemas/paqueteGET"
 */


paqueteRouter.get("/",[validarJwt], paqueteServices.getpaquete);


/**
 * @openapi
 * /paquete:
 *   post:
*      security:
*        - bearerAuth: []
 *      tags:
 *        - Paquete
 *      summary: Agregar un paquete
 *      requestBody:
 *        description: Para crear un nuevo paquete, debes ingresar en los array los id's de los hoteles y vuelos respectivos, ademas tambien se le debe crear un nombre al paquete.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/paquete'
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
 *                    example: Paquete registrado.
 *                  data:
 *                    type: object
 *                    $ref: "#/components/schemas/paqueteGET"
 */
paqueteRouter.post("/",[validarJwt], paqueteServices.postpaquete);


/**
 * @openapi
 * /paquete/{id}:
 *    put:
*      security:
*        - bearerAuth: []
 *      tags:
 *        - Paquete
 *      summary: Actualizar el paquete.
 *      parameters:
 *        - name: id
 *          description: Ingresa el id del paquete
 *          in: path
 *          required: true
 *          schema:
 *            type: string
 *      requestBody:
 *        description: Parametro a actualizar
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/paquete'
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
 *                    example: Info del Paquete fue actualizada.
 */
paqueteRouter.put("/:id",[validarJwt], paqueteServices.putpaquete);


/**
 * @openapi
 * /paquete/{id}:
 *   delete:
*      security:
*        - bearerAuth: []
 *      tags:
 *        - Paquete
 *      summary: Inhabilitar un paquete
 *      parameters:
 *        - name: id
 *          description: Escribe el id del paquete
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
 *                    example: El paquete fue inhabilitado
 */
paqueteRouter.delete("/:id",[validarJwt], paqueteServices.deletepaquete);


export default paqueteRouter;
