const request = require('request');

const url =
    "http://api.weatherstack.com/current?access_key=437edb256d3e5f997dda65a7b6c4e8ba&query=37.8267,-122.4233";
  
request({ url, json: true }, (error, response) => {
    const data = response.body.current;
    console.log(
        data.weather_descriptions[0] + 
      ". It is " +
        data.temperature +
        " degrees but it feels like " +
        data.feelslike +
        " degrees."
    );
});

const geoUrl =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidWd1cnZheWd1bCIsImEiOiJjbGRkZGg4bXEwMm1jM3hxb3R0YjA1N3lnIn0.OTeu70d7NXibkzgRywukMA";
  
request({ url: geoUrl, json: true }, (error, response) => {
    const latitude = response.body.features[0].center[1];     
    const longitude = response.body.features[0].center[0];
    console.log(latitude, longitude);
});