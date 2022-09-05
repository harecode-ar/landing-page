import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import path from 'path'

const { APP_PORT } = process.env

const __dirname = path.resolve()

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (request, response) => {
	response.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(APP_PORT, () => {
	console.log(`Server is running on port ${APP_PORT}`)
})
