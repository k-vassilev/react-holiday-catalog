import { useEffect, useState, useContext } from 'react';
import { isAuth	} from "../../hoc/isAuth";
import * as holidayService from "../../services/holidayService";
import AuthContext from "../../contexts/AuthContext";

import './EditDestination.css';

const EditDestination = ({
	match,
	history,
}) => {
	const [destination, setDestination] = useState({});
	const userToken = useContext(AuthContext).user.token;

	useEffect(() => {
		const getOneHoliday = async() => {
			let result = await holidayService.getOne(match.params.destinationId);
			setDestination(result);
		}
		getOneHoliday();
	}, [match.params.destinationId]);

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

        holidayService.updateDestination(destinationId, updatedDestination, userToken)
            .then(() => {
                history.push(`/destinations/${destinationId}`);
                return;
            });
    }

	if(destination.acf){
		return (
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
		)
	} else {
		return (
			<h2>Loading...</h2>
		)
	}
}
export default isAuth(EditDestination);