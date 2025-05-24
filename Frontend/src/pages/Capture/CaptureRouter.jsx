import  {Routes, Route} from 'react-router-dom'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'

export default function CaptureRouter() {

	return(

		<Routes>

			<Route path='service-lend&borrow' element={<h1>Lend And Borrow</h1>} />
			<Route path='service-wallet' element={<h1>E Wallet</h1>} />
			<Route path='service-emergency' element={<h1>Emeregency Requests</h1>} />
			<Route path='login' element={<LoginPage/>} />
			<Route path='register' element={<RegisterPage/>} />

		</Routes>

	)

}
