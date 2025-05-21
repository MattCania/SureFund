import dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize";
import pg from "pg";

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DATABASE, DIALECT } =
  process.env;

var sequelize;

export async function databaseInitialize() {
  const client = new pg.Client({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
  });

  try {
    await client.connect();

    await client.query(`CREATE DATABASE ${DATABASE}`);
  } catch (error) {
    // console.error("Error creating database:", error);
  } finally {
    sequelize = new Sequelize(DATABASE, DB_USER, DB_PASSWORD, {
      host: DB_HOST,
      port: DB_PORT,
      dialect: DIALECT,
      logging: false,
    });

	sequelize.authenticate()
	sequelize.sync({alter: true})
    await client.end();
  }
}
export default sequelize;
