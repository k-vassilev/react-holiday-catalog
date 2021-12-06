import { isAuth	} from "../../hoc/isAuth";
import { useContext } from "react";
import { useState, useEffect } from "react";
import AuthContext from "../../contexts/AuthContext";

import * as holidayService from "../../services/holidayService";

import './DestinationsByMe.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PopularHolidayCard from "../MostPopularHolidays/PopularHolidayCard/PopularHolidayCard";

const DestinationsByMe = () => {
	const contextValue = useContext(AuthContext);
	const authorId = contextValue.user[0].id;

	const [ownDestinations, setOwnDestinations] = useState([]);

	useEffect(() => {
		holidayService.getOwnDestinations(authorId).then((result) => {
			console.log(result);
			setOwnDestinations(result);
		});
	}, []);

	return (
		<>
			<Header/>
			<section className="tm-white-bg section-padding-bottom">
				<div className="container">
					<div className="row">
						<div className="tm-section-header section-margin-top">
							<div className="col-lg-4 col-md-6 col-sm-6">
								<h2>Destinations By me:</h2>
							</div>
						</div>
							{ownDestinations.length > 0 
								? ( ownDestinations.map((x) => (
									<PopularHolidayCard key={x.id} destination={x} /> ))) 
								: ( <p>No destinations yet</p>)}
					</div>
				</div>
			</section>
			<Footer/>
		</>
	);
};

export default isAuth(DestinationsByMe);