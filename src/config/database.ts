import { createConnection } from "typeorm";

export const connectDatabase = async () => {
  try {
    await createConnection();
    console.log("Database connected successfully.");
  } catch (err) {
    console.error("Database connection failed:", err);
  }
}