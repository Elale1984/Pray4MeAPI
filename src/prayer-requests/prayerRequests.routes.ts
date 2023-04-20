import { Router } from 'express';
import { getPrayerRequests } from './prayerRequests.controller';

const router = Router();
router 
    .route('/prayerRequests')
    .get(getPrayerRequests);

export default router;