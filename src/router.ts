import express from 'express'
import HealthCheckController from './controllers/HealthCheckController'
import { signup } from './controllers/AuthController'

const router = express.Router()

export default router

router.get('/', HealthCheckController.check)
router.post('/user', signup)