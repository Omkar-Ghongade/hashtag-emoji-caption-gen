import express from 'express';
import { getdata } from '../controllers/image.controllers.js';

const router = express.Router();

router.post('/getdata',getdata)

export default router;