import './Login.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Login = () => {
	return(
		<>
		<Header />
		<section id="login-page" className="login">
            <form id="login-form" action="" method="">
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