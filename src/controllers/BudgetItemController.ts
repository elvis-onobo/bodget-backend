import { Request, Response } from 'express'
import { successHandler } from '../helpers/successHandler'
import { create, list, fetch, update, deleteBudgetItem } from '../services/BudgetItemService'

export const createBudgetItem = async(req:Request, res:Response)=>{
    const budgetId =  req.query.budgetId as string
    const data = await create(req.body, budgetId)
    return successHandler('Budget item created successfully', 200, data)(req, res)
}

export const listBudgetItems = async(req:Request, res:Response)=>{
    const budgetId = req.query.budgetId as string
    const data = await list(budgetId)
    return successHandler('Budget items listed successfully', 200, data)(req, res)
}

export const fetchBudgetItems = async(req:Request, res:Response)=>{
    const budgetItemId = req.query.budgetItemId as string
    const data = await fetch(budgetItemId)
    return successHandler('Budget item fetched successfully', 200, data)(req, res)
}

export const updateBudgetItems = async(req:Request, res:Response)=>{
    const budgetItemId = req.query.budgetItemId as string
    const data = await update(budgetItemId, req.body)
    return successHandler('Budget item updated successfully', 200, data)(req, res)
}


export const deleteABudgetItem = async(req:Request, res:Response)=>{
    const budgetItemId = req.query.budgetItemId as string
    const data = await deleteBudgetItem(budgetItemId)
    return successHandler('Budget item deleted successfully', 200, data)(req, res)
}