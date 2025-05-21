import dotenv from "dotenv";
dotenv.config();

import express from "express";

import { databaseSyncronize } from "./models/index.js";

const app = express();

app.listen(process.env.PORT, async () => {
  await databaseSyncronize();
  console.log("Backend Server Started with Port: ", process.env.PORT);
});
