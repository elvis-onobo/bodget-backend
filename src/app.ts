import express, { Application } from 'express'
import router from './router'
import { errorMiddleware } from './middleware/errorMiddleware';

const app:Application = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)
app.use(errorMiddleware)

export default app