import { Document, Schema, model } from "mongoose";
import { z } from "zod";

export const PdfBaseSchema = z.object({
  text: z.string().nonempty("Text is required"),
  isPublic: z.boolean().default(false),
  posterId: z.string().nonempty("Poster ID is required"),
});

export const PdfValidationSchema = PdfBaseSchema;
export const PdfUpdateValidationSchema = PdfBaseSchema.partial();

export type IPdf = z.infer<typeof PdfValidationSchema>;
export type IPdf_Document = IPdf & Document;