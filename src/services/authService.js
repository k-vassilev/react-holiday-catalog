const baseUrl = "https://patrixbg.ephedratk.com";
const wpAdminToken = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcGF0cml4YmcuZXBoZWRyYXRrLmNvbSIsImlhdCI6MTYzNzc2NTIxNSwibmJmIjoxNjM3NzY1MjE1LCJleHAiOjE2MzgzNzAwMTUsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.Wygr3oZgyRGim5qx75y5stF0mVn1WJqkiFC_x7vRERk';
const adminUser = {
	username: "PatrixBg",
	password: "18071702TKteam",
}

export const registerUser =  async ( userData ) => {
   
    let res = await fetch(`${baseUrl}/wp-json/jwt-auth/v1/token?username=${adminUser.username}&password=${adminUser.password}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
			'Authorization': wpAdminToken,
        },
        body: JSON.stringify(userData)
    });

	let result = res.json();
	console.log(result);
};

