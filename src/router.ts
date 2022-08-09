import express from 'express'
import authMiddleware from './middleware/authMiddleware'
import HealthCheckController from './controllers/HealthCheckController'
import { signupUser, loginUser } from './controllers/AuthController'
import { createBudget, listBudgets, fetchBudget } from './controllers/BudgetController'

const router = express.Router()

export default router

router.get('/', authMiddleware, HealthCheckController.check)
router.post('/signup', signupUser)
router.post('/login', loginUser)
router.post('/create-budget', authMiddleware, createBudget)
router.get('/list-budgets', authMiddleware, listBudgets)
router.get('/fetch-budget', authMiddleware, fetchBudget)