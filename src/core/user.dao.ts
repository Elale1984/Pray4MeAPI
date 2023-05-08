import { execute } from "../services/mysql.connector";
import { User } from "./user.model";
import { userQueries } from "./user.queries";


export const readUsers = async () => {
    return execute<User[]>(userQueries.readUsers, []);
}

export const readUserNameByUserId = async (userId: number) => {
    return execute<User[]>(userQueries.readUserNameByUserId, [userId]);
}