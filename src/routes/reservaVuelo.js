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
 *     pasajeroGET:
 *       type: object
 *       properties:
 *         name: 
 *           type: string
 *           example: Gerson
 *         LastName:
 *           type: String
 *           example: Arcentales
 *         Age:
 *           type: Number
 *           example: 19
 *         Passport_N:
 *           type: string
 *           example: "ZAB000254" 
 *         Destination:
 *           type: String
 *           example: Argentina
 *         id: 
 *           type: string
 *           example: 6478b0eaa559cc7884a58952
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     reservaVueloGET:
 *       type: object
 *       properties:
 *         passenger:
 *            type: object
 *            $ref: "#/components/schemas/pasajeroGET"
 *         bookedFlie:
 *           type: object
 *           $ref: "#/components/schemas/vuelosGET"
 */


/**
 * @openapi
 * components:
 *   schemas:
 *     reservaVuelo:
 *       type: object
 *       properties:
 *          passenger:
 *            type: string
 *            example: 6478b0eaa559cc7884a58952
 *          bookedFile:
 *            type: string
 *            example: 6478b0eaa559cc7884a58952
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
*                    example: Nueva Reserva registrada.
*                  data:
*                    type: object
*                    $ref: "#/components/schemas/reservaVueloGET"
*/
reservasVuelosRouter.post("/", reservasVuelosControllers.postReservaVuelos)

/**
 * @openapi
 * /vuelosReservas:
*    put:
*      tags:
*        - ReservaDeVuelos
*      summary: Actualizar una nueva Reserva
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
*                    example: La reserva ha sido actualizada.
*                  data:
*                    type: object
*                    $ref: "#/components/schemas/reservaVueloGET"
*/
reservasVuelosRouter.put("/", reservasVuelosControllers.putReservaVuelo)

/**
 * @openapi
 * /vuelosReservas:
*    delete:
*      tags:
*        - ReservaDeVuelos
*      summary: Eliminar una nueva reserva.
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
*                    example: La reserva ha sido cancelada.
*                  data:
*                    type: object
*                    $ref: "#/components/schemas/reservaVueloGET"
*/
reservasVuelosRouter.delete("/", reservasVuelosControllers.deleteReservaVuelo)


export default reservasVuelosRouter