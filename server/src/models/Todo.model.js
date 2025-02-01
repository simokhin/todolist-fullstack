import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    todo: {
      type: String,
      required: true,
    },
    priority: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Todo = new mongoose.model("Todo", todoSchema);

export default Todo;
