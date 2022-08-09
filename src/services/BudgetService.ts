import Budget, { BudgetInterface } from '../models/Budget'
import { NotFound } from 'http-errors'

// Create a budget
export const create = async(payload: BudgetInterface, userId: string) => {
    const budget = new Budget({
        userId: userId,
        title: payload.title,
        description: payload.description
    })

    const savedBudget = await budget.save()

    return savedBudget
}

// list all budgets
export const list = async(userId: string) => {
    const budgets = await Budget.find({ userId }).exec()
    
    if(budgets == null){
        throw new NotFound('No Budget Found')
    }

    return budgets
}