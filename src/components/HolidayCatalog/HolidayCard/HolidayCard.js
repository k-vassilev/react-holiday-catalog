import { NavLink } from "react-router-dom";

import "./HolidayCard.css";

const HolidayCard = (props) => {
	return (
		<>
			<div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-xxs-12">
				<div className="tm-home-box-2">
					<div className="center-cropped" style={{ backgroundImage: `url(${props.destination.acf.destination_image_url})` }}>
						</div>
					<h3>{props.destination.acf.destination_description}</h3>
					<p className="tm-date">{props.destination.acf.destination_publish_date}</p>
					<div className="tm-home-box-2-container">
						<a href="#" className="tm-home-box-2-link">
							<i className="fa fa-heart tm-home-box-2-icon border-right"></i>
						</a>
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
