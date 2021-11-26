import { useEffect, useState } from 'react';
import * as holidayService from "../../services/holidayService";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import './EditDestination.css';

const EditDestination = ({
	match,
	history,
}) => {
	const [destination, setDestination] = useState({});

	useEffect(async () => {
		let result = await holidayService.getOne(match.params.destinationId);
		setDestination(result);
	}, []);

	const onSaveSubmit = (e) => {
        e.preventDefault();

        const destinationId = match.params.destinationId;

		const formData = new FormData(e.target);
		const {title, description, imgUrl} = Object.fromEntries(formData)

		const updatedDestination = {
			title: e.target.title.value,
		  	'status': 'publish',
		  	'acf': {
				'destination_title': title,
				'destination_description': description,
				'destination_image_url': imgUrl,
		  	},
		  };

        holidayService.updateDestination(destinationId, updatedDestination)
            .then(() => {
                history.push(`/destinations/${destinationId}`);
                return;
            });
    }

	if(destination.acf){
		return (
			<>
			<Header />
			<section id="edit-page" className="edit">
				<form id="edit-form" onSubmit={onSaveSubmit}>
					<fieldset>
						<legend>Edit my Destination</legend>
						<p className="field">
							<label htmlFor="title">Destination title</label>
							<span className="input">
								<input type="text" name="title" id="title" defaultValue={destination.acf.destination_title}/>
							</span>
						</p>
						<p className="field">
							<label htmlFor="description">Description</label>
							<span className="input">
							<textarea type="text" name="description" defaultValue={destination.acf.destination_description}></textarea>
							</span>
						</p>
						<p className="field">
							<label htmlFor="imgUrl">Image</label>
							<span className="input">
								<input type="text" name="imgUrl" id="imgUrl" defaultValue={destination.acf.destination_image_url}/>
							</span>
						</p>
						<input className="button submit" type="submit" value="Save"/>
					</fieldset>
				</form>
			</section>
			<Footer />
			</>
		)
	} else {
		return (
			<>
				<Header />
				<h2>Loading...</h2>
				<Footer />
			</>
		)
	}
}
export default EditDestination;