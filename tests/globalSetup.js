import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({ path: ".env.test" });

// drop the test database before running tests so we start fresh
export default async function () {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  await conn.connection.db.dropDatabase();
  await mongoose.disconnect();
}
