import mongoose, { Schema } from 'mongoose'

export interface UserInterface {
    firstName: string
    lastName: string
    email:string
    phoneNumber:string
    password:string
    isActive:boolean
    isVerified:boolean
}

const userSchema = new Schema<UserInterface>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, unique: true },
    password: { type: String, required: true },
    isActive: { type: Boolean, required: true, default: true },
    isVerified: { type: Boolean, required: true, default: false }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User