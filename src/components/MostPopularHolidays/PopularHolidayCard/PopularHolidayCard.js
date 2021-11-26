import { NavLink } from "react-router-dom";

import "./PopularHolidayCard.css";

const PopularHolidayCard = (props) => {
	console.log(props);
	return (
		<>
			<div className="col-lg-6">
				<div className="tm-home-box-3">
					<div className="tm-home-box-3-img-container">
						<div className="center-cropped" style={{ backgroundImage: `url(${props.destination.acf.destination_image_url})` }}>
						</div>
					</div>
					<div className="tm-home-box-3-info">
						<p className="tm-home-box-3-description">
							{props.destination.acf.destination_description}
						</p>
						<div className="tm-home-box-2-container">
							<a className="tm-home-box-2-link">
								<i className="fa fa-heart tm-home-box-2-icon border-right">
									{" "}
									{props.destination.acf.destination_likes}
								</i>
							</a>
							<NavLink to={`/destinations/${props.destination.id}`} className="tm-home-box-2-link">
								<span className="tm-home-box-2-description box-3">
									{props.destination.acf.destination_title}
								</span>
							</NavLink>
							<NavLink to={`/destinations/${props.destination.id}/edit`} className="tm-home-box-2-link">
								<i className="fa fa-edit tm-home-box-2-icon border-left"></i>
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PopularHolidayCard;
