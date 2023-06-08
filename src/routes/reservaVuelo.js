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
 *     reservaVueloGET:
 *       type: object
 *       properties:
 *         passenger:
 *            type: object
 *            $ref: "#/components/schemas/pasajeroGET"
 *         bookedFlie:
 *           type: object
 *           $ref: "#/components/schemas/vuelosGET"
 *         id:
 *           type: string
 *           example: 6478b0eaa559cc7884a58952
 */


/**
 * @openapi
 * components:
 *   schemas:
 *     reservaVuelo:
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
*        description: Para crear uan reserva se debe enviar el Nummero de pasaporte del pasajero y el id del vuelo reservado.
*        content:
*          application/json:
*            schema:
*              type: object
*              properties:
*                passengerPassportN:
*                  type: string
*                bookedFlieId:
*                  type: string
*              example:
*                passengerPassportN: ZAB000254
*                bookedFlieId: 6478b0eaa559cc7884a58952
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
 * /vuelosReservas/{id}:
*    put:
*      tags:
*        - ReservaDeVuelos
*      summary: Actualizar una reserva, solo se podra modificar el vuelo de un pasajero que ya tenga una reserva.
*      parameters:
*        - name: id
*          description: Ingresa el id de la reserva.
*          in: path
*          required: true
*          schema:
*            type: string
*      requestBody:
*        description: Parametro a actualizar
*        content:
*          application/json:
*            schema:
*              type: object
*              properties:
*                bookedFlieId:
*                  type: string
*              example:
*                bookedFlieId: 6478b0eaa559cc7884a58952
*        required: true
*      responses:
*        '200':
*          description: successful operation
*          content:
*            application/json:
*              schema:
*               type: object
*               example: Reserva actualizada
*/
reservasVuelosRouter.put("/:id", reservasVuelosControllers.putReservaVuelo)

/**
 * @openapi
 * /vuelosReservas/{id}:
*    delete:
*      tags:
*        - ReservaDeVuelos
*      summary: Actualizar una reserva, solo se podra modificar el vuelo de un pasajero que ya tenga una reserva.
*      parameters:
*        - name: id
*          description: Ingresa el id de la reserva.
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
*               type: object
*               example: Reserva eliminado
*/
reservasVuelosRouter.delete("/:id", reservasVuelosControllers.deleteReservaVuelo)


export default reservasVuelosRouter