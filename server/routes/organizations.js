import express from 'express';
import {getOrganization,createOrganization} from '../controllers/organizations.js'

const router = express.Router();

router.get('/', getOrganization);
router.post('/', createOrganization);

export default router;