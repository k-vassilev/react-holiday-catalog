import './MostPopularHolidays.css';
import HolidayCard from './HolidayCard/HolidayCard';

const MostPopularHolidays = () => {
	return (
		<>
			<section className="tm-white-bg section-padding-bottom">
				<div className="container">
					<div className="row">
						<div className="tm-section-header section-margin-top">
							<div className="col-lg-4 col-md-6 col-sm-6">
								<h2 className="tm-section-title">Most Popular Destinations:</h2>
							</div>
						</div>
						<HolidayCard />
						<HolidayCard />
						<HolidayCard />
						<HolidayCard />
					</div>
				</div>
			</section>
		</>
	);
};
export default MostPopularHolidays;
