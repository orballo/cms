import Koa from "koa";
import Router from "@koa/router";

const app = new Koa();
const router = new Router();

router.post("/save", async (ctx) => {
  console.log("ctx.body:", ctx.req.body);
  ctx.body = "OK";
  return "OK";
});

app.use(router.routes()).use(router.allowedMethods()).listen(8000);
