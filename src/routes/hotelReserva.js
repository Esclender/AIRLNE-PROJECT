import mongoose from "mongoose";
import express from "express"
import db from "../controllers/project.module.js"
import bookingServices from "../controllers/hotelReserva.services.js";

const hotelRouter = express.Router()


/**
* @openapi
* tags:
*  - name: ReservaDeHoteles
*    description: Endpoints para obtener los hoteles que esten dispnibles para diferentes destinos.
*/

/**
 * @openapi
 * components:
 *   schemas:
 *     ReservasHoteles:
 *       type: object
 *       properties:
 *         nombreHotel: 
 *           type: string
 *           example: Hotel Plaza El Bosque Ebro
 *         calificacion:
 *           type: number
 *           example: 8.8
 *         ciudad:
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
 *         _id: 
 *           type: string
 *           example: 6478b0eaa559cc7884a58952
 *         nombreHotel: 
 *           type: string
 *           example: Hotel Plaza El Bosque Ebro
 *         calificacion:
 *           type: number
 *           example: 8.8
 *         ciudad:
 *           type: string
 *           example: Santiago de chile
 */


/**
 * @openapi
 * /hotel:
*    get:
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

hotelRouter.get("/", bookingServices.getReservasHoteles)

/**
 * @openapi
 * /hotel/reservas:
*    post:
*      tags:
*        - ReservaDeHoteles
*      summary: Crear una reserva de hotel
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
*               type: array
*               items:
*                    $ref: "#/components/schemas/ReservasHotelesRE"
*/
hotelRouter.post("/reservas", bookingServices.postReservasHoteles)


/**
 * @openapi
 * /hotel/reservas/{id}:
*    put:
*      tags:
*        - ReservaDeHoteles
*      summary: Actualizar una reserva de hotel.
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
*               type: array
*               items:
*                    $ref: "#/components/schemas/ReservasHotelesRE"
*/
hotelRouter.put("/reservas/:id", bookingServices.putReservasHoteles)

/**
 * @openapi
 * /hotel/reservas/{id}:
*    delete:
*      tags:
*        - ReservaDeHoteles
*      summary: Borrar una reserva
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
*               type: array
*               items:
*                    $ref: "#/components/schemas/ReservasHotelesRE"
*/
hotelRouter.delete("/reservas/:id", bookingServices.deleteReservasHoteles)

export default hotelRouter