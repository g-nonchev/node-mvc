const axios = require('axios');
const API_KEY = '81b3fe859349c210bad13931c4fb84f4'; // temporary API key

exports.getWeatherByCoordinates = async (lat, lon) => {
    try {
        const response = await axios.get(
            `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};
