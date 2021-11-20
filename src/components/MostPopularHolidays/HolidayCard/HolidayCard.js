import "./HolidayCard.css";

const HolidayCard = () => {
	return (
		<>
			<div className="col-lg-6">
				<div className="tm-home-box-3">
					<div className="tm-home-box-3-img-container">
						<img
							src="/images/index-07.jpg"
							alt="image"
							className="img-responsive"
						/>
					</div>
					<div className="tm-home-box-3-info">
						<p className="tm-home-box-3-description">
							Proin gravida nibhvell velit auctor aliquet. Aenean sollicitudin,
							lorem quis bibendum auctor, nisi elit consequat ipsum
						</p>
						<div className="tm-home-box-2-container">
							<a href="#" className="tm-home-box-2-link">
								<i className="fa fa-heart tm-home-box-2-icon border-right"></i>
							</a>
							<a href="#" className="tm-home-box-2-link">
								<span className="tm-home-box-2-description box-3">Travel</span>
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

export default HolidayCard;
