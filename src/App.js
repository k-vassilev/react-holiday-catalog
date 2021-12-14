import { Route, Switch } from "react-router-dom";
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import AuthContext from "./contexts/AuthContext";
import HomePage from "./components/HomePage/HomePage";
import HolidayCatalog from "./components/HolidayCatalog/HolidaysCatalog";
import AddDestination from "./components/AddDestination/AddDestination";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import DestinationDetails from "./components/DestinationDetails/DestinationDetails";
import EditDestination from "./components/EditDestination/EditDestination";
import DestinationsByMe from "./components/DestinationsByMe/DestinationsByMe";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {

	const [user, setUser] = useState({});
	const authUser = (userData) => {
		setUser(userData);
	}

	return (
		<AuthContext.Provider value={{user, authUser}}>
			<Toaster position="bottom-right" reverseOrder={false}/>
			<Header/>
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/destinations" exact component={HolidayCatalog} />
					<Route path="/add-destination" component={AddDestination} />
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
					<Route path="/destinations/:destinationId/edit" component={EditDestination} />
					<Route path="/destinations/:destinationId" component={DestinationDetails} />
					<Route path="/destinations-by-me" component={DestinationsByMe} />
					<Route path="/profile" component={Profile} />
				</Switch>
			<Footer/>
		</AuthContext.Provider>
	);
}

export default App;
