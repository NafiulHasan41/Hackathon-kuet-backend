import express from "express";
import { searchController } from "./search.controller";


const router = express.Router();

// Search route
router.get("/search", searchController.search);

export const searchRouter = router;
