import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector"; 
import { Categories } from "./categories.model";
import { categoriesQueries } from './categories.queries';

export const readCategories = async () => {
    return execute<Categories[]>(categoriesQueries.readCategories, []);
};

export const readCategoriesById = async (categoryId: number) => {
    return execute<Categories[]>(categoriesQueries.readCategoriesById, [categoryId]);
};

export const createCategories = async (categories: Categories) => {
    return execute<OkPacket>(categoriesQueries.createCategories, 
        [categories.name]);
};

export const deleteCategories = async (categoryId: number) => {
    return execute<OkPacket>(categoriesQueries.deleteCategories, [categoryId]);
};

export const updateCategories = async (categories: Categories) => {
    return execute<OkPacket>(categoriesQueries.updateCategories, 
        [categories.name, categories.categoryId]);
};
