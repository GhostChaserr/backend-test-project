import { CreateRideDto } from './dto'
import { FetchRideQueryResponse, InsertRideResponse, FetchRidesResponse, IRide } from './interface/ride-interface'

export const fetchAllRides = async (db: any, page: number, size: number): Promise<FetchRidesResponse> => {
  const [fetchedRows, totalCount] = await Promise.all([
    new Promise((resolve, reject) => {
      const skip = (page - 1) * size
      const SQL = `
        SELECT *
        FROM Rides
        LIMIT ${size}
        OFFSET ${skip}
      `
      db.all(SQL, (err, rows) => {
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
    }),
    new Promise((resolve, reject) => {
      const SQL = `
        SELECT COUNT(*) as Total
        FROM Rides
      `
      db.all(SQL, (err, rows) => {
        if (err) {
          reject({
            error: 'SERVER_ERROR',
            status: 500
          })
        }
        resolve(rows[0].Total)
      })
    })
  ])
  const total = totalCount as number
  const rides = fetchedRows as IRide[]
  return {
    total,
    rides
  }
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