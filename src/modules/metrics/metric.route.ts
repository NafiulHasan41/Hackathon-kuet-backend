// src/routes/userMetricsRoutes.ts
import { Router } from "express";
import UserMetricsController from "./metric.controller";
import { protect } from "../../middlewares/authMiddleware";


const router = Router();

// Route to get user metrics
router.get("/user/metrics",protect , UserMetricsController.getUserMetrics);

// Route to update user metrics
router.post("/user/metrics/update", protect, UserMetricsController.updateUserMetrics);

export const metricRoute = router;
