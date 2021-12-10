const baseUrl = "https://patrixbg.ephedratk.com/wp-json/wp/v2";

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

export const getOwnDestinations = (authorId) => {
	return fetch(
		`${baseUrl}/destinations?author=${authorId}`)
		.then(res => res.json());
}

export const createDestination = (destination, userToken) => {
    return fetch(`${baseUrl}/destinations`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + userToken,
        },
        body: JSON.stringify(destination)
    });
};

export const updateDestination = (destinationId, updatedDestination, userToken) => {
	return fetch(`${baseUrl}/destinations/${destinationId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + userToken,
        },
        body: JSON.stringify(updatedDestination)
    });
};

export const deleteDestination = (destinationId, userToken) => {
	return fetch(`${baseUrl}/destinations/${destinationId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + userToken,
        },
    });
}

export const likeDestination = (destinationId, updatedDestination, userToken) => {
	return fetch(`${baseUrl}/destinations/${destinationId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + userToken,
        },
        body: JSON.stringify(updatedDestination)
    });
};

