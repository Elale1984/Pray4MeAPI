import { Router } from "express";
import * as AnalyticsController from './analytics.controller';

const router = Router();

// GET /analytics
router.get('/analytics', AnalyticsController.readAnalytics);

// POST /analytics
router.post('/analytics', AnalyticsController.createAnalytics);

// PUT /analytics
router.put('/analytics', AnalyticsController.updateAnalytics);


// DELETE /analytics/:userId
router.delete('/analytics/:userId', AnalyticsController.deleteAnalytics);

export default router;
