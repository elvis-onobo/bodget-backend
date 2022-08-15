import axios from 'axios'

const payments = axios.create({
    baseURL: 'https://api.paystack.co',
    headers: {
        'Authorization': `Bearer ${process.env.PAYSTACK_SECRET}`
    }
})

export default payments