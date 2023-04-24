export const categoriesQueries = {
    readCategories: `
      SELECT
        id AS categoryId,
        name AS name
      FROM pray4me.categories;
      `,
    readCategoriesById: `
      SELECT
        id AS categoryId,
        name AS name
      FROM pray4me.categories
      WHERE ID = ?;
      `,
    createCategories: `
      INSERT INTO pray4me.categories (
        name
      ) VALUES (
        ?
      )
      `,
    deleteCategories: `
      DELETE FROM pray4me.categories
      WHERE ID = ?;
      `,
    updateCategories: `
      UPDATE pray4me.categories
      SET
        name = ?
      WHERE ID = ?;
      `,
  }
  