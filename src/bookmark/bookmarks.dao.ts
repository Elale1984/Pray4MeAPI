import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector"; 
import { Bookmark } from "./bookmark.model";
import { bookmarksQueries } from './bookmarks.queries';

export const readBookmarks = async () => {
    return execute<Bookmark[]>(bookmarksQueries.readBookmarks, []);
};

export const readBookmarksByUserId = async (userId: number) => {
    return execute<Bookmark[]>(bookmarksQueries.readBookmarkByUserId, [userId]);
};

export const createBookmark = async (bookmarks: Bookmark) => {
    return execute<OkPacket>(bookmarksQueries.createBookmark, 
        [bookmarks.prayerRequestId, bookmarks.userId, bookmarks.createdAt]);
};

export const deleteBookmark = async (bookmarkId: number) => {
    return execute<OkPacket>(bookmarksQueries.deleteBookmark, [bookmarkId]);
};

export const updateBookmark = async (bookmarks: Bookmark) => {
    return execute<OkPacket>(bookmarksQueries.updateBookmark, 
        [bookmarks.prayerRequestId, bookmarks.createdAt, bookmarks.bookmarkId]);
};
