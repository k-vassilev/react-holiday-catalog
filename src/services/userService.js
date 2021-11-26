const baseUrl = "https://patrixbg.ephedratk.com/wp-json/wp/v2";
const wpAdminToken = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcGF0cml4YmcuZXBoZWRyYXRrLmNvbSIsImlhdCI6MTYzNzc2NTIxNSwibmJmIjoxNjM3NzY1MjE1LCJleHAiOjE2MzgzNzAwMTUsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.Wygr3oZgyRGim5qx75y5stF0mVn1WJqkiFC_x7vRERk';

export async function getAllUsers() {
	const settings = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: wpAdminToken,
		},
	};
	let response = await fetch(`${baseUrl}/users`, settings);
	return response.json();
}


