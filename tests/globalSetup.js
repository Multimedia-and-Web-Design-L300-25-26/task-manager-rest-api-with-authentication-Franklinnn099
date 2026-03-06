import { MongoMemoryServer } from "mongodb-memory-server";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function () {
  const mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  process.env.MONGO_URI = uri;
  process.env.JWT_SECRET = "testsecretkey123";

  const envTestPath = path.join(__dirname, "..", ".env.test");
  fs.writeFileSync(envTestPath, `MONGO_URI=${uri}\nJWT_SECRET=testsecretkey123\n`);

  globalThis.__MONGO_SERVER__ = mongoServer;
}
