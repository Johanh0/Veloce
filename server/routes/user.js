import express from "express";
import bcrypt from "bcrypt";
import { promisePool } from "../database/db.js";
const userRouter = express.Router();

userRouter.get("/id/:id", (req, res) => {
  res.send({
    msg: "working",
  });
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  //   Validate if the user data is complete
  if (!email || !password) {
    res.status(400).json({
      error: "All fields are required",
    });
    return;
  }

  try {
    const query = "SELECT * FROM users WHERE email = ?";
    const [user] = await promisePool.execute(query, [email]);

    if (!user.length) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user[0].password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res.status(200).json({
      message: "Login successful",
    });
  } catch {
    console.error("Error trying to login:", error);
    res.status(500).json({ error: "Error login" });
  }
});

userRouter.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  //   Validate if the user data is complete
  if (!firstName || !lastName || !email || !password) {
    res.status(400).json({
      error: "All fields are required",
    });
    return;
  }

  try {
    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Try to insert new usert to the database
    const query =
      "INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)";
    const values = [firstName, lastName, email, hashedPassword];

    const [results] = await promisePool.execute(query, values);

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
