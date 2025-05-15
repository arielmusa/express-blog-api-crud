import express from "express";
import "dotenv/config";
import { router } from "./routers/router.js";

const app = express();
const { APP_HOST, APP_PORT } = process.env;

const url = `${APP_HOST}${APP_PORT ? ":" + APP_PORT : ""}`;

app.use(express.static("public"));
app.use(express.json());
app.use("/posts", router);

app.listen(APP_PORT, () => {
  console.log(`Listening ${url}`);
});
