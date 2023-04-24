export const prayerRequestsQueries = {
  readPrayerRequests: `
    SELECT
      id AS prayerRequestId,
      userId AS userId,
      text AS text,
      createdAt AS createdAt,
      isAnswered AS isAnswered
    FROM pray4me.prayerrequests;
    `,
  readPrayerRequestsByUserId: `
    SELECT
      id AS prayerRequestId,
      userId AS userId,
      text AS text,
      createdAt AS createdAt,
      isAnswered AS isAnswered
    FROM pray4me.prayerrequests
    WHERE userId = ?;
  `,
  readPrayerRequestFromId: `
    SELECT
      ID AS prayerRequestId,
      UserID AS userId,
      Text AS text,
      CreatedAt AS createdAt,
      IsAnswered AS isAnswered
    FROM pray4me.prayerrequests
    WHERE ID = ?;
  `,
  createPrayerRequest: `
    INSERT INTO pray4me.prayerrequests (
      userId,
      text,
      createdAt,
      isAnswered
    ) VALUES (
      ?, ?, ?, ?
    )
    `,
  deletePrayerRequest: `
    DELETE FROM pray4me.prayerrequests
    WHERE ID = ?;
    `,
  updatePrayerRequest: `
    UPDATE pray4me.prayerrequests
    SET
      text = ?,
      createdAt = ?,
      isAnswered = ?
    WHERE ID = ?;
    `,
}
