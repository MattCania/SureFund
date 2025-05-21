import dotenv from "dotenv";
dotenv.config();

import express from "express";

import { databaseInitialize } from "./src/database.js";

const app = express();

app.listen(process.env.PORT, async () => {
  if (process.env.NODE_ENV === 'development') {
    await databaseInitialize()
    console.log("Syncronizing Finished")
  ;}
  console.log("Backend Server Started with Port: ", process.env.PORT);
});
