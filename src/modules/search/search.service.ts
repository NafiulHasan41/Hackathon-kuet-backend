import { PdfModel } from "../pdf/pdf.model";
import { UserModel } from "../user/user.model";

export const searchService = {
  search: async (query: string) => {
    const regex = new RegExp(query, "i"); // "i" for case-insensitive matching

    // Search PDFs based on their text
    const pdfResults = await PdfModel.find({
      text: { $regex: regex },
    });

    // Search users based on name, email, or phone
    const userResults = await UserModel.find({
      $or: [
        { name: { $regex: regex } },
        { email: { $regex: regex } },
        { phone: { $regex: regex } },
      ],
    });

    return { pdfResults, userResults };
  },
};
