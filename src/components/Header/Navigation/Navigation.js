import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
	return (
		<>
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
					<li>
						<NavLink to="/add-destination">Add New Destination</NavLink>
					</li>
				</ul>
			</nav>
			<nav className="tm-nav auth-nav">
				<ul>
					<li>
						<NavLink to="/destinations">All Holidays</NavLink>
					</li>
					<li>
						<NavLink to="/add-destination">Add New Destination</NavLink>
					</li>
					<li>
						<NavLink to="/holidays">Destinations added by me</NavLink>
					</li>
					<li>
						<NavLink to="/logout">Logout</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navigation;
