import { Request, Response } from "express";
import { deletePdf, getPdfByUser, getPublicPdfs, savePdf, updatePdf } from "./pdf.service";



export const savePdfHandler = async (req: Request, res: Response) => {
    try {
      const result = await savePdf(req.body);
      res.status(201).json(result);
    } catch (error : any) {
      res.status(400).json({ error: error.message });
    }
  };
  
  export const getPdfByUserHandler = async (req: Request, res: Response) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
         res.status(401).json({ error: "Unauthorized" });
      }
      const result = await getPdfByUser(userId);
      res.status(200).json(result);
    } catch (error:any) {
      res.status(400).json({ error: error.message });
    }
  };
  
  export const getPublicPdfsHandler = async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;
      const result = await getPublicPdfs(userId);
      res.status(200).json(result);
    } catch (error:any) {
      res.status(400).json({ error: error.message });
    }
  };
  
  export const deletePdfHandler = async (req: Request, res: Response) => {
    try {
      const userId = req.user?.id;
      const result = await deletePdf(req.params.pdfId , userId);
      if (!result) {
         res.status(404).json({ error: "PDF not found or unauthorized" });
      }
      res.status(200).json({ message: "PDF deleted successfully" });
    } catch (error:any) {
      res.status(400).json({ error: error.message });
    }
  };
  
  export const updatePdfHandler = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;
      const result = await updatePdf(req.params.pdfId, userId , req.body);
      if (!result) {
         res.status(404).json({ error: "PDF not found or unauthorized" });
      }
      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };

  