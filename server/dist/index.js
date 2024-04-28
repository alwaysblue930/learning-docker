import express from 'express';
import cors from 'cors';
import connectMongo from './utils/mongoClient.js';
const app = express();
app.use(cors({
    origin: process.env.REACT_APP_URI,
    credentials: true,
}));
app.get('/', (req, res) => {
    console.log('node server endpoint');
    res.send('hello world test!');
});
app.listen(4000, async () => {
    await connectMongo();
    console.log('app running on port 4000');
});
