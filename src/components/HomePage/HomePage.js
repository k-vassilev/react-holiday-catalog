import * as holidayService from "../../services/holidayService";
import { useState, useEffect } from "react";
import "./HomePage.css";

import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import PopularHolidayCard from "../MostPopularHolidays/PopularHolidayCard/PopularHolidayCard";
import Authors from "../Authors/Authors";
import Footer from "../Footer/Footer";

const HomePage = () => {
	const [mostPopularHoliday, setMostPopularHoliday] = useState([]);
	useEffect(() => {
		holidayService.getLatest().then((result) => {
			setMostPopularHoliday(result);
		});
	}, []);

	return (
		<>
			<Header />
			<Banner />
			<section className="tm-white-bg section-padding-bottom">
				<div className="container">
					<div className="row">
						<div className="tm-section-header section-margin-top">
							<div className="col-lg-4 col-md-6 col-sm-6">
								<h2 className="tm-section-title">Most Popular Destinations:</h2>
							</div>
						</div>
						{mostPopularHoliday.length > 0 ? (
							mostPopularHoliday.map((x) => (
								<PopularHolidayCard key={x._id} destination={x} />
							))
						) : (
							<p>No destinations yet</p>
						)}
					</div>
				</div>
			</section>
			<Authors />
			<Footer />
		</>
	);
};

export default HomePage;
