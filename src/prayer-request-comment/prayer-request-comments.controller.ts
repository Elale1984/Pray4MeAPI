import { Request, RequestHandler, Response, text } from "express";
import { PrayerRequestComment } from "./prayer-request-comments.model";
import * as PrayerRequestCommentsDao from './prayer-request-comments.dao';
import { OkPacket } from "mysql";

export const readPrayerRequestComments: RequestHandler = async (req: Request, res: Response) => {
    console.log("Trying to read prayer request comments");
    try {
        let prayerRequestComment;
        let prayerRequestCommentId = parseInt(req.query.prayerRequestCommentId as string);

        console.log('prayerRequestCommentId', prayerRequestCommentId);
        if (Number.isNaN(prayerRequestCommentId)) {
            prayerRequestComment = await PrayerRequestCommentsDao.readPrayerRequestComments();
        } else {
            prayerRequestComment = await PrayerRequestCommentsDao.readPrayerRequestCommentById(prayerRequestCommentId);
        }

        res.status(200).json(
            prayerRequestComment
        );
    } catch (error) {
        console.log("error");
        console.error('[prayer-request-comments.controller][readPrayerRequestComments][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching prayerRequestComments'
        });
    }
};

export const createPrayerRequestComment: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await PrayerRequestCommentsDao.createPrayerRequestComment(req.body);
        console.log('req.body', req.body);
        console.log('prayer request', okPacket);

        res.status(200).json({
            okPacket
        });
    } catch (error) {
        console.error('[prayer-request-comments.controller][createPrayerRequestComment][Error] ', error);
        res.status(500).json({
            message: 'There was an error when creating new prayer request'
        });
    }
};

export const updatePrayerRequestComment: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await PrayerRequestCommentsDao.updatePrayerRequestComment(req.body);
        console.log('req.body', req.body);
        console.log('prayer request comment', okPacket);

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[prayer-request-comments.controller][updatePrayerRequestComment][Error]', error);
        res.status(500).json({
            message: 'There was an error when updating prayer request'
        });
    }
};
     
export const deletePrayerRequestComment: RequestHandler = async (req: Request, res: Response) => {
    try {
        const prayerRequestCommentId = parseInt(req.params.prayerRequestCommentId as string);
        console.log('prayerRequestCommentId', prayerRequestCommentId);

        if (!Number.isNaN(prayerRequestCommentId)) {
            const response = await PrayerRequestCommentsDao.deletePrayerRequestComment(prayerRequestCommentId);
            res.status(200).json(response);
        } else {
            throw new Error("Integer expected for prayer request comment id");
        }
    } catch (error) {
        console.error('[prayer-request-comments.controller][deletePrayerRequestComment][Error]', error);
        res.status(500).json({
            message: 'There was an error deleting prayer request comment with that id'
        });
    }
};
