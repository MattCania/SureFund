import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export default function RegisterPage() {

	const [showPass, setShowPass] = useState(false)

	const toggleShowPassword = () => {
		setShowPass(!showPass)
	}


	return (

		<section
			className="flex flex-col md:flex-row w-full h-full justify-center items-center"
		>

			<div
				className="flex w-2/3 h-4/5 border-white gap-16"
			>

				<form
					className="flex flex-1 justify-start items-center flex-col bg-white rounded-4xl transition-all duration-300"
				>
					<h1
						className="flex w-full h-auto justify-center items-center text-black text-5xl font-semibold my-8"
					>
						Sign Up
					</h1>

					<label
						className="flex w-1/2 h-auto justify-start items-center text-black text-lg font-semibold"
						htmlFor="email"
					>
						Email:
					</label>

					<input type="text" name="email" id="email" className="flex w-1/2 h-12 border rounded-xl outline-none px-2" placeholder="email@gmail.com" />

					<label
						className="flex  w-1/2 h-auto justify-start items-center text-black text-lg font-semibold"
						htmlFor="email"
					>
						Password:
					</label>

					<input type={showPass ? 'text' : 'password'} name="email" id="email" className="flex w-1/2 h-12 border rounded-xl outline-none px-2 relative" placeholder={showPass ? 'yourPass123' : '********'} />

					<label
						className="flex w-1/2 h-auto justify-start items-center text-black text-lg font-semibold"
						htmlFor="email"
					>
						Confirm Password:
					</label>

					<input type={showPass ? 'text' : 'password'} name="email" id="email" className="flex w-1/2 h-12 border rounded-xl outline-none px-2 relative" placeholder={showPass ? 'yourPass123' : '********'} />

					<label className="flex justify-between items-center w-1/2 h-auto my-2" htmlFor="showPassword">Show Password

						<button
							onClick={toggleShowPassword}
							className="flex justify-center items-center w-8 h-8 mx-2 outline-0 cursor-pointer rounded-full hover:bg-gray-900 hover:text-white transition-all duration-250"
							type="button"
						>
							<FontAwesomeIcon icon={showPass ? faEyeSlash : faEye} />
						</button>
					</label>

					<input type="submit" value="Register" className="flex justify-center items-center w-1/2 p-2 bg-zinc-900 text-white rounded-lg my-2 cursor-pointer hover:bg-gray-200 hover:text-black transition-all duration-250" />

				</form>
				<div
					className="flex flex-1 justify-center items-start flex-col"
				>

					<h1
						className="flex w-full h-auto justify-start items-center text-white text-5xl font-semibold"
					>
						Share Help
					</h1>
					<h1
						className="flex w-full h-auto justify-end items-center text-white text-5xl font-semibold"
					>
						Receive Help
					</h1>
					<h1
						className="flex w-full h-auto justify-start items-center text-white text-5xl font-semibold"
					>
						In any Emergency
					</h1>
					<p
						className="flex w-full h-auto justify-start items-center text-white text-xl font-semibold"
					>
						At your Service, SureFund! An emergency lending app for any of your loaning needs
					</p>

				</div>


			</div>
		</section>
	)

}