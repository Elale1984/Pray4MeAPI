export const notificationsQueries = {
  readNotifications: `
    SELECT
      id AS notificationId,
      prayerRequestId AS prayerRequestId,
      userId AS userId,
      text AS text,
      createdAt AS createdAt
    FROM pray4me.notifications;
    `,
  readNotificationsByUserId: `
    SELECT
      id AS notificationId,
      prayerRequestId AS prayerRequestId,
      userId AS userId,
      text AS text,
      createdAt AS createdAt
    FROM pray4me.notifications
    WHERE userId = ?;
    `,
  createNotifications: `
    INSERT INTO pray4me.notifications (
      prayerRequestId,
      userId,
      text,
      createdAt
    ) VALUES (
      ?, ?, ?, ?
    )
    `,
  deleteNotifications: `
    DELETE FROM pray4me.notifications
    WHERE ID = ?;
    `,
  updateNotifications: `
    UPDATE pray4me.notifications
    SET
      text = ?,
      createdAt = ?
    WHERE ID = ?;
    `,
}
