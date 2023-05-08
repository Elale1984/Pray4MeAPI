import { Router } from "express";
import * as UserController from './user.controller';

const router = Router();
// GET /users
router.get('/users', UserController.readUsers)
// GET /users/:userId
router.get('/users/:userId', UserController.readUsers);


export default router;