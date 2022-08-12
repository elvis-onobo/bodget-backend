import mongoose, { Schema } from 'mongoose'

export interface BudgetItemInterface {
    budgetId: string
    title: string
    description: string
    budgetAmount: mongoose.Decimal128
    actualAmountSpent: mongoose.Decimal128
    isDeleted: boolean
}

const budgetItemSchema = new Schema<BudgetItemInterface>({
    budgetId: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: false },
    budgetAmount: { type: Schema.Types.Decimal128, required: true },
    actualAmountSpent: { type: Schema.Types.Decimal128 },
    isDeleted: { type: Boolean, required: true, default: false }
}, {
    timestamps: true
})

const BudgetItem = mongoose.model('BudgetItem', budgetItemSchema)

export default BudgetItem