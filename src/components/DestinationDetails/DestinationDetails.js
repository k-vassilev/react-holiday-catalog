import './DestinationDetails.css';

import {useState, useEffect} from 'react';

import * as holidayService from "../../services/holidayService";

const DestinationDetails = ({
	match,
}) => {
	const [destination, setDestination] = useState({});

	useEffect(async () => {
		let result = await holidayService.getOne(match.params.destinationId);
		setDestination(result);
	}, []);

	return (
		<>
		<section id="game-details">
			<h1>Game Details</h1>
			<div className="info-section">
				<div className="game-header">
					<img className="game-img" src="/images/index-03.jpg" />
					<h1>Destination Title</h1>
					<span className="levels">5</span>
					<p className="type">Sofia</p>
				</div>

				<p className="text">
					Description
				</p>

				<div className="details-comments">
					<h2>Comments:</h2>
					<ul>
						<li className="comment">
							<p>Content: I rate this one quite highly.</p>
						</li>
						<li className="comment">
							<p>Content: The best game.</p>
						</li>
					</ul>
					<p className="no-comment">No comments.</p>
				</div>

				<div className="buttons">
					<a href="#" className="button">
						Edit
					</a>
					<a href="#" className="button">
						Delete
					</a>
				</div>
			</div>

		</section>
		</>
	)
}

export default DestinationDetails;