import { Request, RequestHandler, Response } from "express";
import { Bookmark } from './bookmark.model';
import * as BookmarksDao from './bookmarks.dao';
import { OkPacket } from "mysql";

export const readBookmarks: RequestHandler = async (req: Request, res: Response) => {
    try {
        let bookmarks;
        let userId = parseInt(req.query.userId as string);

        console.log('userId', userId);
        if (Number.isNaN(userId)) {
            bookmarks = await BookmarksDao.readBookmarks();
        } else {
            bookmarks = await BookmarksDao.readBookmarksByUserId(userId);
        }

        res.status(200).json(
            bookmarks
        );
    } catch (error) {
        console.error('[bookmarks.controller][readBookmarks][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching bookmarks'
        });
    }
};


export const createBookmark: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await BookmarksDao.createBookmark(req.body);
        console.log('req.body', req.body);
        console.log('bookmarks', okPacket);

        res.status(200).json({
            okPacket
        });
    } catch (error) {
        console.error('[bookmarks.controller][createBookmarks][Error] ', error);
        res.status(500).json({
            message: 'There was an error when writing new bookmark'
        });
    }
  };

  export const updateBookmark: RequestHandler = async (req: Request, res: Response) => {
    try {

        const okPacket: OkPacket = await BookmarksDao.updateBookmark(req.body);
        console.log('req.body', req.body);
        console.log('bookmarks', okPacket);

        res.status(200).json(
            okPacket
        );
    } catch (error) {
        console.error('[bookmarks.controller][updateBookmark][Error]');
        res.status(500).json({
            message: 'There was an error when updating bookmark'
        });
    }
};
     
export const deleteBookmark: RequestHandler = async (req:Request, res: Response) => {
    try {
        let bookmarkId = parseInt(req.params.bookmarkId as string);
        console.log('bookmarksId', bookmarkId);

        if(!Number.isNaN(bookmarkId)) {
            const response = await BookmarksDao.deleteBookmark(bookmarkId);

            res.status(200).json(
                response
            );
        } else {
            throw new Error("Integer expected for bookmarkId");
        }
    } catch (error) {
        console.error('[bookmarks.controller][deleteBookmark][Error]');
        res.status(500).json({
            message: 'There was an error deleting bookmark with that bookmarkId'
        });
    }
};

