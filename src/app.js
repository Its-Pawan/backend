import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { LIMIT } from "./constants.js"
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

app.use(express.json({ limit: LIMIT }))
app.use(express.urlencoded({ extended: true, limit: LIMIT }))
app.use(express.static("public"))
app.use(cookieParser())



// Routes import------>

import userRouter from './routes/user.routes.js'


// routes declaration
app.use("/api/v1/users", userRouter)

// ex url => localhost:3000/api/v1/users/register 


export { app }