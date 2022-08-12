import express from 'express'
import authMiddleware from './middleware/authMiddleware'
import HealthCheckController from './controllers/HealthCheckController'
import { signupUser, loginUser } from './controllers/AuthController'
import { createBudget, listBudgets, fetchBudget, updateBudget, deleteBudget } from './controllers/BudgetController'
import { createBudgetItem, listBudgetItems, fetchBudgetItems, updateBudgetItems, deleteABudgetItem } from './controllers/BudgetItemController'

const router = express.Router()

export default router

router.get('/', authMiddleware, HealthCheckController.check)
router.post('/signup', signupUser)
router.post('/login', loginUser)
router.post('/create-budget', authMiddleware, createBudget)
router.get('/list-budgets', authMiddleware, listBudgets)
router.get('/fetch-budget', authMiddleware, fetchBudget)
router.post('/update-budget', authMiddleware, updateBudget)
router.delete('/delete-budget', authMiddleware, deleteBudget)
router.post('/create-budget-item', authMiddleware, createBudgetItem)
router.get('/list-budget-items', authMiddleware, listBudgetItems)
router.get('/fetch-budget-item', authMiddleware, fetchBudgetItems)
router.put('/update-budget-item', authMiddleware, updateBudgetItems)
router.delete('/delete-budget-item', authMiddleware, deleteABudgetItem)

