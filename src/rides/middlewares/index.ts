import { ModifiedRequest, ModifiedResponse } from 'interface'
import { CreateRideDto } from '../dto'

/*
  Validation Layer. So that, service will have clean data and just does the business logic
*/
export const postRideValidatorMiddleware = (req: ModifiedRequest, res: ModifiedResponse, next) => {
  const createRideDto = req.body as CreateRideDto
  if (createRideDto.startLatitude < -90 || createRideDto.startLatitude > 90 || createRideDto.startLongitude < -180 || createRideDto.startLongitude > 180) {
    return res.status(400).json({
      error_code: 'VALIDATION_ERROR',
      message: 'Start latitude and longitude must be between -90 - 90 and -180 to 180 degrees respectively'
    })
  }

  if (createRideDto.endLatitude < -90 || createRideDto.endLatitude > 90 || createRideDto.endLongitude < -180 || createRideDto.endLongitude > 180) {
    return res.status(400).json({
      error_code: 'VALIDATION_ERROR',
      message: 'End latitude and longitude must be between -90 - 90 and -180 to 180 degrees respectively'
    })
  }

  if (typeof createRideDto.riderName !== 'string' || createRideDto.riderName.length < 1) {
    return res.status(400).json({
      error_code: 'VALIDATION_ERROR',
      message: 'Rider name must be a non empty string'
    })
  }

  if (typeof createRideDto.riderName !== 'string' || createRideDto.riderName.length < 1) {
    return res.status(400).json({
      error_code: 'VALIDATION_ERROR',
      message: 'Rider name must be a non empty string'
    })
  }

  if (typeof createRideDto.driverVehicle !== 'string' || createRideDto.driverVehicle.length < 1) {
    return res.status(400).json({
      error_code: 'VALIDATION_ERROR',
      message: 'Rider name must be a non empty string'
    })
  }

  // TODO. validation
  next()
}