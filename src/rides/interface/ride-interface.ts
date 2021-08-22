export interface IRide {
  rideID: number
  startLat: number
  endLat: number
  endLong: number
  riderName: string
  driverName: string
  driverVehicle: string
  created: Date
}

export interface FetchRideQueryResponse {
  ride?: IRide
  error?: string
  status?: number
}

export interface InsertRideResponse extends FetchRideQueryResponse {}
export interface FetchRidesResponse extends FetchRideQueryResponse {
  rides?: IRide[]
  total: number
}
