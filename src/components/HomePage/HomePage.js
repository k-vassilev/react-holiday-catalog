import { useState, useEffect } from "react";
import * as holidayService from "../../services/holidayService";
import * as userService from "../../services/userService";
import "./HomePage.css";

import Banner from "../Banner/Banner";
import HolidayCard from "../HolidayCatalog/HolidayCard/HolidayCard";
import Author from "../Authors/Author/Author";

const HomePage = () => {
	const [recentlyAddedDestinations, setRecentlyAddedDestinations] = useState([]);
	const [authors, setAuthors] = useState([]);

	useEffect(() => {
		holidayService.getFourNewestDestinations().then((result) => {
			setRecentlyAddedDestinations(result);
		});
	}, []);

	useEffect(() => {
		userService.getAllUsers().then((result) => {
			setAuthors(result);
		});
	}, []);

	return (
		<>
			<Banner />
			<section className="recently-featured-destinations-section">
				<h2 className="tm-section-title home-destinations-title">Recently added destinations:</h2>
				<div className="recently-featured-destinations-wrappers">
				{
					recentlyAddedDestinations.length > 0 
					? (
						recentlyAddedDestinations.map((x) => (
						<HolidayCard key={x.id} destination={x} />
						))
					) : 
						<p>No destinations yet</p>
				}
				</div>
			</section>

			<section className="container tm-home-section-1">
				<h2 className="tm-section-title users-wrapper">All registered users:</h2>
				{
					authors.length > 0 
					? (
						authors.map((x) => <Author key={x.id} author={x} />)
					) : 
						<p>No authors yet</p>
				}
			</section>
		</>
	);
};

export default HomePage;
