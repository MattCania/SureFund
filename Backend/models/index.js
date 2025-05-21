import sequelize from "../src/database.js";

export async function databaseSyncronize() {
  try {
    sequelize.authenticate();
    sequelize.sync({ alter: true });
    console.log("Successful Syncronization!");
  } catch (error) {
    console.log("Syncronization Failed!", error);
  }
}

export { sequelize };
