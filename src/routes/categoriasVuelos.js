import mongoose from "mongoose";
import express from "express"
import db from "../controllers/project.module.js"
import categoriasVservices from "../controllers/categoriasVuelos.services.js";

const categoriasVuelosRuter = express.Router()


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
 *         nameHotel: 
 *           type: string
 *           example: Hotel Plaza El Bosque Ebro
 *         qualification:
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
 *         _id: 
 *           type: string
 *           example: 6478b0eaa559cc7884a58952
 *         nameHotel: 
 *           type: string
 *           example: Hotel Plaza El Bosque Ebro
 *         qualification:
 *           type: number
 *           example: 8.8
 *         city:
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

categoriasVuelosRuter.get("/", categoriasVservices.getcategoriasVuelos)

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
categoriasVuelosRuter.post("/", categoriasVservices.postcategoriasVuelos)


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
categoriasVuelosRuter.put("/:id", categoriasVservices.putcategoriasVuelos)

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
categoriasVuelosRuter.delete("/:id", categoriasVservices.deletecategoriasVuelos)

export default categoriasVuelosRuter