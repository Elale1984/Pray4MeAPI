import { Router } from "express";
import * as PrayerRequestCategoryController from './prayer-request-category.controller';

const router = Router();

// GET /prayer-request-category
router.get('/prayer-request-category', PrayerRequestCategoryController.readPrayerRequestCategory);

// GET /prayer-request-category/:prayerRequestId
router.get('/prayer-request-category/:prayerRequestId', PrayerRequestCategoryController.readPrayerRequestCategory);

// POST /prayer-request-category
router.post('/prayer-request-category', PrayerRequestCategoryController.createPrayerRequestCategory);

// PUT /prayer-request-category
router.put('/prayer-request-category', PrayerRequestCategoryController.updatePrayerRequestCategory);


// DELETE /prayer-request-category/:prayerRequestCategoryId
router.delete('/prayer-request-category/:prayerRequestCategoryId', PrayerRequestCategoryController.deletePrayerRequestCategory);

export default router;
