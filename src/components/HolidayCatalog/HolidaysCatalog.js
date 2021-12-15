import { useState, useEffect } from "react";
import * as holidayService from "../../services/holidayService";
import Map from "../Map/Map";

import "./HolidaysCatalog.css";
import HolidayCard from "./HolidayCard/HolidayCard";
let allDestinations = [];
let targetedCity;

const HolidaysCatalog = () => {
	const [holidays, setHolidays] = useState([]);
	let allAreas = Array.from(document.querySelectorAll(".level1"));

	useEffect(() => {
		holidayService.getAllDestinations().then((result) => {
			allDestinations = [...result];
			setHolidays(result);
		});
	}, []);

	function clearFilter(e) {
		e.preventDefault();
		
		//clear all except current clicked area
		allAreas.map((x) => {
			x.classList.remove("active");
			return true;
		})
		setHolidays(allDestinations);
		targetedCity = null;
	}

	function getTown(e) {
		e.preventDefault();

		targetedCity = e.target.id;
		let activeArea = document.getElementById(targetedCity);
		const town = allDestinations.filter(
			(area) => area.acf.destination_area === targetedCity
		);
		
		//clear all except current clicked area
		allAreas.map((x) => {
			x.classList.remove("active");
			return true;
		})
		activeArea.classList.add("active");

		setHolidays(town);
	}

	return (
		<>
		<section className="catalog-wrapper">
			<div className="map-row-wrapper">
				<div className="map-text">
					<div className="text-border-wrapper">
						<h1 className="catalog-h1-title">Enjoy our community-driven catalog of destinations!</h1>
						<div className="map-text-inner-wrapper">
							<h3>You can use the interactive map to find your next travel destination by selecting the desired area.</h3>
							<div className="current-destination-wrapper">
								<h3>Currently browsing: <span className="current-destination">{ targetedCity ? targetedCity : 'All destinations'}</span></h3>
							</div>
							<div className="button-wrapper">
								<button className="filter-reset-btn" onClick={clearFilter}>Reset Filter</button>
							</div>
						</div>
					</div>
				</div>
				<Map getTown={getTown}/>
			</div>
			<section className="container tm-home-section-1" id="more">
				<div className="section-margin-top">
					<div className="row">
						{holidays.length > 0 ? (
							holidays.map((x) => <HolidayCard key={x.id} destination={x} />)
						) : (
							<p>No destinations yet</p>
						)}
					</div>
				</div>
			</section>
		</section>
		</>
	);
};

export default HolidaysCatalog;
