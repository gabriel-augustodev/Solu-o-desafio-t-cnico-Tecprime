import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './routes'
import { errorMiddleware } from './middlewares/error.middleware'

dotenv.config()

const app = express()

// Middleware para permitir requisições do frontend
app.use(cors())

// Permite receber JSON no body
app.use(express.json())

// Rotas principais
app.use(routes)

// Middleware global de erro (sempre por último)
app.use(errorMiddleware)

export default app