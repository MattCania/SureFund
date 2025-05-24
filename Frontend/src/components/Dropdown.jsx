import { useState } from "react"
import { Link } from "react-router-dom"
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Dropdown({ linkStyle, buttonStyle, dropdownStyle, label, items, icon }) {

	const [serviceDropdown, showServiceDropdown] = useState(false)

	const toggleDropdown = () => {
		showServiceDropdown(!serviceDropdown)
	}

	return (

		<div
			className={`flex justify-center items-center h-full group relative`}
		>
			<button
				className={`flex justify-center items-center h-full w-full ${buttonStyle ? buttonStyle : ' text-white text-md px-4 outline-none rounded-lg cursor-pointer hover:bg-gray-200 hover:text-black transition-all duration-250'}`}
				// onClick={toggleDropdown}
			>
				{label}
				{icon && <FontAwesomeIcon className="mx-4" icon={serviceDropdown ? faCaretUp : faCaretDown} />}
			</button>

			<div
				// className={`${serviceDropdown ? 'flex' : 'hidden'} flex-col justify-center items-center h-auto ${dropdownStyle ? dropdownStyle : 'shadow-xl shadow-gray-800 rounded-b-xl absolute top-full w-full py-4'}`}
				className={`hidden group-hover:flex flex-col justify-center items-center h-auto ${dropdownStyle ? dropdownStyle : 'shadow-xl shadow-gray-800 rounded-b-xl absolute top-full w-full py-4'}`}
			>
				{
					items.map((item, index) => (
						<Link
							key={index}
							className={`flex w-full justify-start items-center px-2 py-2 ${linkStyle ? linkStyle : ' text-white hover:bg-gray-200 text-sm hover:text-black transition-all duration-250'} `}
							to={item.link}
						>
							{item.label}
						</Link>
					))
				}
			</div>


		</div>

	)

}