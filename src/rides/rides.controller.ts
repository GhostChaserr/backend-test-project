import { Router } from 'express'
import { ModifiedRequest, ModifiedResponse } from 'interface'
import { postRideValidatorMiddleware } from './middlewares'
import { findRides, createRide, findRide, findRideInjectionTest } from './rides.service'
const router = Router()

/**
 * @swagger
 * /rides:
 *   get:
 *     summary: Retrive list of available rides
 *     description: Retrives list of available rides. if pagination is not provided will return page 1, limit of 10 rows
 *     responses:
 *       500:
 *         description: General server error
 *       200:
 *         description: List of rides
 */
router.get('/', async (req: ModifiedRequest, res: ModifiedResponse) => {
  return await findRides(req, res)
})

/**
 * @swagger
 * /rides/{rideID}:
 *   get:
 *     summary: Retrive single ride
 *     description: Should return single ride or return error with 400 status code
 *     parameters:
 *       - in: path
 *         name: rideID
 *         required: true
 *         description: Numeric ID of the ride to retrive
 *         schema:
 *           type: integer
 *     responses:
 *       400:
 *         description: Ride was not found
 *       500:
 *         description: General server error
 *       200:
 *         description: Single ride
 */
router.get('/:rideID', async (req: ModifiedRequest, res: ModifiedResponse) => {
  return await findRide(req, res)
})

router.get('/injection/test', async (req: ModifiedRequest, res: ModifiedResponse) => {
  return await findRideInjectionTest(req, res)
})


/**
 * @swagger
 * /rides:
 *   post:
 *     summary: Creates new ride
 *     description: Should create new ride
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              startLatitude:
 *                 type: number
 *                 description: Starting lattitude of ride
 *                 example: 1298.980
 *              startLongitude:
 *                 type: number
 *                 description: Ending longitude of ride
 *                 example: 1298.980
 *              endLatitude:
 *                 type: number
 *                 description: Ending latitude of ride
 *                 example: 1298.980
 *              endLongitude:
 *                 type: number
 *                 description: Ending latitude of ride
 *                 example: 1298.980
 *              roderName:
 *                 type: string
 *                 description: Rider name
 *                 example: george
 *              driverName:
 *                 type: string
 *                 description: Driver name
 *                 example: george
 *              driverVehicle:
 *                 type: string
 *                 description: Vehicle model, name
 *                 example: X5
 *     responses:
 *       201:
 *         description: Ride has been created
 */
router.post('/', postRideValidatorMiddleware, async (req: ModifiedRequest, res: ModifiedResponse) => {
  return await createRide(req, res)
})

export default router