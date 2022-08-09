import Budget, { BudgetInterface } from '../models/Budget'
import isNull from '../helpers/isNull'
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
    isNull(budgets, 'You have not created any budget yet')
    return budgets
}

export const fetch = async(budgetId: string) => {
    const budget = await Budget.findById(budgetId).exec()
    isNull(budget, 'Budget not found')
    return budget
}

export const update = async(budgetId:string, payload:BudgetInterface) => {
    const budget = await Budget.findByIdAndUpdate(budgetId, payload)
    return budget
}

export const deleteABudget = async(budgetId:string) => {
    const budget = await Budget.findById(budgetId)
    
    if(budget == null){
        return 'Budget not found'
    }

    budget.isDeleted = true
    await budget.save()
    return true
}