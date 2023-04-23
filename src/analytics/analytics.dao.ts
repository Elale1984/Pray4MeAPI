import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector"; 
import { Analytics } from "./analytics.model";
import { analyticsQueries } from './analytics.queries';

export const readAnalytics = async () => {
    return execute<Analytics[]>(analyticsQueries.readAnalytics, []);
};

export const readAnalyticsByUserId = async (userId: number) => {
    return execute<Analytics[]>(analyticsQueries.readAnalyticsByUserId, [userId]);
};

export const createAnalytics = async (analytics: Analytics) => {
    return execute<OkPacket>(analyticsQueries.createAnalytics, 
        [analytics.userId, analytics.prayerRequestCount, analytics.prayerCount, analytics.answeredCount]);
};

export const deleteAnalytics = async (analyticsId: number) => {
    return execute<OkPacket>(analyticsQueries.deleteAnalytics, [analyticsId]);
};

export const updateAnalytics = async (analytics: Analytics) => {
    return execute<OkPacket>(analyticsQueries.updateAnalytics, 
        [analytics.prayerRequestCount, analytics.prayerCount, analytics.answeredCount, analytics.analyticsId]);
};
