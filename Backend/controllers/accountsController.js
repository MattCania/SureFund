import { UserAccountsModel, UserProfilesModel } from "../models/index.js"

async function registerAccount (req, res) {

	const {email, password, firstname, middlename, lastname, address, contacts} = req.body

	try {
		const accountRes = await UserAccountsModel.create({
			email,
			password
		})
		if (!accountRes) {
			throw new Error("Account Creation Error")
		}
		const profileRes = await UserProfilesModel.create({
			firstname, 
			middlename,
			lastname,
			address,
			contacts
		})

		const accountId = accountRes.accountId

		if (!profileRes) {
			await UserAccountsModel.destroy({
				where: {accountId}
			})
			throw new Error('Profile Creation Error')
		}

		res.status(200).json({message: 'Successful Registration'})
	} catch (error) {
		return res.status(500).json({error: error.message})
	}
}

async function loginAccount (req, res) {

	const {email, password} = req.body;

	try {
		const emailRes = await UserAccountsModel.findOne({where: {email}})
		
		if (!emailRes){
			throw new Error('Email Not Found!')
		}

		const accountPassword = emailRes.password

		const isMatch = bcrypt.compare(password, accountPassword)
		if (!isMatch) {
			throw new Error('Incorrect Password')
		}

		const accountId = emailRes.accountId
		const accountEmail = emailRes.email

		const profileRes = await UserProfilesModel.findOne({where: {accountId}})

		if (!profileRes){
			throw new Error('Account Profile Not Found!')
		}

		const accountName = `${profileRes.firsName} ${profileRes.middleName} ${profileRes.lastName}`

		const token = {
			accountId,
			accountEmail,
			accountName
		}

		res.status(200).json({message: 'Log In Successful', token: token})
	} catch (error) {
		return res.status(500).json({error: error.message})
	}

}

export default {
	registerAccount,
	loginAccount
}