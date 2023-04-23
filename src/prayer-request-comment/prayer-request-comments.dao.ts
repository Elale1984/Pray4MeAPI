import { execute } from "../services/mysql.connector";
import { OkPacket } from "mysql";
import { PrayerRequestComment } from "./prayer-request-comments.model";
import { prayerRequestCommentsQueries } from "./prayer-request-comments.queries";

export const readPrayerRequestComments = async () => {
    return execute<PrayerRequestComment[]>(prayerRequestCommentsQueries.readPrayerRequestComments, []);
};

export const readPrayerRequestCommentById = async (prayerRequestCommentId: number) => {
    return execute<PrayerRequestComment[]>(prayerRequestCommentsQueries.readPrayerRequestCommentById, [prayerRequestCommentId]);
};

export const createPrayerRequestComment = async (prayerRequestComment: PrayerRequestComment) => {
    return execute<OkPacket>(prayerRequestCommentsQueries.createPrayerRequestComment, 
        [prayerRequestComment.prayerRequestId, prayerRequestComment.userId, prayerRequestComment.text, prayerRequestComment.createdAt]);
};

export const deletePrayerRequestComment = async (prayerRequestsId: number) => {
    return execute<OkPacket>(prayerRequestCommentsQueries.deletePrayerRequestComment, [prayerRequestsId]);
};

export const updatePrayerRequestComment = async (prayerRequestComment: PrayerRequestComment) => {
    return execute<OkPacket>(prayerRequestCommentsQueries.updatePrayerRequestComment, 
        [prayerRequestComment.text, prayerRequestComment.createdAt, prayerRequestComment.prayerRequestCommentId]);
};

