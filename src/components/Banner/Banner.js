import './Banner.css';
import { NavLink } from "react-router-dom";

const Banner = () => {
	return (
		<>
			<section className="tm-banner">
				<div className="tm-banner-inner">
					<div className="banner-title-wrapper">
						<h1 className="tm-banner-title">
							Welcome to Bulgaria top destinations
						</h1>
					</div>
					<div className="banner-btn-wrapper">
						<NavLink to="/destinations">
							<button className="banner-btn">Start browsing</button>
						</NavLink>
					</div>
				</div>
				<img src="/images/bulgaria-header.jpg" alt="banner" width="100%" />
			</section>
		</>
	);
};

export default Banner;
