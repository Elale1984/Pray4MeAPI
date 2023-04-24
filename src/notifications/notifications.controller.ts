import { Request, RequestHandler, Response } from "express";
import { Notification } from './notification.model';
import * as NotificationsDao from './notifications.dao';
import { OkPacket } from "mysql";

export const readNotifications: RequestHandler = async (req: Request, res: Response) => {
    try {
        let notifications;
        let userId = parseInt(req.query.userId as string);

        console.log('userId', userId);
        if (Number.isNaN(userId)) {
            notifications = await NotificationsDao.readNotifications();
        } else {
            notifications = await NotificationsDao.readNotificationsByUserId(userId);
        }

        res.status(200).json(
            notifications
        );
    } catch (error) {
        console.error('[notifications.controller][readNotifications][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching notifications'
        });
    }
};


export const createNotifications: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await NotificationsDao.createNotifications(req.body);
        console.log('req.body', req.body);
        console.log('notification', okPacket);

        res.status(200).json({
            okPacket
        });
    } catch (error) {
        console.error('[notifications.controller][createNotifications][Error] ', error);
        res.status(500).json({
            message: 'There was an error when writing new notification'
        });
    }
  };

  export const updateNotifications: RequestHandler = async (req: Request, res: Response) => {
    try {

        const okPacket: OkPacket = await NotificationsDao.updateNotifications(req.body);
        console.log('req.body', req.body);
        console.log('notifications', okPacket);

        res.status(200).json(
            okPacket
        );
    } catch (error) {
        console.error('[notifications.controller][updateNotifications][Error]');
        res.status(500).json({
            message: 'There was an error when updating notification'
        });
    }
};
     
export const deleteNotifications: RequestHandler = async (req:Request, res: Response) => {
    try {
        let notificationsId = parseInt(req.params.notificationsId as string);
        console.log('notificationsId', notificationsId);

        if(!Number.isNaN(notificationsId)) {
            const response = await NotificationsDao.deleteNotifications(notificationsId);

            res.status(200).json(
                response
            );
        } else {
            throw new Error("Integer expected for notificationId");
        }
    } catch (error) {
        console.error('[notifications.controller][deleteNotifications][Error]');
        res.status(500).json({
            message: 'There was an error deleting notification with that notificationId'
        });
    }
};

