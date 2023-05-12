export const prayerRequestCommentsQueries = {
  readPrayerRequestComments: `
    SELECT
      id AS prayerRequestCommentId,
      prayerRequestId as prayerRequestId,
      userId AS userId,
      text AS text,
      createdAt AS createdAt
    FROM pray4me.prayerrequestcomment;
    `,
  readPrayerRequestCommentById: `
    SELECT
      id AS prayerRequestCommentId,
      prayerRequestID as prayerRequestID,
      userId AS userId,
      text AS text,
      createdAt AS createdAt
      FROM pray4me.prayerrequestcomment
    WHERE ID = ?;
    `,
  createPrayerRequestComment: `
    INSERT INTO pray4me.prayerrequestcomment (
      prayerRequestID,
      userId,
      text,
      createdAt
    ) VALUES (
      ?, ?, ?, ?
    )
    `,
  deletePrayerRequestComment: `
      DELETE FROM pray4me.prayerrequestcomment
      WHERE ID = ?;
      `,
  updatePrayerRequestComment: `
    UPDATE pray4me.prayerrequestcomment
    SET 
      text = ?, 
      createdAt = ?
    WHERE ID = ?;
    `,
  readPrayerRequestCommentsByPrayerRequestId: `
    SELECT
      id AS prayerRequestCommentId,
      prayerRequestID as prayerRequestID,
      userId AS userId,
      text AS text,
      createdAt AS createdAt
    FROM pray4me.prayerrequestcomment
    WHERE prayerRequestID= ?;
  `,
  readPrayerRequestCommentsByPrayerRequestIdAndUserId: `
  SELECT
    prayerRequestCommentId AS prayerRequestCommentId,
    prayerRequestId AS prayerRequestId,
    userId AS userId,
    text AS text,
    createdAt AS createdAt
  FROM pray4me.prayerrequestcomment
  WHERE prayerRequestId =? AND userId =?;
  `,
  readPrayerRequestCommentsByUserId: `
  SELECT
    prayerRequestCommentId AS prayerRequestCommentId,
    prayerRequestId AS prayerRequestId,
    userId AS userId,
    text AS text,
    createdAt AS createdAt
  FROM pray4me.prayerrequestcomment 
    
  `,
};
