import express from "express";
import { promisePool } from "../database/db.js";
const userRouter = express.Router();

userRouter.get("/id/:id", (req, res) => {
  res.send({
    msg: "working",
  });
});

userRouter.post("/create", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  //   Validate if the user data is complete
  if (!firstName || !lastName || !email || password) {
    res.status(400).json({
      error: "All fields are required",
    });
    return;
  }

  try {
    const [results] = await promisePool.execute(
      "INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)",
      [firstName, lastName, email, password]
    );

    res.status(200).json({
      message: "User created",
      id: results.id,
    });
  } catch {
    console.error("Error trying to create the user:", error);
    res.status(500).json({ error: "Error creating the user" });
  }
});

export { userRouter };
