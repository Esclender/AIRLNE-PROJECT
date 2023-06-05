import swaggerUi from "swagger-ui-express"
import swaggerJSDoc from "swagger-jsdoc"


const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'AIRLNE API',
      description:"AIRLNE API is an aeroport library that was made as a project for CERTUS",
      version: '1.0.0',
    },
    servers:[
      {
        url: `http://localhost:10801`
      }
    ]
  },
  apis: ['./src/routes/*.js']
};



const swaggerSpec = swaggerJSDoc(options)

const swaggerDocs = (app, port) => {
  app.use('/api/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  console.log(`Your docs are in port ${port}` );
}


export default swaggerDocs