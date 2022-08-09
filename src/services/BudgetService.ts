import Budget, { BudgetInterface } from '../models/Budget'


export const create = async(payload: BudgetInterface, userId: string) => {
    const budget = new Budget({
        userId: userId,
        title: payload.title,
        description: payload.description
    })

    const savedBudget = await budget.save()

    return savedBudget
}