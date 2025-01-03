import { Schema, model } from "mongoose";
import { IPdf_Document } from "./pdf.interface";

const PdfSchema = new Schema<IPdf_Document>(
    {
      text: { type: String, required: true },
      isPublic: { type: Boolean, default: false },
      posterId: { type: String, required: true },
    },
    { timestamps: true }
  );
  
export  const PdfModel = model<IPdf_Document>("Pdf", PdfSchema);