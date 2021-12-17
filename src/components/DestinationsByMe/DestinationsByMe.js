import { isAuth	} from "../../hoc/isAuth";
import { useContext } from "react";
import { useState, useEffect } from "react";
import AuthContext from "../../contexts/AuthContext";

import * as holidayService from "../../services/holidayService";

import './DestinationsByMe.css';
import HolidayCard from "../../components/HolidayCatalog/HolidayCard/HolidayCard";


const DestinationsByMe = () => {
	const contextValue = useContext(AuthContext);
	const authorId = contextValue.user[0].id;
	const userName = contextValue.user[0].name;

	const [ownDestinations, setOwnDestinations] = useState([]);

	useEffect(() => {
		holidayService.getOwnDestinations(authorId).then((result) => {
			setOwnDestinations(result);
		});
	}, [authorId]);

	return (
			<section className="added-by-me-section">
				<h2>Created by {userName}:</h2>
					<div className="row">
							{ownDestinations.length > 0 
								? ( ownDestinations.map((x) => (
									<HolidayCard key={x.id} destination={x} /> ))) 
								: ( <h2 className="no-destinations">You haven`t created any destinations yet.</h2>)}
					</div>
			</section>
	);
};

export default isAuth(DestinationsByMe);