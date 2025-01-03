import { IPdf, PdfUpdateValidationSchema, PdfValidationSchema } from "./pdf.interface";
import { PdfModel } from "./pdf.model";


export const savePdf = async (data: IPdf) => {
    const parsedData = PdfValidationSchema.parse(data);
    return PdfModel.create(parsedData);
  };
  
  export const getPdfByUser = async (userId: string) => {
    return PdfModel.find({ posterId: userId });
  };
  
  export const getPublicPdfs = async (userId: string) => {
    return PdfModel.find({ isPublic: true, posterId: userId });
  };
  
  export const deletePdf = async (pdfId: string, posterId: string) => {
    return PdfModel.findOneAndDelete({ _id: pdfId, posterId });
  };
  
  export const updatePdf = async (pdfId: string, posterId: string, data: Partial<IPdf>) => {
    const parsedData = PdfUpdateValidationSchema.parse(data);
    return PdfModel.findOneAndUpdate(
      { _id: pdfId, posterId },
      parsedData,
      { new: true }
    );
  };

  export const pdfService = {
    savePdf,
    getPdfByUser,
    getPublicPdfs,
    deletePdf,
    updatePdf,
  }
  