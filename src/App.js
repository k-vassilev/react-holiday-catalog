import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import MostPopularHolidays from './components/MostPopularHolidays/MostPopularHolidays';
import Authors from './components/Authors/Authors';

function App() {
	return (
		<div>
			<Header />
			<Banner />
			<MostPopularHolidays />
			<Authors />
			<Footer />
		</div>
	);
}

export default App;