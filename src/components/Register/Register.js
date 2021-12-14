import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import './Register.css';
import * as authService from "../../services/authService";

const Register = ({
	history,
}) => {
	const [emailError, setEmailErrors] = useState({name: false});
	const [userNameError, setUserNameError] = useState({name: false});
	const [passwordError, setPasswordError] = useState({name: false});
	const [rePassError, setRePassError] = useState({name: false});

	const onRegisterSubmitHandler = (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);
		const {email, username, userImg, userDescription, password} = Object.fromEntries(formData)

		const userData = {
			email,
			username,
			password,
			acf: {
				username,
				image_url: userImg,
				user_description: userDescription,
			}
		}

		if (!emailError.name && !userNameError.name && !passwordError.name && !rePassError.name){
			authService.createUser(userData).then(() => {
				toast.success('Successfully registered!');
				setTimeout(() => {
					history.push('/')
				}, 1500);
			});
		} else {
			toast.error('Please fix the bellow errors and try again.');
		}
	}

	const emailChangeHandler = (e) => {
		let validEmail = String(e.target.value)
		.toLowerCase()
		.match(
		  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		)
		if (! validEmail) {
			setEmailErrors(state => ({...state, name: 'Please provide a valid email!'}))
		} else {
			setEmailErrors(state => ({...state, name: false}))
		}
    };

	const nameChangeHandler = (e) => {
        let currentName = e.target.value;
        if (currentName.length < 5) {
            setUserNameError(state => ({...state, name: 'Your name should be at least 5 characters!'}))
        } else if (currentName.length > 10) {
            setUserNameError(state => ({...state, name: 'Your name should be max 10 characters!'}))
        } else {
            setUserNameError(state => ({...state, name: false}))
        }
    };

	const passwordChangeHandler = (e) => {
        let password = e.target.value;
        if (password.length < 6) {
            setPasswordError(state => ({...state, name: 'Your password should be at least 6 characters!'}))
        } else {
            setPasswordError(state => ({...state, name: false}))
        }
    };

	const rePassChangeHandler = (e) => {
        let rePass = e.target.value;
		let password = document.querySelector('#password');
        if (rePass !== password.value) {
            setRePassError(state => ({...state, name: 'Your passwords do not match!'}))
        } else {
            setRePassError(state => ({...state, name: false}))
        }
    };
	
	return(
		<section id="register-page" className="register">
            <form id="register-form" method="POST" onSubmit={onRegisterSubmitHandler}>
                <fieldset>
                    <legend>Register Form</legend>
                    <span className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input" style={{borderColor: emailError.name ? 'red' : 'inherit'}}>
                            <input type="text" name="email" id="email" placeholder="Email" onBlur={emailChangeHandler} required/>
                        </span>
						<Alert variant="danger" show={emailError.name}>{emailError.name}</Alert>
                    </span>
					<span className="field">
                        <label htmlFor="username">User Name</label>
                        <span className="input" style={{borderColor: userNameError.name ? 'red' : 'inherit'}}>
                            <input type="text" name="username" id="username" placeholder="User Name" onBlur={nameChangeHandler} required/>
                        </span>
						<Alert variant="danger" show={userNameError.name}>{userNameError.name}</Alert>
                    </span>
					<span className="field">
                        <label htmlFor="userImg">Image Url</label>
                        <span className="input">
                            <input type="text" name="userImg" id="userImg" placeholder="Image Url"/>
                        </span>
                    </span>
					<p className="field">
                        <label htmlFor="userDescription">Introuduce yourself</label>
                        <span className="input">
                            <textarea rows="5" name="userDescription" id="userDescription" placeholder="About yourself"/>
                        </span>
                    </p>
                    <span className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input" style={{borderColor: passwordError.name ? 'red' : 'inherit'}}>
                            <input type="password" name="password" id="password" placeholder="Password" autoComplete="on" onBlur={passwordChangeHandler} required/>
                        </span>
						<Alert variant="danger" show={passwordError.name}>{passwordError.name}</Alert>
                    </span>
                    <span className="field">
                        <label htmlFor="repass">Repeat Password</label>
                        <span className="input" style={{borderColor: rePassError.name ? 'red' : 'inherit'}}>
                            <input type="password" name="repass" id="repass" placeholder="Repeat Password" autoComplete="on" onBlur={rePassChangeHandler} required/>
                        </span>
						<Alert variant="danger" show={rePassError.name}>{rePassError.name}</Alert>
                    </span>
                    <input className="button submit" type="submit" value="Register"/>
                </fieldset>
            </form>
        </section>
	)
}

export default Register;