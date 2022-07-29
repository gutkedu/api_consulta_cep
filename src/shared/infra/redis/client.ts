import { createClient } from "redis";

const client = createClient({
  url: "redis://cache:6379",
});

client.on("error", (err) => console.log("Redis client error: ", err));
client.on("ready", () => console.log("Redis client is ready"));

export { client };
