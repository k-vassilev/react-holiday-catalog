const baseUrl = "https://patrixbg.ephedratk.com/wp-json/wp/v2";

export const getOne = (id) =>
	fetch(`${baseUrl}/destinations/${id}`).then((res) => res.json());

export const getAllDestinations = () => {
	return fetch(
		`${baseUrl}/destinations`)
		.then(res => res.json());
}

