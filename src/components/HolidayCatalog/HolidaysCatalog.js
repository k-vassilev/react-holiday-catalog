import { useState, useEffect } from "react";
import * as holidayService from "../../services/holidayService";
import Map from "../Map/Map";

import "./HolidaysCatalog.css";
import HolidayCard from "./HolidayCard/HolidayCard";
let allDestinations = [];

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
	}

	function getTown(e) {
		e.preventDefault();

		const town = allDestinations.filter(
			(area) => area.acf.destination_area === `${e.target.id}`
		);
		setHolidays(town);

		let activeArea = document.getElementById(`${e.target.id}`);
		
		//clear all except current clicked area
		allAreas.map((x) => {
			x.classList.remove("active");
			return true;
		})
		activeArea.classList.add("active");
	}

	return (
		<>
			<Map getTown={getTown}/>
			<button onClick={clearFilter}>Reset Filter</button>
			<section className="container tm-home-section-1" id="more">
				<div className="section-margin-top">
					<div className="tm-section-header">
						<div className="col-lg-6 col-md-6 col-sm-6">
							<h2 className="tm-section-title">All destinations</h2>
						</div>
					</div>
					<div className="row">
						{holidays.length > 0 ? (
							holidays.map((x) => <HolidayCard key={x.id} destination={x} />)
						) : (
							<p>No destinations yet</p>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default HolidaysCatalog;
