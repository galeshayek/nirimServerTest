import { json } from 'body-parser'
import express from 'express'
import userRouter from './router/users'
import logger from './middleware/logger'
import errorHandler from './middleware/error-handler'
import notFound from './middleware/not-found'
import connect from './db/connection'
import cors from 'cors'
import ConfigEnv from './config'

const port = 8080

ConfigEnv()
connect()
const app = express()
app.use(cors())
app.use(json());
app.use(logger);
app.use('/api/v1/users', userRouter)
app.use(errorHandler)
app.use(notFound);

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}/api/v1/users`)
})