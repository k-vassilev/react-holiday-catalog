import './Login.css';

import * as authService from "../../services/authService";

import { useContext } from "react";
import AuthContext from '../../contexts/AuthContext';

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Login = ({
	history,
}) => {
	const { authUser } = useContext(AuthContext);

	const onLoginSubmitHandler = (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);
		const {email, password} = Object.fromEntries(formData)

		const userData = {
			username: email,
			password,
		}
		authService.getBearerToken(userData).then((response) => {
			authService.getUserByEmail(response.user_email).then((searchResult) => {
				authUser({...searchResult, token: response.token});
				history.push('/');
			})
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
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email"/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
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