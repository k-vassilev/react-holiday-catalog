import { useEffect, useState, useContext } from 'react';
import { isAuth	} from "../../hoc/isAuth";
import { Alert } from 'react-bootstrap';
import toast from 'react-hot-toast';
import * as holidayService from "../../services/holidayService";
import AuthContext from "../../contexts/AuthContext";

import './EditDestination.css';

const EditDestination = ({
	match,
	history,
}) => {
	const userToken = useContext(AuthContext).user.token;
	
	const [destination, setDestination] = useState({});
	const [destinationNameError, setDestinationNameError] = useState({name: false});
	const [imageUrlUserNameError, setImageUrlUserNameError] = useState({name: false});
	const [destinationDescriptionError, setDestinationDescriptionError] = useState({name: false});

	const destinationNameHandler = (e) => {
        let destinationName = e.target.value;
        if (destinationName.length < 4) {
            setDestinationNameError(state => ({...state, name: 'Destination`s name should be at least 4 characters!'}))
        } else {
            setDestinationNameError(state => ({...state, name: false}))
        }
    };

	const imageUrlChangeHandler = (e) => {
		let validImageUrl = String(e.target.value)
		.toLowerCase()
		.match(
		  /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/g
		)
		if (! validImageUrl) {
			setImageUrlUserNameError(state => ({...state, name: 'Please provide a valid image URL!'}))
		} else {
			setImageUrlUserNameError(state => ({...state, name: false}))
		}
    };

	const destinationDescriptionHandler = (e) => {
		let validDescription = String(e.target.value);
		if (validDescription.length > 1000) {
			setDestinationDescriptionError(state => ({...state, name: `You are ${validDescription.length - 1000} characters above the 1000 character limit.`}))
		} else {
			setDestinationDescriptionError(state => ({...state, name: false}))
		}
	}

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
		const {title, description, imgUrl, area} = Object.fromEntries(formData)

		const updatedDestination = {
			title: e.target.title.value,
		  	'status': 'publish',
		  	'acf': {
				'destination_title': title,
				'destination_description': description,
				'destination_image_url': imgUrl,
				'destination_area': area,
		  	},
		  };

		if (!destinationNameError.name && !imageUrlUserNameError.name){
			holidayService.updateDestination(destinationId, updatedDestination, userToken)
            .then(() => {
				toast.success('Destination successfully changed!');
				setTimeout(() => {
					history.push(`/destinations/${destinationId}`);
				}, 1500);
                return;
            });
		} else {
			toast.error('Fix the below errors and try to save the destination again!');
		}
    }

	if(destination.acf){
		return (
			<section id="edit-page" className="edit">
				<form id="edit-form" onSubmit={onSaveSubmit}>
					<fieldset>
						<legend>Edit my Destination</legend>
						<div className="field">
							<label htmlFor="title">Destination title</label>
							<span className="input" style={{borderColor: destinationNameError.name ? 'red' : 'inherit'}}>
								<input type="text" name="title" id="title" defaultValue={destination.acf.destination_title} onBlur={destinationNameHandler} required/>
							</span>
							<Alert variant="danger" show={destinationNameError.name}>{destinationNameError.name}</Alert>
						</div>
						<div className="field">
							<label htmlFor="description">Description</label>
							<span className="input" style={{borderColor: destinationDescriptionError.name ? 'red' : 'inherit'}}>
							<textarea type="text" name="description" rows="4" defaultValue={destination.acf.destination_description} onBlur={destinationDescriptionHandler}></textarea>
							</span>
							<Alert variant="danger" show={destinationDescriptionError.name}>{destinationDescriptionError.name}</Alert>
						</div>
						<div className="field">
							<label htmlFor="imgUrl">Image</label>
							<span className="input" style={{borderColor: imageUrlUserNameError.name ? 'red' : 'inherit'}}>
								<input type="text" name="imgUrl" id="imgUrl" defaultValue={destination.acf.destination_image_url} onBlur={imageUrlChangeHandler} required/>
							</span>
							<Alert variant="danger" show={imageUrlUserNameError.name}>{imageUrlUserNameError.name}</Alert>
						</div>
						<div className="field">
							<label htmlFor="area">Area</label>
							<span className="input" style={{borderColor: imageUrlUserNameError.name ? 'red' : 'inherit'}}>
							<select id="area" name="area" defaultValue={destination.acf.destination_area}>
								<option value="" disabled selected hidden>Select area</option>
                                <option value="Blagoevgrad">Blagoevgrad</option>
                                <option value="Burgas">Burgas</option>
                                <option value="Varna">Varna</option>
                                <option value="Veliko Tarnovo">Veliko Tarnovo</option>
                                <option value="Vidin">Vidin</option>
								<option value="Vratsa">Vratsa</option>
								<option value="Gabrovo">Gabrovo</option>
								<option value="Dobrich">Dobrich</option>
								<option value="Kardzhali">Kardzhali</option>
								<option value="Kystendil">Kystendil</option>
								<option value="Lovech">Lovech</option>
								<option value="Montana">Montana</option>
								<option value="Pazardzhik">Pazardzhik</option>
								<option value="Pernik">Pernik</option>
								<option value="Pleven">Pleven</option>
								<option value="Plovdiv">Plovdiv</option>
								<option value="Razgrad">Razgrad</option>
								<option value="Ruse">Ruse</option>
								<option value="Silistra">Silistra</option>
								<option value="Sliven">Sliven</option>
								<option value="Smolyan">Smolyan</option>
								<option value="Sofia City">Sofia City</option>
								<option value="Sofia Province">Sofia Province</option>
								<option value="Stara Zagora">Stara Zagora</option>
								<option value="Targovishte">Targovishte</option>
								<option value="Haskovo">Haskovo</option>
								<option value="Shumen">Shumen</option>
								<option value="Yambol">Yambol</option>
                            </select>
							</span>
						</div>
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