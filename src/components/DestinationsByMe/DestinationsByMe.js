import { isAuth	} from "../../hoc/isAuth";

import './DestinationsByMe.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const DestinationsByMe = () => {
	return (
		<>
			<Header/>
			<h1>Destinations By me</h1>
			<Footer/>
		</>
	);
};

export default isAuth(DestinationsByMe);