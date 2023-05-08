import express, { Request, Response } from 'express';
import dotenv from "dotenv";
import cors from 'cors';
import helmet from 'helmet';
import logger from './src/middleware/logger.middleware';
import analyticsRouter from './src/analytics/analytics.routs';
import prayerRequestRouter from './src/prayer-requests/prayer-requests.routs';
import prayerRequestCommentsRouter from './src/prayer-request-comment/prayer-request-comments.routs';
import bookmarkRouter from './src/bookmark/bookmarks.routs';
import notificationsRouter from './src/notifications/notifications.routs'
import prayerRequestCategoryRouter from './src/prayer-request-category/prayer-request-category.routs'
import categoriesRouter from './src/categories/categories.routs'
import usersRouter from './src/core/user.routs';

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(helmet());

if (process.env.NODE_ENV == 'development') {
    app.use(logger);
}

// Make sure you understand the following line of code.

app.get('/', (req: Request, res: Response) => {
    res.send('Pray4Me');
});

app.use('/', [analyticsRouter, prayerRequestRouter, 
    prayerRequestCommentsRouter, bookmarkRouter, 
        notificationsRouter, prayerRequestCategoryRouter, categoriesRouter, usersRouter]);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
