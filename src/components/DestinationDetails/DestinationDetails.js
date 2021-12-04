import {useState, useEffect, useContext} from 'react';
import { NavLink } from "react-router-dom";

import * as holidayService from "../../services/holidayService";
import AuthContext from '../../contexts/AuthContext';
import DestinationAuthor from './DestinationAuthor/DestinationAuthor';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './DestinationDetails.css';

const DestinationDetails = ({
	match,
	history,
}) => {
	const [destination, setDestination] = useState({});
	const userToken = useContext(AuthContext).user.token;

	useEffect(() => {
		const getOneHoliday = async () => {
			let result = await holidayService.getOne(match.params.destinationId);
			setDestination(result);
		}
		getOneHoliday();
		
	}, [match.params.destinationId]);

	const onDelete = (e) => {
        e.preventDefault();

        const destinationId = match.params.destinationId;

        holidayService.deleteDestination(destinationId, userToken)
            .then(() => {
                history.push(`/destinations`);
                return;
            });
    }

	if(destination.acf){
		return (
			<>
			<Header />
			<section id="game-details">
				<h1>Destination Details</h1>
				<div className="info-section">
					<div className="game-header">
					<div className="center-cropped" style={{ backgroundImage: `url(${destination.acf.destination_image_url})` }}>
						</div>
						<h1>Destination Title</h1>
						<span className="levels">{destination.acf.destination_likes}</span>
						<p className="type">{destination.acf.destination_title}</p>
					</div>
	
					<p className="text">
					{destination.acf.destination_description}
					</p>

					<h2>Added by: </h2>
					<DestinationAuthor authorId = {destination.author}/>
	
					<div className="buttons">
						<NavLink to={`/destinations/${destination.id}/edit`} className="button">
							Edit
						</NavLink>
						<form onSubmit={onDelete}>
                			<button className="button">Delete</button>
            			</form>
					</div>
				</div>
	
			</section>
			<Footer />
			</>
		)
	} else{
		return (
			<>
				<Header />
				<h2>Loading...</h2>
				<Footer />
			</>
		)
	}
	
}

export default DestinationDetails;