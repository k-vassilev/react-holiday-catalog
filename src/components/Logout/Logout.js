import './Logout.css';
import toast, { Toaster } from 'react-hot-toast';



const Logout = () => {

	{toast.success('Successfully registered!')}
	setTimeout(() => {
		history.push('/')
	}, 1500);
	
	return(
		<Toaster/>
	)
}

export default Logout;