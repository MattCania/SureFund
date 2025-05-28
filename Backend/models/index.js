import sequelize, { databaseInitialize } from "../src/database.js";
import UserAccounts from "./UserAccounts.js";
import UserProfiles from "./UserProfiles.js";

const UserAccountsModel = UserAccounts(sequelize)
const UserProfilesModel = UserProfiles(sequelize)

export async function databaseSyncronize() {
  try {

    sequelize.authenticate();
    sequelize.sync({ force: true });
    console.log("Successful Syncronization!");
  } catch (error) {
    console.log("Syncronization Failed!", error);
  }
}


export { sequelize, UserAccountsModel, UserProfilesModel };
