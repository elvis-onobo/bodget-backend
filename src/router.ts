import express from 'express'
import authMiddleware from './middleware/authMiddleware'
import HealthCheckController from './controllers/HealthCheckController'
import { signupUser, loginUser } from './controllers/AuthController'

const router = express.Router()

export default router

router.get('/', authMiddleware, HealthCheckController.check)
router.post('/signup', signupUser)
router.post('/login', loginUser)