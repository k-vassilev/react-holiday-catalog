const baseUrl = "https://patrixbg.ephedratk.com";

export async function createUser(userData) {
	const token = await getBearerToken({
		username: "PatrixBg",
		password: "18071702TKteam",
	});
	try {
		const settings = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token,
			},
			body: JSON.stringify(userData),
		};
		let response = await fetch(`${baseUrl}/wp-json/wp/v2/users`, settings);
		return response.json();
	} catch (error) {
		console.error(error);
	}
}

export async function getBearerToken(currentUser) {
	let result;
	try {
		const settings = {
			method: "POST",
		};
		let response = await fetch(
			`${baseUrl}/wp-json/jwt-auth/v1/token?username=${currentUser.username}&password=${currentUser.password}`,
			settings
		);
		result = await response.json();
		return result.token;
	} catch (error) {
		console.error(error);
	}
}
