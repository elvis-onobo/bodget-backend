import { Request, Response } from 'express'
import { successHandler } from '../helpers/successHandler'

import { signup, login } from '../services/AuthService'

export const signupUser = async(req:Request, res:Response)=>{
    const data = await signup(req.body)
    return successHandler('Registration Successful', 200, data)(req, res)
}

export const loginUser = async(req:Request, res:Response)=>{
    const data = await login(req.body)
    return successHandler('Login Successful', 200, data)(req, res)
}