import './Login.css';

import * as authService from "../../services/authService";
import toast from 'react-hot-toast';
import { useContext } from "react";
import AuthContext from '../../contexts/AuthContext';

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
				if(searchResult.length > 0){
					toast.success('You have successfully logged in!');
						setTimeout(() => {
							history.push('/');
						}, 1000);
				}else {
					toast.error('Your username or password were incorrect, please try again');
				}
			})
		});
	}

	return(
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
	)
}

export default Login;