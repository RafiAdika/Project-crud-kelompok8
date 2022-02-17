import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import dbcrud from "./config/Database_crud.js";
import router from "./routes/index.js";
import productRoutes from "./routes/indexcrud.js";
dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("Database Connected...");
} catch (error) {
  console.error(error);
}

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use("/products", productRoutes);
app.use(express.json());
app.use(router);

try {
  await dbcrud.authenticate();
  console.log("Database connected...");
} catch (error) {
  console.error("Connection error:", error);
}

app.use(cors());
app.use(express.json());
app.use("/products", productRoutes);

app.listen(5000, () => console.log("Server running at port 5000"));
