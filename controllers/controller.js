const express = require('express');
const router = express.Router();
const model = require('../models/model');

router.get('/', (req, res) => {
    res.render('view', { weather: null });
});

router.get('/plovdiv', async (req, res) => {
    try {
        const weatherData = await model.getWeatherByCoordinates(42.1354, 24.7453);
        res.render('view', { weather: weatherData, city: 'Plovdiv', error: null });
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.render('view', { weather: null, city: 'Plovdiv', error: 'Error... get the weather' });
    }
});

router.get('/sofia', async (req, res) => {
    try {
        const weatherData = await model.getWeatherByCoordinates(42.6977, 23.3219);
        res.render('view', { weather: weatherData, city: 'Sofia', error: null });
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.render('view', { weather: null, city: 'Sofia', error: 'Error... get the weather' });
    }
});

module.exports = router;
