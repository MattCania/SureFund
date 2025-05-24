import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export default function LoginPage() {

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



				<form
					className="flex flex-1 justify-start items-center flex-col bg-white rounded-4xl"
				>
					<h1
						className="flex w-full h-auto justify-center items-center text-black text-5xl font-semibold my-12"
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

					<div
						className="flex w-1/2 h-auto relative"
					>
						<input type={showPass ? 'text' : 'password'} name="email" id="email" className="flex w-full h-12 border rounded-xl outline-none px-2 relative" placeholder="yourpass123" />
						<button
							onClick={toggleShowPassword}
							className="absolute flex justify-center items-center w-6 h-6 mx-2 outline-0 right-0 top-1/2 -translate-y-1/2 cursor-pointer"
							type="button"
						>	
							<FontAwesomeIcon icon={showPass ? faEyeSlash : faEye } /> 
						</button>
					</div>

					<input type="submit" value="Log In" className="flex justify-center items-center w-1/2 p-2 bg-zinc-900 text-white rounded-lg my-4 cursor-pointer hover:bg-gray-200 hover:text-black transition-all duration-250"/>

					<h1
						className="flex w-full justify-center items-center my-2 font-semibold"
					>
						Or
					</h1>

					<button
						className="flex justify-center items-center w-1/2 p-2 bg-gray-300 text-black rounded-lg my-4 cursor-pointer hover:bg-black hover:text-gray-200 transition-all duration-250"
						type="button"
					>
						Google Login
					</button>


				</form>


			</div>


		</section>

	)

}