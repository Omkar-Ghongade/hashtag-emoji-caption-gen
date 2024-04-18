import express from 'express';
import imageRoutes from './routes/image.routes.js';

const app = express();

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

app.use(express.json());

app.use('/images', imageRoutes);