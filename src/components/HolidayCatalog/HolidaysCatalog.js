import "./HolidaysCatalog.css";
import HolidayCard from "./HolidayCard/HolidayCard";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const HolidaysCatalog = () => {
	return (
		<>
			<Header />
			<section className="container tm-home-section-1" id="more">
				<div className="section-margin-top">
					<div className="tm-section-header">
						<div className="col-lg-6 col-md-6 col-sm-6">
							<h2 className="tm-section-title">All holidays</h2>
						</div>
					</div>

					<div className="row">
						<HolidayCard />
						<HolidayCard />
						<HolidayCard />
						<HolidayCard />
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default HolidaysCatalog;
