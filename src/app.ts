import express from 'express'
import helmet from 'helmet'
import { ridesController } from './rides'
import { rootController } from './root'
import { ModifiedRequest } from 'interface'
import { userAgentMiddleware, clientIPMiddleware } from './shared/middlewares'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'


const runApp = (db: any) => {
  const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'Express API for Rides App',
      version: '1.0.0'
    },
    servers: [
      {
        url: 'http://localhost:4000',
        description: 'Development local server'
      }
    ]
  }

  const options = {
    swaggerDefinition,
    apis: [
      '**/*.ts',
    ]
  }

  const swaggerSpec = swaggerJSDoc(options)

  const app = express()

  // Basic express security
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  app.use(helmet())

  // Remove tag so that it wont show what server is ruunin on
  app.disable('x-powered-by')
  app.use(express.json())
  app.use(clientIPMiddleware)
  app.use(userAgentMiddleware)
  app.use((req: ModifiedRequest, res, next) => {
    req.db = db
    next()
  })

  app.use('/', rootController)
  app.use('/rides', ridesController)

  return app
}


export default runApp