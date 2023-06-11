import express from "express";
import paqueteServices from "../controllers/paqueteVuelo.controller.js";

const paqueteRouter = express.Router();


/**
 * @openapi
 * tags:
 *  - name: Paquete
 *    description: Endpoints para obtener todos los paquetes.
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
 * components:
 *   schemas:
 *     ReservasHotelesRE:
 *       type: object
 *       properties:
 *         nameHotel:
 *           type: string
 *           example: Hotel Plaza El Bosque Ebro
 *         rating:
 *           type: number
 *           example: 8.8
 *         city:
 *           type: string
 *           example: Santiago de chile
 *         id:
 *           type: string
 *           example: 6478b0eaa559cc7884a58952
 */


/**
 * @openapi
 * components:
 *   schemas:
 *     paquete:
 *       type: object
 *       properties:
 *         avaibleHotels:
 *           type: array
 *           items:
 *                $ref: "#/components/schemas/ReservasHotelesRE"
 *         avaibleFlie:
 *           type: array
 *           items:
 *                $ref: "#/components/schemas/vuelosGET"
 */


/**
 * @openapi
 * components:
 *   schemas:
 *     paqueteGET:
 *       type: object
 *       properties:
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

paqueteRouter.get("/", paqueteServices.getpaquete);


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
