import express from 'express'
import HealthCheckController from './controllers/HealthCheckController'
import { signupUser, loginUser } from './controllers/AuthController'

const router = express.Router()

export default router

router.get('/', HealthCheckController.check)
router.post('/signup', signupUser)
router.post('/login', loginUser)