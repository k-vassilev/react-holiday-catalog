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
        const updatedDestination = {
			...destination.acf, 
			destination_title: e.target.title.value,
			destination_description: e.target.description.value,
			destination_image_url: e.target.image.value,
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
							<label htmlFor="image">Image</label>
							<span className="input">
								<input type="text" name="image" id="image" defaultValue={destination.acf.destination_image_url}/>
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