import { ModifiedRequest, ModifiedResponse } from 'interface'
import { CreateRideDto } from './dto'
import { fetchAllRides, insertRide, fetchRide } from './rides.sql'

export const findRides = async (req: ModifiedRequest, res: ModifiedResponse) => {
  try {
    const page = req.query.page as string || '1'
    const size = req.query.size as string  || '10'
    const response = await fetchAllRides(req.db, parseInt(page), parseInt(size))
    return res.json({ total: response.total, ...response.rides, page: parseInt(page), size:  parseInt(size)})
  } catch (err) {
    const { status, error } = err
    return res.status(status).json({ error })
  }
}

export const createRide = async (req: ModifiedRequest, res: ModifiedResponse) => {
  try {
    const newRide = req.body as CreateRideDto
    const response = await insertRide(req.db, newRide)
    return res.json(response.ride)
  } catch (err) {
    const { status, error } = err
    return res.status(status).json({ error })
  }
}

export const findRide = async (req: ModifiedRequest, res: ModifiedResponse) => {
  try {
    const ride = await fetchRide(req.db, parseInt(req.params.rideID))
    return res.json(ride)
  } catch (err) {
    const { status, error } = err
    return res.status(status).json({ error })
  }
}