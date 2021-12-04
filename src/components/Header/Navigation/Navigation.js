import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({
	history,
}) => {
	let isLogged = localStorage.token;

	const logout = () => {
		localStorage.clear();
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
