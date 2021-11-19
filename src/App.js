import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import MostPopularHolidays from './components/MostPopularHolidays';
import Authors from './components/Authors';

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