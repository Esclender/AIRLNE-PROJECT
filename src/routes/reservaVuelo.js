import express from "express"
import reservasVuelosControllers from "../controllers/reservaVuelo.controller.js";
import validarJwt from "../middleware/validateJwt.js"

const reservasVuelosRouter = express.Router()


/**
* @openapi
* tags:
*  - name: ReservaDeVuelos
*    description: Endpoints para obtener todas las reservas de vuelo hechas.
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
*      security:
*        - bearerAuth: []
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

reservasVuelosRouter.get("/",[validarJwt], reservasVuelosControllers.getReservaVuelos)

/**
 * @openapi
 * /vuelosReservas:
*    post:
*      security:
*        - bearerAuth: []
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
reservasVuelosRouter.post("/",[validarJwt], reservasVuelosControllers.postReservaVuelos)

/**
 * @openapi
 * /vuelosReservas/{id}:
*    put:
*      security:
*        - bearerAuth: []
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
reservasVuelosRouter.put("/:id",[validarJwt], reservasVuelosControllers.putReservaVuelo)

/**
 * @openapi
 * /vuelosReservas/{id}:
*    delete:
*      security:
*        - bearerAuth: []
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
reservasVuelosRouter.delete("/:id",[validarJwt], reservasVuelosControllers.deleteReservaVuelo)


export default reservasVuelosRouter