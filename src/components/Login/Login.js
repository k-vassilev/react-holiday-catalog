import './Login.css';

import * as authService from "../../services/authService";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Login = ({
	history,
}) => {

	const onLoginSubmitHandler = (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);
		const {email, password} = Object.fromEntries(formData)

		const userData = {
			username: email,
			password,
		}
		authService.getBearerToken(userData).then(() => {
			history.push('/');
		});
	}


	return(
		<>
		<Header />
		<section id="login-page" className="login">
            <form id="login-form" onSubmit={onLoginSubmitHandler}>
                <fieldset>
                    <legend>Login Form</legend>
                    <p className="field">
                        <label for="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email"/>
                        </span>
                    </p>
                    <p className="field">
                        <label for="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password"/>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Login"/>
                </fieldset>
            </form>
        </section>
		<Footer />
		</>
	)
}

export default Login;