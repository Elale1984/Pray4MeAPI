import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector"; 
import { Notification } from "./notification.model";
import { notificationsQueries } from './notifications.queries';

export const readNotifications = async () => {
    return execute<Notification[]>(notificationsQueries.readNotifications, []);
};

export const readNotificationsByUserId = async (userId: number) => {
    return execute<Notification[]>(notificationsQueries.readNotificationsByUserId, [userId]);
};

export const createNotifications = async (notification: Notification) => {
    return execute<OkPacket>(notificationsQueries.createNotifications, 
        [notification.prayerRequestId, notification.userId, notification.text, notification.createdAt]);
};

export const deleteNotifications = async (notificationId: number) => {
    return execute<OkPacket>(notificationsQueries.deleteNotifications, [notificationId]);
};

export const updateNotifications = async (notification: Notification) => {
    return execute<OkPacket>(notificationsQueries.updateNotifications, 
        [notification.text, notification.createdAt, notification.notificationId]);
};
