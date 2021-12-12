import * as holidayService from "../../services/holidayService";
import * as userService from "../../services/userService";
import { useState, useEffect } from "react";
import "./HomePage.css";

import Banner from "../Banner/Banner";
import PopularHolidayCard from "../MostPopularHolidays/PopularHolidayCard/PopularHolidayCard";
import Author from "../Authors/Author/Author";

const HomePage = () => {
	const [mostPopularHoliday, setMostPopularHoliday] = useState([]);
	useEffect(() => {
		holidayService.getFourNewestDestinations().then((result) => {
			setMostPopularHoliday(result);
		});
	}, []);

	const [authors, setAuthors] = useState([]);
	useEffect(() => {
		userService.getAllUsers().then((result) => {
			setAuthors(result);
		});
	}, []);

	return (
		<>
			<Banner />
			<section className="tm-white-bg section-padding-bottom">
				<div className="container">
					<div className="row">
						<div className="tm-section-header section-margin-top">
							<div className="col-lg-4 col-md-6 col-sm-6">
								<h2 className="tm-section-title">Recently added destinations:</h2>
							</div>
						</div>
						{mostPopularHoliday.length > 0 ? (
							mostPopularHoliday.map((x) => (
								<PopularHolidayCard key={x.id} destination={x} />
							))
						) : (
							<p>No destinations yet</p>
						)}
					</div>
				</div>
			</section>
			<section className="container tm-home-section-1" id="more">
				<div className="tm-section-header">
					<div className="col-lg-6 col-md-6 col-sm-6">
						<h2 className="tm-section-title">Contributors:</h2>
					</div>
				</div>
				{authors.length > 0 ? (
					authors.map((x) => <Author key={x.id} author={x} />)
				) : (
					<p>No authors yet</p>
				)}
			</section>
		</>
	);
};

export default HomePage;
