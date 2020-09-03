import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get("/api/v1/status", (context) => {
  context.response.status = 200;
  context.response.body = "OK";
});

export default router;
