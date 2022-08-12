import BudgetItem, { BudgetItemInterface } from '../models/BudgetItem'
import isNull from '../helpers/isNull'
// Create a budget
export const create = async(payload: BudgetItemInterface, budgetId: string) => {
    const budgetItem = new BudgetItem({
        budgetId: budgetId,
        title: payload.title,
        description: payload.description,
        budgetAmount: payload.budgetAmount,
        actualAmountSpent: payload.actualAmountSpent,
    })
    const savedBudgetItem = await budgetItem.save()
    return savedBudgetItem
}

export const list = async(budgetId: string) => {
    const budgets = await BudgetItem.find({ budgetId }).exec()
    isNull(budgets, 'You have not added any item to this budget')
    return budgets
}

export const fetch = async(budgetItemId: string) => {
    const budgetItem = await BudgetItem.findById(budgetItemId).exec()
    isNull(budgetItem, 'Budget item not found')
    return budgetItem
}

export const update = async(budgetItemId:string, payload:BudgetItemInterface) => {
    const budgetItem = await BudgetItem.findByIdAndUpdate(budgetItemId, payload)
    return budgetItem
}

export const deleteBudgetItem = async(budgetItemId:string) => {
    const budgetItem = await BudgetItem.findById(budgetItemId)
    
    if(budgetItem == null){
        return 'Budget item not found'
    }

    budgetItem.isDeleted = true
    await budgetItem.save()
    return true
}