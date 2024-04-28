import express from 'express'
import cors from 'cors'
import connectMongo from './utils/mongoClient.js'
import router from './routes/index.js'

const app = express()

app.use(express.json())
app.use('/api', router)

app.listen(4000, async () => {
    await connectMongo()
    console.log('app running on port 4000')
})
