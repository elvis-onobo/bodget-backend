import bcrypt from 'bcrypt'
import User from '../models/User'
import { UserInterface } from "src/models/User"
import { loginInterface } from "../interfaces/loginInterface"
import { NotFound } from "http-errors"

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
    const user = await User.findOne({ email: payload.email }).exec();

    if(user == null){
        throw new NotFound('User Not Found')
    }

    const passwordsMatch = await bcrypt.compare(payload.password, user.password)

    if(passwordsMatch){
        return user
    }
    return 'Invalid User'
} 