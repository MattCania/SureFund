import sequelize, { databaseInitialize } from "../src/database.js";

export async function databaseSyncronize() {
	try {
		await databaseInitialize()

		console.log('Successful Syncronization!')
	} catch (error) {
		console.log('Syncronization Failed!', error)
	}
}

export { sequelize };