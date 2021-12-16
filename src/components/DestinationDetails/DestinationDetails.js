import {useState, useEffect, useContext} from 'react';
import { NavLink } from "react-router-dom";
import toast from 'react-hot-toast';
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

	if (userToken){
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
			<section className="destination-details">
				<div className="details-wrapper">
					<h1 className="destination-title-h1">{destination.acf.destination_title} | <span className="area-text">Area: {destination.acf.destination_area}</span></h1>
					<div className="info-section">

						<div className="center-cropped details-image" style={{ backgroundImage: `url(${destination.acf.destination_image_url})` }}>
						</div>

						<div className="description-wrapper">
							<h2 className="about-the-destination">About:</h2>

							<p className="text">
							{destination.acf.destination_description}
							</p>

							
						</div>
					</div>
					<div className="details-controls">
						<div className="created-by-wrapper">
							<h2 className="created-by-h2">Created by: </h2>
							<DestinationAuthor authorId = {destination.author}/>
						</div>
						{
							destination.author === userID
								?<div className="control-btns">
									<NavLink to={`/destinations/${destination.id}/edit`}>
										<button className="edit-btn">Edit</button>
									</NavLink>
									<button onClick={onDelete} className="delete-btn">Delete</button>
								</div>
								: null
						}
					</div>
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