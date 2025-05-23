import { Link } from "react-router-dom"
import { faCaretDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react"


function MainHeader() {
	const [serviceDropdown, showServiceDropdown] = useState(false)

	const toggleDropdown = () => {
		showServiceDropdown(!serviceDropdown)
	}

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

				<div
					className="flex justify-center items-center h-full relative"
				>
					<button
						className='flex justify-center items-center h-full text-white text-md px-4 mx-4"'
						onClick={toggleDropdown}
					>
						Service 
						<FontAwesomeIcon className="mx-4" icon={faCaretDown}/>
					</button>

					<div
						className={`${serviceDropdown ? 'flex' : 'hidden'} flex-col justify-center items-center h-auto border text-white absolute top-full w-full p-4`}
					>
						<Link
							to={''}
						>
							1
						</Link>
						<Link
							to={''}
						>
							2
						</Link>
						<Link
							to={''}
						>
							3
						</Link>
					</div>

				</div>


				<Link
					to={'/surefund/about'}
					className="flex justify-center items-center h-full text-white text-md px-4 mx-4"
				>
					About Us
				</Link>

				<Link
					to={'/surefund/contacts'}
					className="flex justify-center items-center h-full text-white text-md px-4 mx-4"
				>
					Contacts
				</Link>
			</div>
			<div
				className="flex justify-end items-center h-full flex-1"
			>
				
				<Link
					to={'/surefund/login'}
					className="flex justify-center items-center h-full text-white text-md px-4 mx-4"
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