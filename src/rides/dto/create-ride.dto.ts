type CreateRideDto = {
  startLatitude: number
  startLongitude: number
  endLatitude: number
  endLongitude: number
  riderName: string
  driverName: string
  driverVehicle: string
}

export default CreateRideDto