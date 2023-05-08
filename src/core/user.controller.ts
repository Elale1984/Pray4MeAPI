import { Request, RequestHandler, Response } from "express";
import * as UserDao  from './user.dao';

export const readUsers: RequestHandler = async (req: Request, res: Response) => {
    console.log("Trying to read user by the userId");
    try {
        let user;
        let userId = parseInt(req.query.userId as string);

        console.log('userId', userId);
        if (Number.isNaN(userId)) {
            user = await UserDao.readUsers();
        } else {
            user = await UserDao.readUserNameByUserId(userId);
        }

        res.status(200).json(
            user
        );
    } catch (error) {

        console.error('[user.controller][readUserNameByUserId][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching username'
        });
    }
};


