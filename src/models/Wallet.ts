import mongoose, { Schema } from 'mongoose'

export interface WalletInterface {
    userId: string
    amount: mongoose.Decimal128
    balance: mongoose.Decimal128
    reference: string
    isVerified: boolean
    isSuccessful: boolean
}

const walletSchema = new Schema<WalletInterface>({
    userId: { type: String, required: true },
    amount: { type: Schema.Types.Decimal128, required: true },
    balance: { type: Schema.Types.Decimal128, required: true },
    reference: { type: String, unique: true },
    isVerified: { type: Boolean, required: true, default: true },
    isSuccessful: { type: Boolean, required: true, default: false }
}, {
    timestamps: true
})

const Wallet = mongoose.model('Wallet', walletSchema)

export default Wallet