import { Router } from 'express'
import { ModifiedRequest, ModifiedResponse } from 'interface'
import { postRideValidatorMiddleware } from './middlewares'
import { findRides, createRide, findRide, findRideInjectionTest } from './rides.service'
const router = Router()

router.get('/', async (req: ModifiedRequest, res: ModifiedResponse) => {
  return await findRides(req, res)
})

router.get('/:rideID', async (req: ModifiedRequest, res: ModifiedResponse) => {
  return await findRide(req, res)
})

router.get('/injection/test', async (req: ModifiedRequest, res: ModifiedResponse) => {
  return await findRideInjectionTest(req, res)
})


router.post('/', postRideValidatorMiddleware, async (req: ModifiedRequest, res: ModifiedResponse) => {
  return await createRide(req, res)
})

export default router