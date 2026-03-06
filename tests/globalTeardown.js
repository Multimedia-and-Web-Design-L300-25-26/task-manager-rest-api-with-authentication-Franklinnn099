export default async function () {
  if (globalThis.__MONGO_SERVER__) {
    await globalThis.__MONGO_SERVER__.stop();
  }
}
