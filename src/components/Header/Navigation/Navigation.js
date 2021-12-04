import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";
import "./Navigation.css";

const Navigation = () => {
	const [isLogged, setIsLogged] = useState('');
	const contextValue = useContext(AuthContext);

	useEffect(() => {
		
		if(contextValue.user){
			if(contextValue.user[0]){
				setIsLogged(contextValue.user[0]);
			}else{
				return;
			}
		}
		
	}, [contextValue.user]);

	const logout = () => {
		localStorage.clear();
		contextValue.authUser({});
		setIsLogged(false);
	};

	if (isLogged) {
		return (
			<nav className="tm-nav auth-nav">
				<ul>
					<li>
						<NavLink to="/destinations">All Holidays</NavLink>
					</li>
					<li>
						<NavLink to="/add-destination">Add New Destination</NavLink>
					</li>
					<li>
						<NavLink to="/holidays">Added by me</NavLink>
					</li>
					<li>
						<NavLink to="/" onClick={logout}>Logout</NavLink>
					</li>
				</ul>
			</nav>
		);
	} else {
		return (
			<nav className="tm-nav">
				<ul>
					<li>
						<NavLink to="/destinations">All Destinations</NavLink>
					</li>
					<li>
						<NavLink to="/login">Login</NavLink>
					</li>
					<li>
						<NavLink to="/register">Register</NavLink>
					</li>
				</ul>
			</nav>
		);
	}
};

export default Navigation;
