import express from "express";
import { deletePdfHandler, getPdfByUserHandler, getPublicPdfsHandler, savePdfHandler, updatePdfHandler } from "./pdf.controller";
import { protect } from "../../middlewares/authMiddleware";

const router = express.Router();

router.post("/pdf",protect, savePdfHandler);
router.get("/pdf/user", protect, getPdfByUserHandler);
router.get("/pdf/public/:userId", getPublicPdfsHandler);
router.delete("/pdf/:pdfId",protect, deletePdfHandler);
router.put("/pdf/:pdfId",protect, updatePdfHandler);

export const pdfRouter = router;