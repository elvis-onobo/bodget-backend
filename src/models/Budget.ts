import mongoose, { Schema } from 'mongoose'

export interface BudgetInterface {
    userId: string
    title: string
    description: string
    isDeleted: boolean
}

const budgetSchema = new Schema<BudgetInterface>({
    userId: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: false },
    isDeleted: { type: Boolean, required: true, default: false }
}, {
    timestamps: true
})

const Budget = mongoose.model('Budget', budgetSchema)

export default Budget