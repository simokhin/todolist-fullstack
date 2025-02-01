import mongoose from "mongoose";

const MONGODB = process.env.MONGODB;

export const db = mongoose
  .connect(MONGODB)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });
