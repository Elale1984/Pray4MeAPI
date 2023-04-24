import { Router } from "express";
import * as PrayerRequestCommentController from './prayer-request-comments.controller';

const router = Router();

// GET /prayer-request-comments
router.get('/prayer-request-comments', PrayerRequestCommentController.readPrayerRequestComments);

// GET /prayer-request-comments/:prayerRequestCommentId
router.get('/prayer-request-comments/:prayerRequestCommentId', PrayerRequestCommentController.readPrayerRequestComments);

// POST /prayer-request-comments
router.post('/prayer-request-comments', PrayerRequestCommentController.createPrayerRequestComment);

// DELETE /prayer-request-comments/:prayerRequestCommentId
router.delete('/prayer-request-comments/:prayerRequestCommentId', PrayerRequestCommentController.deletePrayerRequestComment);

// PUT /prayer-request-comments
router.put('/prayer-request-comments', PrayerRequestCommentController.updatePrayerRequestComment);

export default router;
