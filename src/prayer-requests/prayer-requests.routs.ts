import { Router } from "express";
import * as PrayerRequestController from './prayer-requests.controller';

const router = Router();

// GET /analytics
router.get('/prayer-requests', PrayerRequestController.readPrayerRequests);

// GET /prayer-requests/:userId
router.get('/prayer-requests/:userId', PrayerRequestController.readPrayerRequests);

// GET /prayer-requests/:prayerRequestId
router.get('/prayer-requests/:prayerRequestId', PrayerRequestController.readPrayerRequestById);

// POST /analytics
router.post('/prayer-requests', PrayerRequestController.createPrayerRequest);

// PUT /analytics
router.put('/prayer-requests', PrayerRequestController.updatePrayerRequest);

// DELETE /analytics/:userId
router.delete('/prayer-requests/:prayerRequestId', PrayerRequestController.deletePrayerRequest);

export default router;
