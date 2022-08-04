import bcrypt from 'bcrypt'
import User from '../models/User'
import { UserInterface } from "src/models/User"

export const signupService = async(payload: UserInterface) => {
    const hashedPassword: String = await bcrypt.hash(payload.password, 12)
    
    const user = new User({
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        phoneNumber: payload.phoneNumber,
        password: hashedPassword,
    })

    const savedUser = await user.save()

    return savedUser
}