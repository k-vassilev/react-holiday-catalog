import {useState, useEffect, useContext} from 'react';
import { NavLink } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { confirm } from "react-confirm-box";
import * as holidayService from "../../services/holidayService";
import AuthContext from '../../contexts/AuthContext';
import DestinationAuthor from './DestinationAuthor/DestinationAuthor';
import './DestinationDetails.css';

const DestinationDetails = ({
	match,
	history,
}) => {
	const [destination, setDestination] = useState({});
	const userToken = useContext(AuthContext).user.token;
	let userInfo = useContext(AuthContext).user;
	let userID;

	if(userToken){
		userID = userInfo[0].id;
	}

	useEffect(() => {
		const getOneHoliday = async () => {
			let result = await holidayService.getOne(match.params.destinationId);
			setDestination(result);
		}
		getOneHoliday();
		
	}, [match.params.destinationId]);

	const onDelete = async(e) => {
        e.preventDefault();

		const result = await confirm("Are you sure?");
		if (result) {
			const destinationId = match.params.destinationId;

        	holidayService.deleteDestination(destinationId, userToken)
            .then(() => {
				toast.success('You have successfully deleted the destination!');
				setTimeout(() => {
					history.push(`/destinations`);
                	return;
				}, 1500);
            });
		  }
		  toast.error('You have not deleted the destination!');
        
    }

	if(destination.acf){
		return (
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
					{
						destination.author === userID
							?<div className="buttons">
								<NavLink to={`/destinations/${destination.id}/edit`} className="button">
									Edit
								</NavLink>
								<form onSubmit={onDelete}>
                					<button className="button">Delete</button>
            					</form>
							</div>
							: null
					}
				</div>
			</section>
		)
	} else{
		return (
			<h2>Loading...</h2>
		)
	}
	
}

export default DestinationDetails;