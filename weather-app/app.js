const request = require('request');
const geocode = require('./utils.js/geocode');
const forecast = require("./utils.js/forecast");

geocode('Ankara', (error, data) => {
    forecast(data.latitude, data.longitude, (error, data) => {
      console.log("Error", error);
      console.log("Data", data);
    });
});