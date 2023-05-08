import { Request, RequestHandler, Response } from "express";
import { Categories } from './categories.model';
import * as CategoriesDao from './categories.dao';
import { OkPacket } from "mysql";

export const readCategories: RequestHandler = async (req: Request, res: Response) => {
    try {
        let categories;
        let categoryId = parseInt(req.query.categoryId as string);

        console.log('categoryId', categoryId);
        if (Number.isNaN(categoryId)) {
            categories = await CategoriesDao.readCategories();
        } else {
            categories = await CategoriesDao.readCategoriesById(categoryId);
        }

        res.status(200).json(
            categories
        );
    } catch (error) {
        console.error('[categories.controller][readCategories][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching categories'
        });
    }
};


export const createCategories: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await CategoriesDao.createCategories(req.body);
        console.log('req.body', req.body);
        console.log('categories', okPacket);

        res.status(200).json({
            okPacket
        });
    } catch (error) {
        console.error('[categories.controller][createCategories][Error] ', error);
        res.status(500).json({
            message: 'There was an error when writing new categories'
        });
    }
  };

  export const updateCategories: RequestHandler = async (req: Request, res: Response) => {
    try {

        const okPacket: OkPacket = await CategoriesDao.updateCategories(req.body);
        console.log('req.body', req.body);
        console.log('categories', okPacket);

        res.status(200).json(
            okPacket
        );
    } catch (error) {
        console.error('[categories.controller][updateCategories][Error]');
        res.status(500).json({
            message: 'There was an error when updating categories'
        });
    }
};

export const deleteCategories: RequestHandler = async (req:Request, res: Response) => {
    try {
        let categoryId = parseInt(req.params.categoryId as string);
        console.log('categoryId', categoryId);

        if(!Number.isNaN(categoryId)) {
            const response = await CategoriesDao.deleteCategories(categoryId);

            res.status(200).json(
                response
            );
        } else {
            throw new Error("Integer expected for categoryId");
        }
    } catch (error) {
        console.error('[categories.controller][deleteCategories][Error]');
        res.status(500).json({
            message: 'There was an error deleting categories with that categoryId'
        });
    }
};

