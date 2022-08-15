import EventEmitter from 'events'

const paymentEvent = new EventEmitter()

export default paymentEvent

paymentEvent.on('charge.success', async()=>{
    console.log('Payment successful');
})

paymentEvent.on('transfer.success', async()=>{
    console.log('Transfer successful');

})
paymentEvent.on('transfer.failed', async()=>{
    console.log('Payment failed');
    
})
paymentEvent.on('transfer.reversed', async()=>{
    console.log('Transfer reversed');
})