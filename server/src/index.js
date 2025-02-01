import "dotenv/config";
import express from "express";
import { db } from "./configs/db.js";
const app = express();

import todoRoutes from "./routes/todoRoutes.js";
import authRoutes from "./routes/authRoutes.js";

app.use(express.json());

//routes
app.use("/api/todo", todoRoutes);
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3000;
db.then(() => {
  app.listen(PORT, () => {
    console.log(`Сервер запщуен: http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.error("Не удалось подключиться к базе данных", error);
});
