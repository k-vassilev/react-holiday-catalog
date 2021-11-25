
import {useState, useEffect} from 'react';

import * as holidayService from "../../services/holidayService";

import './DestinationDetails.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const DestinationDetails = ({
	match,
}) => {
	const [destination, setDestination] = useState({});

	useEffect(async () => {
		let result = await holidayService.getOne(match.params.destinationId);
		setDestination(result);
	}, []);

	if(destination.acf){
		return (
			<>
			<Header />
			<section id="game-details">
				<h1>Game Details</h1>
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
	
					<div className="buttons">
						<a href="#" className="button">
							Edit
						</a>
						<a href="#" className="button">
							Delete
						</a>
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