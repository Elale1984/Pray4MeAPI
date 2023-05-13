import { Request, RequestHandler, Response } from "express";
import { PrayerRequestCategory } from './prayer-request-category.model';
import * as PrayerRequestCategoryDao from './prayer-request-category.dao';
import { OkPacket } from "mysql";

export const readPrayerRequestCategory: RequestHandler = async (req: Request, res: Response) => {
    try {
        let prayerRequestCategory;
        let prayerRequestCategoryId = parseInt(req.query.prayerRequestCategoryId as string);

        console.log('prayerRequestCategoryId', prayerRequestCategoryId);
        if (Number.isNaN(prayerRequestCategoryId)) {
            prayerRequestCategory = await PrayerRequestCategoryDao.readPrayerRequestCategory();
        } else {
            prayerRequestCategory = await PrayerRequestCategoryDao.readPrayerRequestCategoryById(prayerRequestCategoryId);
        }

        res.status(200).json(
            prayerRequestCategory
        );
    } catch (error) {
        console.error('[prayerRequestCategory.controller][readPrayerRequestCategory][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching analytics'
        });
    }
};


export const createPrayerRequestCategory: RequestHandler = async (req: Request, res: Response) => {

    console.log('Attempting to create -> prayerRequestCategory-RequestBody', req.body );
    try {
        const okPacket: OkPacket = await PrayerRequestCategoryDao.createPrayerRequestCategory(req.body);
        console.log('req.body', req.body);
        console.log('prayerRequestCategory', okPacket);

        res.status(200).json({
            okPacket
        });
    } catch (error) {
        console.error('[prayerRequestCategory.controller][createPrayerRequestCategory][Error] ', error);
        res.status(500).json({
            message: 'There was an error when writing new prayer-request-category'
        });
    }
  };

  export const updatePrayerRequestCategory: RequestHandler = async (req: Request, res: Response) => {
    try {

        const okPacket: OkPacket = await PrayerRequestCategoryDao.updatePrayerRequestCategory(req.body);
        console.log('req.body', req.body);
        console.log('prayerRequestCategory', okPacket);

        res.status(200).json(
            okPacket
        );
    } catch (error) {
        console.error('[prayerRequestCategory.controller][updatePrayerRequestCategory][Error]');
        res.status(500).json({
            message: 'There was an error when updating prayer request category'
        });
    }
};
     
export const deletePrayerRequestCategory: RequestHandler = async (req:Request, res: Response) => {
    try {
        let prayerRequestCategoryId = parseInt(req.params.prayerRequestCategoryId as string);
        console.log('prayerRequestCategoryId', prayerRequestCategoryId);

        if(!Number.isNaN(prayerRequestCategoryId)) {
            const response = await PrayerRequestCategoryDao.deletePrayerRequestCategory(prayerRequestCategoryId);

            res.status(200).json(
                response
            );
        } else {
            throw new Error("Integer expected for prayerRequestCategoryId");
        }
    } catch (error) {
        console.error('[prayerRequestCategory.controller][deletePrayerRequestCategory][Error]');
        res.status(500).json({
            message: 'There was an error deleting prayerRequestCategory with that prayerRequestCategoryId'
        });
    }
};

