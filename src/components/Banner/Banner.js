import './Banner.css';
import { NavLink } from "react-router-dom";

const Banner = () => {
	return (
		<>
			<section className="tm-banner">
				<div className="tm-banner-inner">
					<h1 className="tm-banner-title">
						Welcome to <span className="tm-yellow-text">Holiday`s</span> catalog
					</h1>
					<p className="tm-banner-subtitle">Find Your Next Holiday Destination</p>
					<NavLink to="/holidays" className="tm-banner-link">
						Browse all destinations
					</NavLink>
				</div>
				<img src="/images/banner-2.jpg" alt="Image" height="641vh" />
			</section>
		</>
	);
};

export default Banner;
