import mongoose  from 'mongoose'

const db = async () => {
    try {
         await mongoose.connect('mongodb://localhost:27017/bodget')
         console.info(`Connected to database on Worker process: ${process.pid}`)
         return mongoose.Connection
    } catch (error) {
        console.log('Failed to connect to MongoDB', error);
    }
}

export default db