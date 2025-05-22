import express from 'express'
import cors from 'cors'
import 'dotenv/config'


import connectDB from './config/mongodb.js'

const PORT = process.env.PORT || 5000
const app = express()


app.use(express.json())
app.use(cors())

await connectDB()


app.get('/check', (req, res) => { 
    res.send('API Working')
})

app.get('/', (req,res) => {
    res.send('Home Page')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

