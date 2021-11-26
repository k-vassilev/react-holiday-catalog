
import {useState, useEffect} from 'react';
import { NavLink } from "react-router-dom";

import * as holidayService from "../../services/holidayService";
import * as userService from "../../services/userService";

import './DestinationDetails.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const DestinationDetails = ({
	match,
	history,
}) => {
	const [destination, setDestination] = useState({});
	useEffect(async () => {
		let result = await holidayService.getOne(match.params.destinationId);
		setDestination(result);
	}, []);

	const [author, setAuthor] = useState({});
	useEffect(async () => {
		let result = await userService.getOneUser(destination.author);
		setAuthor(result);
	}, [destination.author]);

	const onDelete = (e) => {
        e.preventDefault();

        const destinationId = match.params.destinationId;

        holidayService.deleteDestination(destinationId)
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
					<p className="destination-author">
						{author.name}
					</p>
	
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