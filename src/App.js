import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import HolidayCatalog from "./components/HolidayCatalog/HolidaysCatalog";
import AddDestination from "./components/AddDestination/AddDestination";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import DestinationDetails from "./components/DestinationDetails/DestinationDetails";

function App() {
	return (
		<Switch>
			<Route path="/" exact component={HomePage} />
			<Route path="/destinations" exact component={HolidayCatalog} />
			<Route path="/add-destination" component={AddDestination} />
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
			<Route path="/destinations/:destinationId" component={DestinationDetails} />
			<Route
				path="/logout"
				render={(prop) => {
					console.log("Succesfully logged Out!");
					return <Redirect to="/" />;
				}}
			/>
		</Switch>
	);
}

export default App;
