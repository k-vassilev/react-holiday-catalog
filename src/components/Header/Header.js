import "./Header.css";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";

const Header = () => {
	return (
		<>
			<div className="tm-header">
				<Logo />
				<Navigation />
			</div>
		</>
	);
};

export default Header;
