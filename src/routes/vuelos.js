import mongoose from "mongoose";
import express from "express"
import db from "../database/project.module.js"
import vuelosServices from "../controllers/vuelos.controller.js";

const vuelosRouter = express.Router()


/**
* @openapi
* tags:
*  - name: vuelos
*    description: Endpoints para obtener todos los vuelos que esten disponibles para diferentes destinos.
*/

/**
 * @openapi
 * components:
 *   schemas:
 *     vuelos:
 *       type: object
 *       properties:
 *         destino: 
 *           type: string
 *           example: Argentina
 *         origen:
 *           type: String
 *           example: Perú
 *         idaYvuelta:
 *           type: Boolean
 *           example: false
 *         Salida:
 *           type: string
 *           format: date
 *           example: "2023-06-01T10:30:00Z" 
 *         tarifa$:
 *           type: Namber
 *           example: 250.60
 *         llegada:
 *           type: string
 *           format: date
 *           example: "2023-06-02T12:30:00Z"
 */


/**
 * @openapi
 * components:
 *   schemas:
 *     vuelosGET:
 *       type: object
 *       properties:
 *         _id: 
 *           type: string
 *           example: 6478b0eaa559cc7884a58952
 *         destino: 
 *           type: string
 *           example: Argentina
 *         origen:
 *           type: String
 *           example: Perú
 *         idaYvuelta:
 *           type: Boolean
 *           example: false
 *         Salida:
 *           type: string
 *           format: date
 *           example: "2023-08-05T10:30:00Z" 
 *         tarifa$:
 *           type: Namber
 *           example: 250.60
 *         llegada:
 *           type: string
 *           format: date
 *           example: "2023-08-06T12:30:00Z"
 */


/**
 * @openapi
 * /vuelos:
*    get:
*      tags:
*        - vuelos
*      summary: Devuelve un array de vuelos
*      responses:
*        '200':
*          description: successful operation
*          content:
*            application/json:
*              schema:
*               type: array
*               items:
*                    $ref: "#/components/schemas/vuelosGET"
*/

vuelosRouter.get("/", vuelosServices.getvuelos)

/**
 * @openapi
 * /vuelos:
*    post:
*      tags:
*        - vuelos
*      summary: Crear un vuelo
*      requestBody:
*        description: Los parametros {destino,origen,tarifa, llegada, Salida} son OBLIGATORIOS
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/vuelos'
*        required: true
*      responses:
*        '200':
*          description: successful operation
*          content:
*            application/json:
*              schema:
*               type: array
*               items:
*                    $ref: "#/components/schemas/vuelosGET"
*/
vuelosRouter.post("/", vuelosServices.postvuelos)


/**
 * @openapi
 * /vuelos/{id}:
*    put:
*      tags:
*        - vuelos
*      summary: Actualizar un vuelo.
*      parameters:
*        - name: id
*          description: Ingresa el id del vuelo
*          in: path
*          required: true
*          schema:
*            type: string
*      requestBody:
*        description: Parametro a actualizar
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/vuelos'
*        required: true
*      responses:
*        '200':
*          description: successful operation
*          content:
*            application/json:
*              schema:
*               type: array
*               items:
*                    $ref: "#/components/schemas/vuelosGET"
*/
vuelosRouter.put("/:id", vuelosServices.putvuelos)

/**
 * @openapi
 * /vuelos/{id}:
*    delete:
*      tags:
*        - vuelos
*      summary: Borrar un vuelo
*      parameters:
*        - name: id
*          description: Escribe el id del vuelo
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
*                    $ref: "#/components/schemas/vuelosGET"
*/
vuelosRouter.delete("/:id", vuelosServices.deletevuelos)

export default vuelosRouter