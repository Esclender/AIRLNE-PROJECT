import express from "express"
import loginController from "../controllers/auth.controller.js";

const Router = express.Router()


/**
* @openapi
* tags:
*  - name: auth
*    description: Endpoints para verificar tu usuario y usaar todoso los servicios
*/

/**
 * @openapi
 * components:
 *   schemas:
 *     creddentials:
 *       type: object
 *       properties:
 *         email: 
 *           type: string
 *           example: correo@gmail.com
 *         password:
 *           type: String
 *           example: 12345M
 */

/**
 * @openapi
 * /auth/login:
*    post:
*      tags:
*        - auth
*      summary: Obtener tu token
*      requestBody:
*        description: Los parametros {email, password} son OBLIGATORIOS
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/creddentials'
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
*                    example: Usuario verificado.
*                  token:
*                    type: string
*                    example: Aqui te dara tu token.
*/

Router.post("/login", loginController.loginUser)

/**
 * @openapi
 * /auth/register:
*    post:
*      tags:
*        - auth
*      summary: Registrarte
*      requestBody:
*        description: Los parametros {email, password} son OBLIGATORIOS
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/creddentials'
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
*                    example: Usuario registrado.
*/

Router.post("/register", loginController.registerUser)

export default Router