const baseUrl = "https://patrixbg.ephedratk.com/wp-json/wp/v2";
const wpAdminToken = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcGF0cml4YmcuZXBoZWRyYXRrLmNvbSIsImlhdCI6MTYzNzc2NTIxNSwibmJmIjoxNjM3NzY1MjE1LCJleHAiOjE2MzgzNzAwMTUsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.Wygr3oZgyRGim5qx75y5stF0mVn1WJqkiFC_x7vRERk';

export const getOne = (id) =>
	fetch(`${baseUrl}/destinations/${id}`).then((res) => res.json());

export const getAllDestinations = () => {
	return fetch(
		`${baseUrl}/destinations`)
		.then(res => res.json());
}

export const getTopFourDestinations = () => {
	return fetch(
		`${baseUrl}/destinations?per_page=4`)
		.then(res => res.json());
}

export const createDestination = (destination) => {
    return fetch(`${baseUrl}/destinations`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
			'Authorization': wpAdminToken,
        },
        body: JSON.stringify(destination)
    });
};

export const updateDestination = (destinationId, updatedDestination) => {
	return fetch(`${baseUrl}/destinations/${destinationId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
			'Authorization': wpAdminToken,
        },
        body: JSON.stringify(updatedDestination)
    });
};

export const deleteDestination = (destinationId) => {
	return fetch(`${baseUrl}/destinations/${destinationId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
			'Authorization': wpAdminToken,
        },
    });
}
