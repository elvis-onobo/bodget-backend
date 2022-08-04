import { Request, Response } from 'express'
import bcrypt from 'bcrypt'


import { signupService } from '../services/AuthService'

export const signup = async(req:Request, res:Response)=>{
    const data = await signupService(req.body)

    return res.json({
        status: 200,
        data
    })
}