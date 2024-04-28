import mongoose from 'mongoose'

mongoose.connection.on('error', (err) => console.log(err))
mongoose.connection.on('connected', () => console.log('mongoose connected'))

export default async function connectMongo() {
    try {
        await mongoose.connect(process.env.MONGO_URI as string)
    } catch (e) {
        console.log(e)
    }
}
