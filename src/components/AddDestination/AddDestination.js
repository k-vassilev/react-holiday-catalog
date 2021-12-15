import { useContext, useState } from "react";
import { isAuth	} from "../../hoc/isAuth";
import { Alert } from 'react-bootstrap';
import toast from 'react-hot-toast';
import * as holidayService from "../../services/holidayService";
import AuthContext from "../../contexts/AuthContext";
import "./AddDestination.css";

const AddDestination = ({
	history,
}) => {
	const userToken = useContext(AuthContext).user.token;
	const [destinationNameError, setDestinationNameError] = useState({name: false});
	const [imageUrlUserNameError, setImageUrlUserNameError] = useState({name: false});

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

	const onAddDestinationSubmitHandler = (e) => {
        e.preventDefault();

		const formData = new FormData(e.target);
		const {title, description, imgUrl, area} = Object.fromEntries(formData)

		const destination = {
			title: title,
		  	'status': 'publish',
		  	'acf': {
			  	"destination_title" : title,
			  	"destination_description": description,
			  	"destination_image_url": imgUrl,
			  	"destination_area": area,
		  	}
		};

		if (!destinationNameError.name && !imageUrlUserNameError.name){
			holidayService.createDestination(destination, userToken)
			.then(() => {
				toast.success('Destination successfully added!');
				setTimeout(() => {
					history.push('/')
				}, 1500);
			});
		} else {
			toast.error('Fix the below errors and try to add the destination again!');
		}
    };

	return(
		<section id="create-page" className="create">
            <form id="create-form" onSubmit={onAddDestinationSubmitHandler}>
                <fieldset>
                    <legend>Add New Destination</legend>
                    <div className="field">
                        <label htmlFor="name">Destination Name</label>
                        <span className="input" style={{borderColor: destinationNameError.name ? 'red' : 'inherit'}}>
                            <input type="text" name="title" id="title" placeholder="Name" onBlur={destinationNameHandler} required/>
                        </span>
						<Alert variant="danger" show={destinationNameError.name}>{destinationNameError.name}</Alert>
                    </div>
                    <p className="field">
                        <label htmlFor="description">Destination Description</label>
                        <span className="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <div className="field">
                        <label htmlFor="imgUrl">Destination Image URL</label>
                        <span className="input" style={{borderColor: imageUrlUserNameError.name ? 'red' : 'inherit'}}>
                            <input type="text" name="imgUrl" id="imgUrl" placeholder="Image" onBlur={imageUrlChangeHandler} required/>
                        </span>
						<Alert variant="danger" show={imageUrlUserNameError.name}>{imageUrlUserNameError.name}</Alert>
                    </div>
                    <p className="field">
                        <label htmlFor="area">Area</label>
                        <span className="input">
                            <select id="area" name="area">
								<option value="" disabled defaultValue>Choose Area</option>
                                <option value="Blagoevgrad">Blagoevgrad</option>
                                <option value="Burgas">Burgas</option>
                                <option value="Varna">Varna</option>
                                <option value="Veliko-tarnovo">Veliko Tarnovo</option>
                                <option value="Vidin">Vidin</option>
								<option value="Vratza">Vratza</option>
								<option value="Gabrovo">Gabrovo</option>
								<option value="Dobrich">Dobrich</option>
								<option value="Kardjali">Kardjali</option>
								<option value="Kustendil">Kustendil</option>
								<option value="Lovech">Lovech</option>
								<option value="Montana">Montana</option>
								<option value="Pazardjik">Pazardjik</option>
								<option value="Pernik">Pernik</option>
								<option value="Pleven">Pleven</option>
								<option value="Plovdiv">Plovdiv</option>
								<option value="Razgrad">Razgrad</option>
								<option value="Ruse">Ruse</option>
								<option value="Silistra">Silistra</option>
								<option value="Sliven">Sliven</option>
								<option value="Smolyan">Smolyan</option>
								<option value="Sofia">Sofia</option>
								<option value="Stara-zagora">Stara Zagora</option>
								<option value="Targovishte">Targovishte</option>
								<option value="Haskovo">Haskovo</option>
								<option value="Shumen">Shumen</option>
								<option value="Yambol">Yambol</option>
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Add Destination"/>
                </fieldset>
            </form>
        </section>
	)
}

export default isAuth(AddDestination);