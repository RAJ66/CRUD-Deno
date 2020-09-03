import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import router from "./routes/routes.ts";
import * as flags from "https://deno.land/std/flags/mod.ts";

const { args, exit } = Deno;
const argPort = parse(args).port;

const HOST = config().HOST ?? "127.0.0.1";
const PORT = config().PORT ?? 8080;

const argPort = flags.parse(args).port;
const port = argPort ? Number(argPort) : PORT;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Deno is running: ${HOST}:${PORT}`);
//await app.listen(`${HOST}:${PORT}`);
await app.listen({ port: port });
