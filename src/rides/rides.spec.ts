const { createServer } = require('http')
import request from 'supertest'
import runApp from '../app'
import { buildSchemas } from '../db-schema'
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database(':memory:')




describe('Should test entire rides module', () => {
  let rideID: number
  let server: any

  beforeAll(async () => {
    await db.serialize(() => buildSchemas(db))
    const app = runApp(db)
    server = app.listen(3000)

  })

  it('Should check health status', async () => {
    const response = await request(server).get('/')
    expect(response.status).toBe(200)
    const messagePayload = JSON.parse(response.text)
    expect(messagePayload.status).toContain('Rides App')
  })

  it('It Should post new ride data', async () => {
    const ridePayload = {
      startLatitude: 120.0,
      startLongitude: 130.0,
      endLatitude: 150.0,
      endLongitude: 120.0,
      riderName: 'georg',
      driverName: 'george',
      driverVehicle: 'BMW X5'
    }
    const response = await request(server)
      .post('/rides')
      .send(JSON.stringify(ridePayload))
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')

    rideID = response.body.rideID
    expect(response.body.startLat).toBe(ridePayload.startLatitude)
    expect(response.body.startLong).toBe(ridePayload.startLongitude)
    expect(response.status).toBe(200)


  })

  it('It Should query rides', async () => {
    const response = await request(server).get('/rides')
    expect(response.body.rides.length).toBeGreaterThan(0)
    expect(response.status).toBe(200)
  })

  it('It Should query single ride', async () => {
    const response = await request(server).get(`/rides/${rideID}`)
    expect(response.body.rideID).toBe(rideID)
    expect(response.status).toBe(200)
  })

  it('It should throw 400 error if invalid ride id was provided', async () => {
    const response = await request(server).get(`/rides/10`)
    expect(response.status).toBe(400)
  })

  afterAll(async ()  => {
    await Promise.all([
      db.close(),
      server.close()
    ])
  })
})
