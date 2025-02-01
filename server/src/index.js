import "dotenv/config";
import express from "express";
import { db } from "./configs/db.js";
const app = express();

import todoRoutes from "./routes/todoRoutes.js";
import authRoutes from "./routes/authRoutes.js";

//parser
app.use(express.json());

//logger
const requestLogger = (req, res, next) => {
  console.log("Method:", req.method);
  console.log("Path:", req.path);
  console.log("Body:", req.body);
  console.log("---");
  next();
};

app.use(requestLogger);

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
