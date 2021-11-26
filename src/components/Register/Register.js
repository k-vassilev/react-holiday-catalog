import './Register.css';

import * as authService from "../../services/authService";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Register = ({
	history,
}) => {

	const onRegisterSubmitHandler = (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);
		const {email, username, password} = Object.fromEntries(formData)

		const userData = {
			email,
			username,
			password,
		}
		authService.createUser(userData).then(() => {
			history.push('/');
		});
	}

	return(
		<>
		<Header />
		<section id="register-page" className="register">
            <form id="register-form" onSubmit={onRegisterSubmitHandler}>
                <fieldset>
                    <legend>Register Form</legend>
                    <p className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email"/>
                        </span>
                    </p>
					<p className="field">
                        <label htmlFor="username">User Name</label>
                        <span className="input">
                            <input type="text" name="username" id="username" placeholder="User Name"/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password"/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="repass">Repeat Password</label>
                        <span className="input">
                            <input type="password" name="repass" id="repass" placeholder="Repeat Password"/>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Register"/>
                </fieldset>
            </form>
        </section>
		<Footer />
		</>
	)
}

export default Register;