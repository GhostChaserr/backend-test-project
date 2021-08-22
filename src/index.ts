import runApp from './app'
import sqlite3 from 'sqlite3'
import { db, buildSchemas } from 'schema'

db.serialize(() => {
  buildSchemas(db)
  const server = runApp(db)
  server.listen(4000, () => {
    console.log('Server is up...')
  })
})