import { Request, Response } from 'express'
import { successHandler } from '../helpers/successHandler'

import { create } from '../services/BudgetService'

export const createBudget = async(req:Request, res:Response)=>{
    // add validation
    console.log('>>>>> ', req.user._id);
    
    const data = await create(req.body, req.user._id)
    return successHandler('Budget created Successfully', 200, data)(req, res)
}