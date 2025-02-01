import express from "express";
const router = express.Router();

import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../controllers/todoControllers.js";

router.get("/", getTodos);

router.post("/", addTodo);

router.delete("/:id", deleteTodo);

router.put("/:id", updateTodo);

export default router;
