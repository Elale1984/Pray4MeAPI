export const bookmarksQueries = {
    readBookmarks: `
      SELECT
        id AS bookmarksId,
        prayerRequestId,
        userId,
        createdAt
      FROM pray4me.bookmarks;
      `,
    readBookmarkByUserId: `
      SELECT
        id AS prayerRequestId,
        prayerRequestId,
        userID,
        CreatedAt
      FROM pray4me.bookmarks
      WHERE userId = ?;
      `,
    createBookmark: `
      INSERT INTO pray4me.bookmarks (
        prayerRequestId,
        userID,
        CreatedAt
      ) VALUES (
        ?, ?, ?
      )
      `,
    deleteBookmark: `
      DELETE FROM pray4me.bookmarks
      WHERE ID = ?;
      `,
    updateBookmark: `
      UPDATE pray4me.bookmarks
      SET
        PrayerRequestID = ?,
        CreatedAt = ?
      WHERE ID = ?;
      `,
}
  