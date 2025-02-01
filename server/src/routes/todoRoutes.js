import express from "express";
const router = express.Router();

import Todo from "../models/Todo.model.js";

router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: "Error fetching todos", error });
    console.error(error);
  }
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
    console.error(error);
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await Todo.deleteOne({ _id: id });
    res.status(200).json({ message: "Задача успешно удалена" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ошибка при удалении задач", error });
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { todo, priority } = req.body;

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { todo, priority },
      { new: true }
    );
    res.status(200).json(updatedTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ошибка при обновлении задачи", error });
  }
});

export default router;
