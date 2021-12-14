import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import * as holidayService from "../../../services/holidayService";
import AuthContext from "../../../contexts/AuthContext";

import "./HolidayCard.css";

const HolidayCard = (props) => {
	const destinationId = props.destination.id;
	let likedBy = [];
	let alreadyLiked = false;

	if(props.destination.acf.liked_by_ids){
		likedBy = props.destination.acf.liked_by_ids;
	}
	
	let[likesCount, setLikesCount] = useState(likedBy.length);
	
	let userInfo = useContext(AuthContext).user;
	let userID;
	const userToken = userInfo.token;
	
	if(userToken){
		userID = userInfo[0].id;
	}
	
	const likeHandler = (e) => {
		e.preventDefault();
		
		const updatedDestination = {
			  'acf': {
				'liked_by_ids': likedBy,
			  },
		  };
		
		if (userToken){
			if (likedBy.some(user => user.id === `${userID}`)) {
				alreadyLiked = true;
				toast.error('You have already liked this destination!');
				return;
			  } else{
				likedBy.push({"id":`${userID}`});
			  }
		} else {
			toast.error('You must be logged to vote!');
			return;
		}

        if(!alreadyLiked && userToken){
			holidayService.updateDestination(destinationId, updatedDestination, userToken).then(() => (
				holidayService.getOne(destinationId).then(response => {
					setLikesCount(response.acf.liked_by_ids.length);
					toast.success('You have successfully liked the destination!');
				})
			));
		}
    }

	return (
		<div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-xxs-12">
			<div className="tm-home-box-2">
				<div className="center-cropped" style={{ backgroundImage: `url(${props.destination.acf.destination_image_url})` }}>
				</div>
				<h3>{props.destination.acf.destination_description}</h3>
				<p className="tm-date">{props.destination.acf.destination_publish_date}</p>
				<div className="tm-home-box-2-container">
					<NavLink to="#" onClick={likeHandler} className="tm-home-box-2-link">
						<i className="fa fa-heart tm-home-box-2-icon border-right">
							{ likesCount ? ` ${likesCount}` : null }
						</i>
					</NavLink>
					<NavLink to={`/destinations/${props.destination.id}`} className="tm-home-box-2-link">
						<span className="tm-home-box-2-description">{props.destination.acf.destination_title}</span>
					</NavLink>
					<NavLink to={`/destinations/${props.destination.id}/edit`} className="tm-home-box-2-link">
						<i className="fa fa-edit tm-home-box-2-icon border-left"></i>
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default HolidayCard;
