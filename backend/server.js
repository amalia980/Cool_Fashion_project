const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const path = require('path')

//importera alla våra routes
const orderRouter = require('./routes/order')
const userRouter = require('./routes/user')
const productRouter = require('./routes/product')
const postRouter = require('./routes/email')

//implementation of use local .env file
require('dotenv').config()

//middleware
app.use(cookieParser())
app.use(cors())
app.use(express.json())

//lägg till alla våra routes
app.use('/api/order/', orderRouter)
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api', postRouter)

//static folder for frontend
app.use(express.static(path.join(__dirname, '../frontend/build')))

mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true },
  () => console.log('Connected to DB'),
)

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
