import express from "express";
const router = express.Router();

import Todo from "../models/Todo.model.js";

router.get("/", (req, res) => {
  // get all todos
});

router.post("/", async (req, res) => {
  const { todo, priority } = req.body;
  try {
    const newTodo = new Todo({
      todo,
      priority,
    });
    await newTodo.save();
    res.status(200).json(newTodo);
  } catch (error) {
    console.error(erorr);
  }
});

router.delete("/:id", (req, res) => {
  // delete todo
});

router.put("/:id", (req, res) => {
  // change todo
});

export default router;
