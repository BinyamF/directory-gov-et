import express from 'express';
const router = express.Router();
import {handelNewUser} from '../controllers/userRegistration.js';

router.post('/', handelNewUser);

export default router;