export const userQueries = {
  readUsers: `
    SELECT
      id AS userId,
      username,
      email,
      password,
      createdAt
    FROM pray4me.users;
  `,

  readUserNameByUserId: `
    SELECT 
      id AS userId,
      username,
      email,
      password,
      createdAt 
    FROM pray4me.users WHERE ID = ?;
    `,
}