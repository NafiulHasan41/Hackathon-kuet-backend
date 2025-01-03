import { Request, Response } from "express";
import { searchService } from "./search.service";


export const searchController = {
  search: async (req: Request, res: Response) => {
    const { query } = req.query;

    // Validate query parameter
    if (!query || typeof query !== "string") {
       res.status(400).json({ error: "Query parameter is required and must be a string." });
       return;
    }

    // Perform search
    const results = await searchService.search(query);
    res.status(200).json(results);
  },
};
