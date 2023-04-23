import { execute } from "../services/mysql.connector";
import { OkPacket } from "mysql";
import { PrayerRequests } from "./prayer-requests.model";
import { prayerRequestsQueries } from "./prayer-requests.queries";

export const readPrayerRequests = async () => {
    return execute<PrayerRequests[]>(prayerRequestsQueries.readPrayerRequests, []);
};

export const readPrayerRequestsByUserId = async (userId: number) => {
    return execute<PrayerRequests[]>(prayerRequestsQueries.readPrayerRequestsByUserId, [userId]);
};

export const readPrayerRequestById = async (prayerRequestId: number) => {
    return execute<PrayerRequests[]>(prayerRequestsQueries.readPrayerRequestById, [prayerRequestId]);
};

export const createPrayerRequest = async (prayerRequest: PrayerRequests) => {
    return execute<OkPacket>(prayerRequestsQueries.createPrayerRequest, 
        [prayerRequest.userId, prayerRequest.text, prayerRequest.createdAt, prayerRequest.isAnswered]);
};

export const deletePrayerRequest = async (prayerRequestsId: number) => {
    return execute<OkPacket>(prayerRequestsQueries.deletePrayerRequest, [prayerRequestsId]);
};

export const updatePrayerRequest = async (prayerRequest: PrayerRequests) => {
    return execute<OkPacket>(prayerRequestsQueries.updatePrayerRequest, 
        [prayerRequest.text, prayerRequest.createdAt, prayerRequest.isAnswered, prayerRequest.prayerRequestId]);
};

