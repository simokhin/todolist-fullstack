import "dotenv/config";
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запщуен: http://localhost:${PORT}`);
});
