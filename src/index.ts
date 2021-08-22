import runApp from './app'
import sqlite3 from 'sqlite3'

export const buildSchemas = (dbInsance: any) => {
  const createRideTableSchema = `
    CREATE TABLE Rides
    (
    rideID INTEGER PRIMARY KEY AUTOINCREMENT,
    startLat DECIMAL NOT NULL,
    startLong DECIMAL NOT NULL,
    endLat DECIMAL NOT NULL,
    endLong DECIMAL NOT NULL,
    riderName TEXT NOT NULL,
    driverName TEXT NOT NULL,
    driverVehicle TEXT NOT NULL,
    created DATETIME default CURRENT_TIMESTAMP
    )
  `
  dbInsance.run(createRideTableSchema)
  return db
}

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database(':memory:')

db.serialize(() => {
  buildSchemas(db)
  const server = runApp(db)
  server.listen(4000, () => {
    console.log('Server is up...')
  })
})