const baseUrl = "https://patrixbg.ephedratk.com";

export async function createUser(userData) {
	const { token } = await getBearerToken({
		username: "PatrixBg",
		password: "18071702TKteam",
	});
		const settings = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token,
			},
			body: JSON.stringify(userData),
		};
		let response = await fetch(`${baseUrl}/wp-json/wp/v2/users`, settings);

		if (response.status == 201) {
			return response.json();
		} else {
			throw ({message:'The provided email is already registered!'})
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
		localStorage.setItem('token', result.token);
		return result;
	} catch (error) {
		console.error(error);
	}
}

export async function getUserByEmail(email){
	const settings = {
		method: 'GET',
	};
	try {
		let response = await fetch(`${baseUrl}/wp-json/wp/v2/users?search=${email}`, settings)
		let result = await response.json();
		return result;
	}catch(err) {
		console.error(err)
	}
}