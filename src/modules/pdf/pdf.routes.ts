import express from "express";
import { deletePdfHandler, getPdfByUserHandler, getPublicPdfsHandler, savePdfHandler, updatePdfHandler } from "./pdf.controller";

const router = express.Router();

router.post("/pdf", savePdfHandler);
router.get("/pdf/user", getPdfByUserHandler);
router.get("/pdf/public/:userId", getPublicPdfsHandler);
router.delete("/pdf/:pdfId", deletePdfHandler);
router.put("/pdf/:pdfId", updatePdfHandler);

export default router;