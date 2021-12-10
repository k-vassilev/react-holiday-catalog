import {useState, useEffect, useContext} from 'react';
import { NavLink } from "react-router-dom";

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
	let likedByCurrentUser = false;

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

	
	
	const onLike = (e) => {
		e.preventDefault();

		if(destination.acf){
			let destinationLikedBy ={};
			let likedBy = [];

			likedBy = destination.acf.liked_by_ids;
	
				destinationLikedBy = {
					'acf': {
						'liked_by_ids': likedBy,
					},
				};
				
			if(destination.acf.liked_by_ids){
				likedBy = destination.acf.liked_by_ids;
	
				destinationLikedBy = {
					'acf': {
						'liked_by_ids': likedBy,
					},
				};
				
				likedBy.forEach((x) => {
					if(x.id === userID){
						likedByCurrentUser = x.id;
					}
				});
			}

			if(likedByCurrentUser){
				console.log('You have already liked it');
				console.log(likedBy);
			}else{
				console.log("You can like this destination");
				console.log(userID);
				let currentUserObj = {"id":`${userID}`}
				likedBy.push(currentUserObj);
				console.log(destinationLikedBy);
			}
		}
	}

	

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
			<section id="game-details">
				<h1>Destination Details</h1>
				<div className="info-section">
					<div className="game-header">
					<div className="center-cropped" style={{ backgroundImage: `url(${destination.acf.destination_image_url})` }}>
						</div>
						<h1>Destination Title</h1>
							<form onSubmit={onLike}>
                				<button className="button">Like</button>
            				</form>
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