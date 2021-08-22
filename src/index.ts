import runApp from './app'
import { db, buildSchemas } from  './db-schema'

db.serialize(() => {
  buildSchemas(db)
  const server = runApp(db)
  server.listen(4000, () => {
    console.log('Server is up...')
  })
})