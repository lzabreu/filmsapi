import 'express-async-errors'
import { AppError } from './utils/AppError.js'
import express, { json } from 'express'
import routes from './routes/index.js'
//import { migrationsRun } from './database/sqlite/migrations/index.js'

const app = express()
app.use(json()) //Para saber que o post usa json

//migrationsRun()

app.use(routes)

app.use((error, req, res, next) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({status: 'error', message: error.message })
    } else {
        return res.status(500).json({status: 'error', message: 'Internal server error' })
    }
})

const PORT = 3333 
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})