import { NavLink } from "react-router-dom";
import { useContext  } from "react";
import * as holidayService from "../../../services/holidayService";
import AuthContext from "../../../contexts/AuthContext";

import "./HolidayCard.css";

const HolidayCard = (props) => {
	let likes = [];
	let likesNumber = props.destination.acf.liked_by_ids;
	if (likesNumber){
		likes = likesNumber;
	}

	const userToken = useContext(AuthContext).user.token;
	let userInfo = useContext(AuthContext).user;
	let userID;

	if(userToken){
		userID = userInfo[0].id;
	}

	const likeHandler = (e) => {
        e.preventDefault();

        const destinationId = props.destination.id;

		if(userToken){
			likes.push({"id":`${userID}`})
			console.log(likes);
		}

		const updatedDestination = {
		  	'acf': {
				'liked_by_ids': likes,
		  	},
		  };

        holidayService.updateDestination(destinationId, updatedDestination, userToken)
            .then(() => {
                return;
            });
    }
	
	return (
		<>
			<div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-xxs-12">
				<div className="tm-home-box-2">
					<div className="center-cropped" style={{ backgroundImage: `url(${props.destination.acf.destination_image_url})` }}>
						</div>
					<h3>{props.destination.acf.destination_description}</h3>
					<p className="tm-date">{props.destination.acf.destination_publish_date}</p>
					<div className="tm-home-box-2-container">
						<NavLink to="#" onClick={likeHandler} className="tm-home-box-2-link">
								<i className="fa fa-heart tm-home-box-2-icon border-right">
									{" "}
									{
										likesNumber ? likesNumber.length : null
									}
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
		</>
	);
};

export default HolidayCard;
