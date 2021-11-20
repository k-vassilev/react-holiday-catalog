import "./HolidayCard.css";

const HolidayCard = () => {
	return (
		<>
			<div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-xxs-12">
				<div className="tm-home-box-2">
					<img
						src="/images/index-03.jpg"
						alt="image"
						className="img-responsive"
					/>
					<h3>Proin Gravida Nibhvel Lorem Quis Bind</h3>
					<p className="tm-date">28 March 2016</p>
					<div className="tm-home-box-2-container">
						<a href="#" className="tm-home-box-2-link">
							<i className="fa fa-heart tm-home-box-2-icon border-right"></i>
						</a>
						<a href="#" className="tm-home-box-2-link">
							<span className="tm-home-box-2-description">Travel</span>
						</a>
						<a href="#" className="tm-home-box-2-link">
							<i className="fa fa-edit tm-home-box-2-icon border-left"></i>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default HolidayCard;
