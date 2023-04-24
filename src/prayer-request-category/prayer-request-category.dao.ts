import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector"; 
import { PrayerRequestCategory } from "./prayer-request-category.model";
import { prayerRequestCategoryQueries } from './prayer-request-category.queries';

export const readPrayerRequestCategory = async () => {
    return execute<PrayerRequestCategory[]>(prayerRequestCategoryQueries.readPrayerRequestCategory, []);
};

export const readPrayerRequestCategoryById = async (prayerRequestCategoryId: number) => {
    return execute<PrayerRequestCategory[]>(prayerRequestCategoryQueries.readPrayerRequestCategoryById, [prayerRequestCategoryId]);
};

export const createPrayerRequestCategory = async (prayerRequestCategory: PrayerRequestCategory) => {
    return execute<OkPacket>(prayerRequestCategoryQueries.createPrayerRequestCategory, 
        [prayerRequestCategory.prayerRequestId, prayerRequestCategory.categoryId]);
};

export const deletePrayerRequestCategory = async (prayerRequestCategoryId: number) => {
    return execute<OkPacket>(prayerRequestCategoryQueries.deletePrayerRequestCategory, [prayerRequestCategoryId]);
};

export const updatePrayerRequestCategory = async (prayerRequestCategory: PrayerRequestCategory) => {
    return execute<OkPacket>(prayerRequestCategoryQueries.updatePrayerRequestCategory, 
        [prayerRequestCategory.prayerRequestId, prayerRequestCategory.categoryId, prayerRequestCategory.prayerRequestCategoryId]);
};
