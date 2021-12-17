import { NavLink } from "react-router-dom";
import './Footer.css';

const Footer = () => {
	return (
		<>
			<footer className="tm-black-bg footer-own-destinations">
				<div className="container">
					<div className="row">
						<p className="tm-copyright-text">
							Copyright &copy; 2021 Kristian Vassilev | 
							<NavLink to={{pathname: "https://github.com/k-vassilev/react-holiday-catalog"}} target="_blank">
								React Holiday Catalog Project
							</NavLink>
						</p>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
