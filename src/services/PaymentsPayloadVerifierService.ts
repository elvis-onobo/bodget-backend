import crypto from 'crypto'
import paymentEvents from '../events/PaymentEvents'

let secret = process.env.PAYSTACK_SECRET as string;

export const verifyPayloadAndTriggerEvent = async(payload:any, signature:string)=>{
    //validate event
    const hash = crypto.createHmac('sha512', secret).update(JSON.stringify(payload)).digest('hex');
    if (hash == signature) {
        // Retrieve the request's body
        const event = payload;
        paymentEvents.emit(payload.event)
        // Do something with event  
    }
    return 200;
}