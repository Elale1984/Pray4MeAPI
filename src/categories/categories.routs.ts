import { Router } from "express";
import * as CategoriesController from './categories.controller';

const router = Router();

// GET /categories
router.get('/categories', CategoriesController.readCategories);

// GET /categories/:categoryId
router.get('/categories/:categoryId', CategoriesController.readCategories);

// POST /categories
router.post('/categories', CategoriesController.createCategories);

// PUT /categories
router.put('/categories', CategoriesController.updateCategories);

// DELETE /categories/:categoryId
router.delete('/categories/:categoryId', CategoriesController.deleteCategories);

export default router;
