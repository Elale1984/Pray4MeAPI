import { Router } from "express";
import * as NotificationsController from './notifications.controller';

const router = Router();

// GET /analytics
router.get('/notifications', NotificationsController.readNotifications);

// GET /analytics
router.get('/notifications/:userId', NotificationsController.readNotifications);

// POST /analytics
router.post('/notifications', NotificationsController.createNotifications);

// PUT /analytics
router.put('/notifications', NotificationsController.updateNotifications);


// DELETE /analytics/:userId
router.delete('/notifications/:notificationsId', NotificationsController.deleteNotifications);

export default router;
