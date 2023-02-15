import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './mongodb/connectDB.js'
import userRouter from './routes/user.routes.js'
import propertyRoutes from './routes/property.routes.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json({ limit: '50mb' }))

app.get('/', (req, res) => {
  res.send({ message: 'hello server!' })
})

app.use('/api/v1/users', userRouter)

app.use('/api/v1/properties', propertyRoutes)

const startServer = async () => {
  try {
    // connect to database
    connectDB(process.env.MONGODB_URL)
    app.listen(process.env.PORT, () =>
      console.log(`Server listening on port http://localhost:${process.env.PORT}`),
    )
  } catch (error) {
    console.log(error)
  }
}

startServer()
