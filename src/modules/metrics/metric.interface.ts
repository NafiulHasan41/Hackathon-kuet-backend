
import { Document } from "mongoose";

export interface IUserMetrics extends Document {
  userId: string;
  wordsTranslated: number;
  storiesWritten: number;
  chatbotInteractions: number;
  lastUpdated: Date;
}
