export interface PrayerRequest {
  id: number,
  userId: number,
  text: string,
  createdAt: Date,
  isAnswered: boolean
}