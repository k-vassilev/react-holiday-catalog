const baseUrl = "http://localhost:3030/data";

export function getAll() {
	return fetch(`${baseUrl}/destinations?sortBy=_createdOn%20desc`).then(res =>
		res.json()
	);
}

export const getOne = (id) =>
	fetch(`${baseUrl}/destinations/${id}`).then((res) => res.json());

export const getLatest = () => {
	return fetch(
		`${baseUrl}/destinations?sortBy=_createdOn%20desc&distinct=category`)
		.then(res => res.json());
};