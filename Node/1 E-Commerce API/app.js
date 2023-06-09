require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const authRouter = require('./routes/authRouter')
const userRouter = require('./routes/userRoutes')
const productRouter = require('./routes/productRoutes')
const reviewRouter = require('./routes/reviewRouter')
const orderRouter = require('./routes/orderRoutes')
//database
const connectDB = require('./db/connect')
//remaining packages
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const notfoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
//middleware
app.use(morgan('tiny'))
app.use(express.json())
app.use(cookieParser(process.env.JWT_SECRET))

app.use(express.static('./public'))
app.use(fileUpload())
//routes
app.get('/', (req, res) => {
  console.log(req.signedCookies)
  res.send('e comm api')
})
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/products', productRouter)
app.use('/api/v1/reviews', reviewRouter)
app.use('/api/v1/orders', orderRouter)

app.use(notfoundMiddleware)
app.use(errorHandlerMiddleware)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`Server is connected sucessfully on server ${port}`)
    })
  } catch (error) {}
}
start()
