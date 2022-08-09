import { Request, Response } from 'express'
import { successHandler } from '../helpers/successHandler'

import { create, list, fetch } from '../services/BudgetService'

export const createBudget = async(req:Request, res:Response)=>{
    const data = await create(req.body, req.user._id)
    return successHandler('Budget created Successfully', 200, data)(req, res)
}

export const listBudgets = async(req:Request, res:Response) => {
    const data = await list(req.user._id)
    return successHandler('Budget list found', 200, data)(req, res)
}

export const fetchBudget = async(req:Request, res:Response) => {
    const budgetId = req.query.budgetId as string
    const data = await fetch(budgetId)
    return successHandler('Budget found', 200, data)(req, res)
}