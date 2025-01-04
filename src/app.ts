import express, { Application, Request, Response } from "express";
import cors from "cors";
import { userRoutes } from "./modules/user/user.routes";
import { pdfRouter } from "./modules/pdf/pdf.routes";
import { searchRouter } from "./modules/search/search.routes";
import { metricRoute } from "./modules/metrics/metric.route";


const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

//application routes
app.use("/api/users", userRoutes);
app.use("/api/pdfs", pdfRouter);
app.use("/api", searchRouter);
app.use("/api", metricRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
