import { CreateRideDto } from './dto'
import { FetchRideQueryResponse, InsertRideResponse, FetchRidesResponse } from './interface/ride-interface'


export const fetchAllRides = async (db: any): Promise<FetchRidesResponse> => {
  return await new Promise((resolve, reject) => {
    db.all('SELECT * FROM Rides', (err, rows) => {
      if (err) {
        reject({
          error: 'SERVER_ERROR',
          status: 500
        })
      }
      if (rows.length === 0) {
        resolve({
          rides: rows
        })
      }
      resolve({
        rides: rows
      })
    })
  })
}

export const insertRide = async (db: any, newRide: CreateRideDto): Promise<InsertRideResponse> => {
  return await new Promise((resolve, reject) => {
    const values = [
      newRide.startLatitude,
      newRide.startLongitude,
      newRide.endLatitude,
      newRide.endLongitude,
      newRide.riderName,
      newRide.driverName,
      newRide.driverVehicle
    ]
    db.run('INSERT INTO Rides(startLat, startLong, endLat, endLong, riderName, driverName, driverVehicle) VALUES (?, ?, ?, ?, ?, ?, ?)', values, function (err) {
      if (err) {
        console.log(err)
        reject({
          error: 'SERVER_ERROR',
          status: 500
        })
      }
      db.all('SELECT * FROM Rides WHERE rideID = ?', this.lastID, (queryErr, rows) => {
        if (queryErr) {
          reject({
            error: 'SERVER_ERROR',
            status: 500
          })
        }
        resolve({
          ride: rows[0]
        })
      })
    })
  })
}

export const fetchRide = (db: any, rideID: number): Promise<FetchRideQueryResponse> => {
  console.log('Ride ID', rideID)
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM Rides WHERE rideID='${rideID}'`, (err, rows) => {
      if (err) {
        reject({
          error: 'SERVER_ERROR',
          status: 500
        })
      }
      if (rows.length === 0) {
        reject({
          error: 'RIDES_NOT_FOUND_ERROR',
          status: 400
        })
      }
      resolve(rows[0])
    })
  })

}