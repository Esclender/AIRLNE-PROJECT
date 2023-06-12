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
 *            example: {"names": "Esclender Antonio", "lastNames":"Lugo Silva", "documentType":"DNI", "document":4008712}
 *         bookedFlie:
 *           type: object
 *           example: {"destination": "Argentina","origin":"Peru","currency":"USD","price":"600", "arrival":"2023-06-02T12:30:00Z", "aboarding":"2023-06-01T10:30:00Z" }
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
 *            example: {"names": "Esclender Antonio", "lastNames":"Lugo Silva", "documentType":"DNI", "document":4008712}
 *         bookedFlie:
 *           type: object
 *           example: {"destination": "Argentina","origin":"Peru","currency":"USD","price":"600", "arrival":"2023-06-02T12:30:00Z", "aboarding":"2023-06-01T10:30:00Z" }
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
*      summary: Registrar una nueva reserva.
*      requestBody:
*        description: Para registrar una reserva se debe enviar los datos del pasajero y el vuelo a reservar.
*        content:
*          application/json:
*            schema:
*              type: object
*              properties:
*                passengerData:
*                  type: object
*                  example: {"names": "Esclender Antonio", "lastNames":"Lugo Silva", "documentType":"DNI", "document":4008712}
*                bookedFlie:
*                  type: object
*                  example: {"destination": "Argentina","origin":"Peru","currency":"USD","price":"600", "arrival":"2023-06-02T12:30:00Z", "aboarding":"2023-06-01T10:30:00Z" }
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
*                bookedFlie:
*                  type: object
*                  example: {"destination": "Argentina","origin":"Peru","currency":"USD","price":"600", "arrival":"2023-06-02T12:30:00Z", "aboarding":"2023-06-01T10:30:00Z" }
*        required: true
*      responses:
*        '200':
*          description: successful operation
*          content:
*            application/json:
*              schema:
*               type: object
*               example: La reserva ha sido actualizada.
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
*      summary: Cancelar una reserva.
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
*               example: La reserva ha sido cancelada.
*/
reservasVuelosRouter.delete("/:id",[validarJwt], reservasVuelosControllers.deleteReservaVuelo)


export default reservasVuelosRouter