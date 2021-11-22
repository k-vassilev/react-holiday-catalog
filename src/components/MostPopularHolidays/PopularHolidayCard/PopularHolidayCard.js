import "./PopularHolidayCard.css";

const PopularHolidayCard = ({ destination }) => {
	return (
		<>
			<div className="col-lg-6">
				<div className="tm-home-box-3">
					<div className="tm-home-box-3-img-container">
						<div className="center-cropped" style={{ backgroundImage: `url(${destination.imageUrl})` }}>
						</div>
					</div>
					<div className="tm-home-box-3-info">
						<p className="tm-home-box-3-description">
							{destination.description}
						</p>
						<div className="tm-home-box-2-container">
							<a className="tm-home-box-2-link">
								<i className="fa fa-heart tm-home-box-2-icon border-right">
									{" "}
									{destination.likes}
								</i>
							</a>
							<a href="#" className="tm-home-box-2-link">
								<span className="tm-home-box-2-description box-3">
									{destination.title}
								</span>
							</a>
							<a href="#" className="tm-home-box-2-link">
								<i className="fa fa-edit tm-home-box-2-icon border-left"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PopularHolidayCard;
