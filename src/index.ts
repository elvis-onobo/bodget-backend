import 'express-async-errors'
import cors from 'cors'
import helmet from 'helmet'

import app from './app'
import db from './config/db'

const PORT = 3000
// connect to database
db()

app.use(cors({
    origin: 'process.env.FRONTEND_APP_URL'
}))
app.use(helmet())
app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`)
})