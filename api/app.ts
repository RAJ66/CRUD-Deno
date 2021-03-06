import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import * as flags from "https://deno.land/std/flags/mod.ts";
import router from "./routes/routes.ts";

const { args } = Deno;
const DEFAULT_PORT = 8080;
const argPort = flags.parse(args).port;
const port = argPort ? Number(argPort) : DEFAULT_PORT;

const app = new Application();
const route = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server is running on port ${port}`);

await app.listen({ port });
