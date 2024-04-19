import express from 'express';
import { getdata } from '../controllers/image.controllers.js';
import { getcaptions } from '../controllers/image.controllers.js';

const router = express.Router();

router.post('/getdata',getdata)
router.post('/getcaptions',getcaptions)

export default router;