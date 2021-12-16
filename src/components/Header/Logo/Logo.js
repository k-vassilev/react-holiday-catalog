import { NavLink } from "react-router-dom";

const Logo = () => {
	return (
		<>
			<div className="col-lg-6 col-md-4 col-sm-3 tm-site-name-container logo-container">
				<NavLink to="/" className="tm-site-name">
					Home
				</NavLink>
			</div>
		</>
	);
};

export default Logo;
