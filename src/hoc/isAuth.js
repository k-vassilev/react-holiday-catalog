import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Redirect } from 'react-router-dom';

export const isAuth = (Component) => {
	const WrapperComponent = (props) => {
		const contextValue = useContext(AuthContext);
		let loggedUser = Object.values(contextValue.user);

		return loggedUser.length
		? <Component {...props}/>
		: <Redirect to="/login"/>
	}
	return WrapperComponent;
}