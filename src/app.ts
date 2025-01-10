import express from "express";
import "reflect-metadata";
import userRoutes from "./routes/user.routes";
import { connectDatabase } from "./config/database";


const app = express();

app.use(express.json());

app.use("/users", userRoutes);

connectDatabase();

export default app;