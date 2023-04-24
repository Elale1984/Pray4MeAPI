export const prayerRequestCategoryQueries = {
  readPrayerRequestCategory: `
    SELECT
      id AS prayerRequestCategoryId,
      prayerRequestId AS prayerRequestId,
      categoryId AS categoryId      
    FROM pray4me.prayerrequestcategory;
    `,
    readPrayerRequestCategoryById: `
    SELECT
      id AS prayerRequestCategoryId,
      prayerRequestId AS prayerRequestId,
      categoryId AS categoryId 
    FROM pray4me.prayerrequestcategory
    WHERE ID = ?;
    `,
  createPrayerRequestCategory: `
    INSERT INTO pray4me.prayerrequestcategory (
      prayerRequestId,
      categoryId 
    ) VALUES (
      ?, ?
    )
    `,
  deletePrayerRequestCategory: `
    DELETE FROM pray4me.prayerrequestcategory
    WHERE ID = ?;
    `,
  updatePrayerRequestCategory: `
    UPDATE pray4me.prayerrequestcategory
    SET
      prayerRequestId = ?,
      categoryId = ? 
    WHERE ID = ?;
    `,
}
