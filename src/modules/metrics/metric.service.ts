// src/services/UserMetricsService.ts

import { IUserMetrics } from "./metric.interface";
import UserMetrics from "./metric.model";


class UserMetricsService {
  // Get user metrics by userId
  public static async getUserMetrics(userId: string): Promise<IUserMetrics | null> {
    try {
      const metrics = await UserMetrics.findOne({ userId });
      return metrics;
    } catch (err) {
      throw new Error("Error fetching user metrics: " + err);
    }
  }

  // Update user metrics based on action
  public static async updateUserMetrics(userId: string, action: string, value: number): Promise<IUserMetrics> {
    try {
      let metrics = await UserMetrics.findOne({ userId });
      if (!metrics) {
        metrics = new UserMetrics({ userId });
      }

      // Update metrics based on the action type
      switch (action) {
        case "translate":
          metrics.wordsTranslated += value;
          break;
        case "write_story":
          metrics.storiesWritten += value;
          break;
        case "chatbot_interaction":
          metrics.chatbotInteractions += value;
          break;
        default:
          throw new Error("Invalid action");
      }

      metrics.lastUpdated = new Date();
      await metrics.save();
      return metrics;
    } catch (err) {
      throw new Error("Error updating user metrics: " + err);
    }
  }
}

export default UserMetricsService;
