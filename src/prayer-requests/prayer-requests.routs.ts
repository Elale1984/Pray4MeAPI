import { Router } from "express";
import * as PrayerRequestController from './prayer-requests.controller';

const router = Router();

// GET // POST /prayer-requests
router.get('/prayer-requests', PrayerRequestController.readPrayerRequests);

// GET /prayer-requests/:userId
router.get('/prayer-requests/:userId', PrayerRequestController.readPrayerRequests);

// GET /prayer-request/:prayerRequestId
router.get('/prayer-requests/:prayerRequestId', PrayerRequestController.readPrayerRequestFromId);

// POST /prayer-requests
router.post('/prayer-requests', PrayerRequestController.createPrayerRequest);

// PUT /prayer-request
router.put('/prayer-request', PrayerRequestController.updatePrayerRequest);

// DELETE /prayer-requests/:prayerRequestId
router.delete('/prayer-requests/:prayerRequestId', PrayerRequestController.deletePrayerRequest);

export default router;
