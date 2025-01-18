// IMPORTS
import express from "express";
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {});

// Routes IMPORTS
import { adminRouter } from "./routes/admin.js";
import { userRouter } from "./routes/user.js";
import { carRouter } from "./routes/car.js";

app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.use("/car", carRouter);

app.listen(PORT, () => {
  console.log(`PORT is listening on ${PORT}`);
});
