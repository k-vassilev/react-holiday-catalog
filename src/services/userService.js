const baseUrl = "https://patrixbg.ephedratk.com/wp-json/wp/v2";

export async function getAllUsers() {
	const settings = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	};
	let response = await fetch(`${baseUrl}/users`, settings);
	return response.json();
}

export async function getOneUser(id) {
	const settings = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	};
	let response = await fetch(`${baseUrl}/users/${id}`, settings);
	return response.json();
}


