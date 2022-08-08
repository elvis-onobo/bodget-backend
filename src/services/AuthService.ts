import dotenv from "dotenv"
dotenv.config({ path: './.env', debug: true }) // set debug: true to see dotenv errors
import bcrypt from 'bcrypt'
import User from '../models/User'
import { NotFound } from "http-errors"
import jwt from "jsonwebtoken"
import { UserInterface } from "src/models/User"
import { loginInterface } from "../interfaces/loginInterface"

const APP_KEY = process.env.APP_KEY as unknown as string

export const signup = async(payload: UserInterface) => {
    const hashedPassword: String = await bcrypt.hash(payload.password, 12)
    
    const user = new User({
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        phoneNumber: payload.phoneNumber,
        password: hashedPassword,
    })

    const savedUser = await user.save()

    // send email

    return savedUser
}

export const login = async(payload: loginInterface) => {
    const user = await User.findOne({ email: payload.email }).exec()

    if(user == null){
        throw new NotFound('User Not Found')
    }

    const passwordsMatch = await bcrypt.compare(payload.password, user.password)

    const token = jwt.sign(user.toJSON(), APP_KEY, {
        expiresIn: "23h"
    })

    if(passwordsMatch){
        return {
            user,
            token
        }
    }
    return 'Invalid User'
} 