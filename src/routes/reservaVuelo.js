import express from "express"
import reservasVuelosControllers from "../controllers/reservaVuelo.controller.js";

const reservasVuelosRouter = express.Router()


/**
* @openapi
* tags:
*  - name: ReservaDeVuelos
*    description: Endpoints para obtener todas las reservas de vuelo hechas.
*/

/**
 * @openapi
 * components:
 *   schemas:
 *     reservaVuelo:
 *       type: object
 *       properties:
 *         destination: 
 *           type: string
 *           example: Argentina
 *         origin:
 *           type: String
 *           example: Peru
 *         passenger:
 *           type: string
 *           example: Gerson Favian
 */


/**
 * @openapi
 * components:
 *   schemas:
 *     reservaVueloGET:
 *       type: object
 *       properties:
 *         destination: 
 *           type: string
 *           example: Argentina
 *         origin:
 *           type: String
 *           example: Peru
 *         passenger:
 *           type: string
 *           example: Gerson Favian
 *         id: 
 *           type: string
 *           example: 6478b0eaa559cc7884a58952
 */


/**
 * @openapi
 * /vuelosReservas:
*    get:
*      tags:
*        - ReservaDeVuelos
*      summary: Devuelve un array de las reservass de vuelos actuales.
*      responses:
*        '200':
*          description: successful operation
*          content:
*            application/json:
*              schema:
*               type: array
*               items:
*                    $ref: "#/components/schemas/reservaVueloGET"
*/

reservasVuelosRouter.get("/", reservasVuelosControllers.getReservaVuelos)

/**
 * @openapi
 * /vuelosReservas:
*    post:
*      tags:
*        - ReservaDeVuelos
*      summary: Agregar una nueva reserva.
*      requestBody:
*        description: Los parametros {destination, origin, passenger} son OBLIGATORIOS
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/reservaVuelo'
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
*                    example: Reserva registrado
*                  data:
*                    type: object
*                    $ref: "#/components/schemas/reservaVueloGET"
*/
reservasVuelosRouter.post("/", reservasVuelosControllers.postReservaVuelos)


export default reservasVuelosRouter