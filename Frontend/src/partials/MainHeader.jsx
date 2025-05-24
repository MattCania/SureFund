import { Link } from "react-router-dom"
import { faCaretDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react"
import Dropdown from "../components/Dropdown"


function MainHeader() {
	const serviceLinks = [
		{
			label: "Inventory", link: "/surefund/service-inventory"
		},
		{
			label: "E-Wallet", link: "/surefund/service-wallet"
		},
		{
			label: "Analytics", link: "/surefund/service-analytics"
		},
	]

	return (
		<nav
			className="flex justify-between items-center w-full h-auto"
		>
			<div
				className="flex justify-start items-center h-full flex-1"
			>
				<Link to={'/'}
					className="flex justify-center items-center h-full text-white font-bold text-2xl px-8 mr-12"
				>
					SureFund
				</Link>

				<Dropdown label="Services" icon={true} items={serviceLinks}/>

				<Link
					to={'/surefund/about'}
					className="flex justify-center items-center h-full text-white text-md px-4 mx-4 rounded-lg hover:bg-gray-200 hover:text-black transition-all duration-250"
				>
					About Us
				</Link>

				<Link
					to={'/surefund/contacts'}
					className="flex justify-center items-center h-full text-white text-md px-4 mx-4 rounded-lg hover:bg-gray-200 hover:text-black transition-all duration-250"
				>
					Contacts
				</Link>
			</div>
			<div
				className="flex justify-end items-center h-full flex-1"
			>
				
				<Link
					to={'/surefund/login'}
					className="flex justify-center items-center h-full text-white text-md px-4 mx-4 rounded-lg hover:bg-gray-200 hover:text-black transition-all duration-250"
				>
					Sign In
				</Link>

				<Link
					to={'/surefund/register'}
					className="flex justify-center items-center h-full font-medium text-black text-md px-4 mx-4 bg-white rounded-lg"
				>
					Sign Up
				</Link>
			</div>
		</nav>
	)

}

export default MainHeader