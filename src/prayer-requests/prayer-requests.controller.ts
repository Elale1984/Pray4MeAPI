import { Request, RequestHandler, Response } from "express";
import { PrayerRequests } from "./prayer-requests.model";
import * as PrayerRequestDao from './prayer-requests.dao';
import { OkPacket } from "mysql";

export const readPrayerRequests: RequestHandler = async (req: Request, res: Response) => {
    console.log("Trying to read prayer requests");
    try {
        let prayerRequest;
        let userId = parseInt(req.query.userId as string);

        console.log('userId', userId);
        if (Number.isNaN(userId)) {
            prayerRequest = await PrayerRequestDao.readPrayerRequests();
        } else {
            console.log("reading");
            prayerRequest = await PrayerRequestDao.readPrayerRequestsByUserId(userId);
        }

        res.status(200).json(
            prayerRequest
        );
    } catch (error) {

        console.error('[prayerRequest.controller][readPrayerRequests][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching prayerRequests'
        });
    }
};

export const readPrayerRequestById: RequestHandler = async (req: Request, res: Response) => {
    console.log("Trying to read prayer request by id");
    try {
        let prayerRequest;
        let prayerRequestId = parseInt(req.query.id as string);

        console.log('prayerRequestId', prayerRequestId);
        if (!Number.isNaN(prayerRequestId)) {
            prayerRequest = await PrayerRequestDao.readPrayerRequests();
        } else {
            console.log("reading");
            prayerRequest = await PrayerRequestDao.readPrayerRequestById(prayerRequestId);
        }
        res.status(200).json(
            prayerRequest
        );

    } catch (error) {
        console.error('[prayerRequest.controller][readPrayerRequestsById][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching prayerRequests'
        });
    }
};

export const createPrayerRequest: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await PrayerRequestDao.createPrayerRequest(req.body);
        console.log('req.body', req.body);
        console.log('prayer request', okPacket);

        res.status(200).json({
            okPacket
        });
    } catch (error) {
        console.error('[prayer-request.controller][createPrayerRequest][Error] ', error);
        res.status(500).json({
            message: 'There was an error when creating new prayer request'
        });
    }
};

export const updatePrayerRequest: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await PrayerRequestDao.updatePrayerRequest(req.body);
        console.log('req.body', req.body);
        console.log('prayer request', okPacket);

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[prayer-request.controller][updatePrayerRequest][Error]', error);
        res.status(500).json({
            message: 'There was an error when updating prayer request'
        });
    }
};
     
export const deletePrayerRequest: RequestHandler = async (req: Request, res: Response) => {
    try {
        const prayerRequestId = parseInt(req.params.prayerRequestId as string);
        console.log('prayerRequestId', prayerRequestId);

        if (!Number.isNaN(prayerRequestId)) {
            const response = await PrayerRequestDao.deletePrayerRequest(prayerRequestId);
            res.status(200).json(response);
        } else {
            throw new Error("Integer expected for prayer request id");
        }
    } catch (error) {
        console.error('[prayer-request.controller][deletePrayerRequest][Error]', error);
        res.status(500).json({
            message: 'There was an error deleting prayer request with that id'
        });
    }
};
