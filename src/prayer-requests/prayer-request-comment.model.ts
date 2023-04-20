export interface PrayerRequestComment {
  id: number,
  prayerRequestId: number,
  userId: number,
  text: string,
  createdAt: Date
}