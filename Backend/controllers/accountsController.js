import { UserAccountsModel, UserProfilesModel } from "../models/index.js"

async function registerAccount () {

	const {email, password, firstname, middlename, lastname, address, contacts} = req.body

	try {
		const accountRes = await UserAccounts
	} catch (error) {
		
	}


}

function loginAccount () {

}

export default {
	registerAccount,
	loginAccount
}