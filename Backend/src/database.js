import dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize";
import pg from "pg";
var sequelize;

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DATABASE, DIALECT } =
  process.env;

// Initializes Database from the main App
export async function databaseInitialize() {
  const client = new pg.Client({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
  });

  try {
    await client.connect();
	// Check if Database Exists
    await client.query(`CREATE DATABASE ${DATABASE}`);
    console.log(rows);
  } catch (error) {
	// Ignore "Database Exists" Error
    if (error.code !== "42P04") {
      console.error("Error Database Creation:", error);
    }
  } finally {
	// Instansiate new Sequelize Object after database creation
    sequelize = new Sequelize(DATABASE, DB_USER, DB_PASSWORD, {
      host: DB_HOST,
      port: DB_PORT,
      dialect: DIALECT,
      logging: false,
    });

    await client.end();
  }
}
export default sequelize;
