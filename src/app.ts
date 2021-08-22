import express from 'express'
import { ridesController } from './rides'
import { rootController } from './root'
import { ModifiedRequest } from 'interface'

const runApp = (db: any) => {
  const app = express()

  app.use(express.json())
  app.use((req: ModifiedRequest, res, next) => {
    req.db = db
    next()
  })

  app.use('/', rootController)
  app.use('/rides', ridesController)

  return app
}


export default runApp