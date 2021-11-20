import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import MostPopularHolidays from "../MostPopularHolidays/MostPopularHolidays";
import Authors from "../Authors/Authors";
import Footer from "../Footer/Footer";

const HomePage = () => {
	return (
		<>
			<Header />
			<Banner />
			<MostPopularHolidays />
			<Authors />
			<Footer />
		</>
	);
};

export default HomePage;
