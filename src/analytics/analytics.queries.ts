export const analyticsQueries = {
  readAnalytics: `
    SELECT
      id AS analyticsId,
      userId AS userId,
      prayerRequestCount AS prayerRequestCount,
      prayerCount AS prayerCount,
      answeredCount AS answeredCount
    FROM pray4me.analytics;
    `,
  readAnalyticsByUserId: `
    SELECT
      id AS analyticsId,
      userId AS userId,
      prayerRequestCount AS prayerRequestCount,
      prayerCount AS prayerCount,
      answeredCount AS answeredCount
    FROM pray4me.analytics
    WHERE userId = ?;
    `,
  createAnalytics: `
    INSERT INTO pray4me.analytics (
      userId,
      prayerRequestCount,
      prayerCount,
      answeredCount
    ) VALUES (
      ?, ?, ?, ?
    )
    `,
  deleteAnalytics: `
    DELETE FROM pray4me.analytics
    WHERE ID = ?;
    `,
  updateAnalytics: `
    UPDATE pray4me.analytics
    SET
      prayerRequestCount = ?,
      prayerCount = ?,
      answeredCount = ?
    WHERE ID = ?;
    `,
}
