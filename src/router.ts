import express from 'express'
import HealthCheckController from './controllers/HealthCheckController'

const router = express.Router()

export default router

router.get('/', HealthCheckController.check)