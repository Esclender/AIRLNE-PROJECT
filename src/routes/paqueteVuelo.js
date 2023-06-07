import express from "express";
import paqueteServices from "../controllers/paqueteVuelo.controller.js";

const paqueteRouter = express.Router();

/**
 * @openapi
 * tags:
 *  - name: pasajero
 *    description: Endpoints para obtener todos los pasajeros y sus destinos.
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     pasajero:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Gerson Favian
 *         LastName:
 *           type: String
 *           example: Arcentales Zavala
 *         Age:
 *           type: Number
 *           example: 19
 *         Passport_N:
 *           type: string
 *           example: "ZAB000254"
 *         Destination:
 *           type: String
 *           example: Argentina
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
 * /pasajero:
 *    get:
 *      tags:
 *        - pasajero
 *      summary: Devuelve un array de pasajeros
 *      responses:
 *        '200':
 *          description: successful operation
 *          content:
 *            application/json:
 *              schema:
 *               type: array
 *               items:
 *                    $ref: "#/components/schemas/pasajeroGET"
 */

paqueteRouter.get("/", paqueteServices.getpaquete);

/**
 * @openapi
 * /pasajero:
 *    post:
 *      tags:
 *        - pasajero
 *      summary: Agregar un pasajero
 *      requestBody:
 *        description: Los parametros {name,LastName,Age, passport_N, Destination} son OBLIGATORIOS
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/pasajero'
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
 *                    example: Pasajero registrado.
 *                  data:
 *                    type: object
 *                    $ref: "#/components/schemas/pasajeroGET"
 */
paqueteRouter.post("/", paqueteServices.postpaquete);

/**
 * @openapi
 * /pasajero/{id}:
 *    put:
 *      tags:
 *        - pasajero
 *      summary: Actualizar a un pasajero.
 *      parameters:
 *        - name: id
 *          description: Ingresa el id del pasajero
 *          in: path
 *          required: true
 *          schema:
 *            type: string
 *      requestBody:
 *        description: Parametro a actualizar
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/pasajero'
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
 *                    example: Info del Pasajero actualizada.
 */
paqueteRouter.put("/:id", paqueteServices.putpaquete);

/**
 * @openapi
 * /pasajero/{id}:
 *    delete:
 *      tags:
 *        - pasajero
 *      summary: Borrar a un pasajero
 *      parameters:
 *        - name: id
 *          description: Escribe el id del pasajero
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
 *                    example: El pasajero ha cancelado su vuelo.
 */
paqueteRouter.delete("/:id", paqueteServices.deletepaquete);

export default paqueteRouter;