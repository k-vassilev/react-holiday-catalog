const Header = () => {
	return (
		<>
			<div className="tm-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-4 col-sm-3 tm-site-name-container">
							<a href="#" className="tm-site-name">
								Holiday
							</a>
						</div>
						<div className="col-lg-6 col-md-8 col-sm-9">
							<div className="mobile-menu-icon">
								<i className="fa fa-bars"></i>
							</div>
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
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
