import express from 'express';
import {getOfficials,createOfficial} from '../controllers/officials.js'

const router = express.Router();

router.get('/', getOfficials);
router.post('/', createOfficial);

export default router;