import Koa from "koa";
import Router from "@koa/router";
import cors from "@koa/cors";
import bodyParser from "koa-bodyparser";
import fs from "fs/promises";
import path from "path";

const app = new Koa();
const router = new Router();

app.use(cors());
app.use(bodyParser());

router.post("/save", async (ctx) => {
  const payload = ctx.request.body;
  await fs.writeFile(
    path.resolve("./server/data.json"),
    JSON.stringify(payload, null, 2),
    {}
  );
  ctx.body = "OK";
});

router.get("/load", async (ctx) => {
  const payload = (
    await fs.readFile(path.resolve("./server/data.json"))
  ).toString();
  ctx.body = payload;
  ctx.set("Content-Type", "application/json");
});

app.use(router.routes()).use(router.allowedMethods()).listen(8000);
