import Todo from "../models/Todo.model.js";

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: "Ошибка в получении списка задач", error });
    console.error(error);
  }
};

export const addTodo = async (req, res) => {
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
};

export const deleteTodo = async (req, res) => {
  const id = req.params.id;

  try {
    await Todo.deleteOne({ _id: id });
    res.status(200).json({ message: "Задача успешно удалена" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ошибка при удалении задач", error });
  }
};

export const updateTodo = async (req, res) => {
  const id = req.params.id;
  const { todo, priority } = req.body;

  try {
    if (!todo) {
      const updatedTodo = await Todo.findByIdAndUpdate(
        id,
        { priority },
        { new: true }
      );
      res.status(200).json(updatedTodo);
    }
    if (!priority) {
      const updatedTodo = await Todo.findByIdAndUpdate(
        id,
        { todo },
        { new: true }
      );
      res.status(200).json(updatedTodo);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ошибка при обновлении задачи", error });
  }
};
