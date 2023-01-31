const geocode = require("./utils.js/geocode");
const forecast = require("./utils.js/forecast");

const address = process.argv[2];

if (!address) {
  console.log('Please provide an Address.');
} else {
  geocode(address, (geoError, {latitude, longitude, location} = {}) => {
    if (geoError) {
      return console.log(geoError);
    }

    console.log(location);
    forecast(
      latitude,
      longitude,
      (forcastError, forcastData) => {
        if (forcastError) {
          return console.log(forcastError);
        }
        console.log(forcastData);
      }
    );
  });
}
