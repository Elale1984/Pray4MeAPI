import { Request, RequestHandler, Response } from "express";
import { Analytics } from './analytics.model';
import * as AnalyticsDao from './analytics.dao';
import { OkPacket } from "mysql";

export const readAnalytics: RequestHandler = async (req: Request, res: Response) => {
    try {
        let analytics;
        let userId = parseInt(req.query.userId as string);

        console.log('userId', userId);
        if (Number.isNaN(userId)) {
            analytics = await AnalyticsDao.readAnalytics();
        } else {
            analytics = await AnalyticsDao.readAnalyticsByUserId(userId);
        }

        res.status(200).json(
            analytics
        );
    } catch (error) {
        console.error('[analytics.controller][readAnalytics][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching analytics'
        });
    }
};

export const createAnalytics: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await AnalyticsDao.createAnalytics(req.body);
        console.log('req.body', req.body);
        console.log('analytics', okPacket);

        res.status(200).json({
            okPacket
        });
    } catch (error) {
        console.error('[analytics.controller][createAnalytics][Error] ', error);
        res.status(500).json({
            message: 'There was an error when writing new analytics'
        });
    }
  };

  export const updateAnalytics: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await AnalyticsDao.updateAnalytics(req.body);
        console.log('req.body', req.body);
        console.log('analytics', okPacket);

        res.status(200).json(
            okPacket
        );
    } catch (error) {
        console.error('[analytics.controller][updateAnalytics][Error]');
        res.status(500).json({
            message: 'There was an error when updating analytics'
        });
    }
};
     
export const deleteAnalytics: RequestHandler = async (req:Request, res: Response) => {
    try {
        let userId = parseInt(req.params.userId as string);
        console.log('userId', userId);

        if(!Number.isNaN(userId)) {
            const response = await AnalyticsDao.deleteAnalytics(userId);

            res.status(200).json(
                response
            );
        } else {
            throw new Error("Integer expected for userId");
        }
    } catch (error) {
        console.error('[analytics.controller][deleteAnalytics][Error]');
        res.status(500).json({
            message: 'There was an error deleting analytic with that userid'
        });
    }
};

