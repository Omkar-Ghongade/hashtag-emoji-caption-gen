import express from 'express';
import imageRoutes from './routes/image.routes.js';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

app.use(express.json());
app.use(cors());

app.use('/images', imageRoutes);