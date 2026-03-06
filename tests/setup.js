import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({ path: ".env.test" });

await mongoose.connect(process.env.MONGO_URI);