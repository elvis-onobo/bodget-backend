import { Request, Response } from 'express'
import { successHandler } from '../helpers/successHandler'

import { signupService } from '../services/AuthService'

export const signup = async(req:Request, res:Response)=>{
    const data = await signupService(req.body)
    return successHandler('Registration Successful', 200, data)(req, res)
}