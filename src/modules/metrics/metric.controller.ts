// src/controllers/UserMetricsController.ts
import { Request, Response } from "express";
import UserMetricsService from "./metric.service";


class UserMetricsController {
  // Get user metrics
  public static async getUserMetrics(req: Request, res: Response){
    const userId = req.user.id; // assuming user is authenticated and userId is available from the JWT
    try {
      const metrics = await UserMetricsService.getUserMetrics(userId);
      if (!metrics) {
         res.status(404).json({ message: "Metrics not found" });
      }
       res.json(metrics);
    } catch (err:any) {
       res.status(500).json({ message: "Error fetching user metrics", error: err.message });
    }
  }

  // Update user metrics based on action
  public static async updateUserMetrics(req: Request, res: Response){
    const userId = req.user.id; // assuming user is authenticated
    const { action, value } = req.body; // action could be 'translate', 'write_story', 'chatbot_interaction'
    
    try {
      const updatedMetrics = await UserMetricsService.updateUserMetrics(userId, action, value);
       res.json(updatedMetrics);
    } catch (err:any) {
       res.status(500).json({ message: "Error updating metrics", error: err.message });
    }
  }
}

export default UserMetricsController;
