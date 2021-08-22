import { ModifiedRequest, ModifiedResponse } from 'interface'
import { CreateRideDto } from '../dto'

export const postRideValidatorMiddleware = (req: ModifiedRequest, res: ModifiedResponse, next) => {
  const createRideDto = req.body as CreateRideDto
  // TODO. validation
  next()
}