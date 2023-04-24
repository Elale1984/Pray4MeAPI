import { Router } from "express";
import * as BookmarksController from './bookmarks.controller';

const router = Router();

// GET /bookmarks
router.get('/bookmarks', BookmarksController.readBookmarks);

// GET /bookmarks/:userId
router.get('/bookmarks/:userId', BookmarksController.readBookmarks);

// POST /bookmarks
router.post('/bookmarks', BookmarksController.createBookmark);

// DELETE /bookmarks/:userId
router.delete('/bookmarks/:bookmarkId', BookmarksController.deleteBookmark);

// PUT /bookmarks
router.put('/bookmarks', BookmarksController.updateBookmark);

export default router;