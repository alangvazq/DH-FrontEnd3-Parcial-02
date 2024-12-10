const API_URL = "https://www.amiiboapi.com/api/amiibo/";

export const getCharacters = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data.amiibo.slice(0, 20);
    } catch (error) {
        console.error("Error fetching amiibos:", error);
        return [];
    }
};