import { useContext, useState, useEffect } from "react";
import AuthContext from "../contexts/AuthContext";
import { Redirect } from 'react-router-dom';

export const isAuth = (Component) => {
	const WrapperComponent = (props) => {
		const [isLogged, setIsLogged] = useState('');
		const contextValue = useContext(AuthContext);
		useEffect(() => {
		
			if(contextValue.user){
				if(contextValue.user[0]){
					setIsLogged(contextValue.user[0]);
				}else{
					return;
				}
			}
			
		}, [contextValue.user]);

		return isLogged
			? <Component {...props}/>
			: <Redirect to="/login"/>
		
	}
	return WrapperComponent;
}