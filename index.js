require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const { connectDB } = require('./utils/db')
const PORT = 5000
app.use(express.json())
app.use(cors())


connectDB()


app.get('/', async (req, res) => {
    res.send('Event Management Server is Running ')
})

app.listen(PORT, () => {
    console.log('Sever is running ', PORT);
})