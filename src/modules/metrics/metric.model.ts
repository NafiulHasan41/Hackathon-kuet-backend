// src/models/UserMetrics.ts
import mongoose, { Schema } from "mongoose";
import { IUserMetrics } from "./metric.interface";


const userMetricsSchema = new Schema<IUserMetrics>({
  userId: { type: String, ref: "User", required: true },
  wordsTranslated: { type: Number, default: 0 },
  storiesWritten: { type: Number, default: 0 },
  chatbotInteractions: { type: Number, default: 0 },
  lastUpdated: { type: Date, default: Date.now }
});

const UserMetrics = mongoose.model<IUserMetrics>("UserMetrics", userMetricsSchema);

export default UserMetrics;
