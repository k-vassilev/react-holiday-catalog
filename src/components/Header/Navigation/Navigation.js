import "./Navigation.css";

const Navigation = () => {
	return (
		<>
			<nav className="tm-nav">
				<ul>
					<li>
						<a href="index.html" className="active">
							Home
						</a>
					</li>
					<li>
						<a href="about.html">All Holidays</a>
					</li>
					<li>
						<a href="tours.html">Login</a>
					</li>
					<li>
						<a href="contact.html">Register</a>
					</li>
				</ul>
			</nav>
			<nav className="tm-nav auth-nav">
				<ul>
					<li>
						<a href="index.html" className="active">
							Home
						</a>
					</li>
					<li>
						<a href="about.html">All Holidays</a>
					</li>
					<li>
						<a href="tours.html">Add New Destination</a>
					</li>
					<li>
						<a href="tours.html">Destinations added by me</a>
					</li>
					<li>
						<a href="contact.html">Logout</a>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navigation;
