import * as holidayService from "../../services/holidayService";

import "./AddDestination.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const AddDestination = ({
	history,
}) => {

	const onAddDestinationSubmitHandler = (e) => {
        e.preventDefault();

        const { title, description, imgUrl, area } = e.target;

		holidayService.createDestination(title.value, description.value, imgUrl.value, area.value)
            .then(() => {
                history.push('/');
            })
    };

	return(
		<>
		<Header />
		<section id="create-page" className="create">
            <form id="create-form" onSubmit={onAddDestinationSubmitHandler}>
                <fieldset>
                    <legend>Add New Destination</legend>
                    <p className="field">
                        <label htmlFor="name">Destination Name</label>
                        <span className="input">
                            <input type="text" name="title" id="title" placeholder="Name"/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Destination Description</label>
                        <span className="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="imgUrl">Destination Image URL</label>
                        <span className="input">
                            <input type="text" name="imgUrl" id="imgUrl" placeholder="Image"/>
                        </span>
                    </p>
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
		<Footer />
		</>
	)
}

export default AddDestination;