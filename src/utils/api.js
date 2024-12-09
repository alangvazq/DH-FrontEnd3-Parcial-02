export const getCharacters = async () => {
	const URL = "https://www.amiiboapi.com/api/amiibo/";

	try {
		const data = await fetch(URL);
		const response = await data.json();
		
		if(!response.error){
			return response;
		}

		return response.results;
	} catch (error) {
		console.log(error);
	}
};
