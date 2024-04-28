import { createClient } from 'redis'

const client = createClient({
    url: process.env.REDIS_URI,
})

client.on('error', (err) => console.log('Redis client error', err))
client.on('connect', () => console.log('Redis connected'))

await client.connect()

export default client
