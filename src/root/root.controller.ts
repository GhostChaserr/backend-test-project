import { Router } from 'express'

const router = Router()

router.get('/health', (req, res) => {
  res.json({ status: 'OK'  })
})

router.get('/', (req, res) => {
  res.json({ status: 'Rides App!!'  })
})

export default router