import dotenv from "dotenv";
dotenv.config();

import express from "express";

import { UserAccountsModel, UserProfilesModel } from "./models/index.js";

// Database initialization and syncronizing
import { databaseSyncronize } from "./models/index.js";
import { databaseInitialize } from "./src/database.js";

const app = express();

import accountRouter from './routes/accountsRoutes.js'
app.use('/api', accountRouter)

app.listen(process.env.PORT, async () => {
  if (process.env.NODE_ENV === 'development') {
    
    await databaseInitialize().then(async () => {
      await databaseSyncronize()
    })
    console.log("Syncronizing Finished")
  ;}
  console.log("Backend Server Started with Port: ", process.env.PORT);
});
