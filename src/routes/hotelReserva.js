import express from "express"
import bookingServices from "../controllers/hotelReserva.controller.js";
import validarJwt from "../middleware/validateJwt.js"

const hotelRouter = express.Router()


/**
* @openapi
* tags:
*  - name: ReservaDeHoteles
*    description: Endpoints para obtener los hoteles que esten dispnibles para diferentes destinos.
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
 *     ReservasHoteles:
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
 * /hotel:
*    get:
*      security:
*        - bearerAuth: []
*      tags:
*        - ReservaDeHoteles
*      summary: Devuelve un array de hoteles
*      responses:
*        '200':
*          description: successful operation
*          content:
*            application/json:
*              schema:
*               type: array
*               items:
*                    $ref: "#/components/schemas/ReservasHotelesRE"
*/

hotelRouter.get("/",[validarJwt], bookingServices.getReservasHoteles)

/**
 * @openapi
 * /hotel/reservas:
*    post:
*      security:
*        - bearerAuth: []
*      tags:
*        - ReservaDeHoteles
*      summary: Registrar un nuevo Hotel
*      requestBody:
*        description: Los parametros {nombreHotel,calificacion,ciudad} son OBLIGATORIOS
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/ReservasHoteles'
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
*                    example: Hotel resgistrado
*                  data:
*                    type: object
*                    $ref: "#/components/schemas/ReservasHotelesRE"
*/
hotelRouter.post("/reservas",[validarJwt], bookingServices.postReservasHoteles)


/**
 * @openapi
 * /hotel/reservas/{id}:
*    put:
*      security:
*        - bearerAuth: []
*      tags:
*        - ReservaDeHoteles
*      summary: Actualizar la info de un hotel.
*      parameters:
*        - name: id
*          description: Ingresa el id de la reserva
*          in: path
*          required: true
*          schema:
*            type: string
*      requestBody:
*        description: Parametro a actualizar
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/ReservasHoteles'
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
*                    example: La info del hotel se ha actualizado.
*/
hotelRouter.put("/reservas/:id",[validarJwt], bookingServices.putReservasHoteles)

/**
 * @openapi
 * /hotel/reservas/{id}:
*    delete:
*      security:
*        - bearerAuth: []
*      tags:
*        - ReservaDeHoteles
*      summary: Inhabiblitar un hotel
*      parameters:
*        - name: id
*          description: Escribe el id de la reserva
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
*                    example: Hotel inhabilitado.
*/
hotelRouter.delete("/reservas/:id",[validarJwt], bookingServices.deleteReservasHoteles)

export default hotelRouter