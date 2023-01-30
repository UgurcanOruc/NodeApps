const request = require("request");

const forecast = (latitude, longitude, callback) => {
    const url =
        "http://api.weatherstack.com/current?access_key=437edb256d3e5f997dda65a7b6c4e8ba&query=" + latitude + "," + longitude;
    
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined);
        } else if (response.body.error) {
            callback('Unable to find location', undefined);
        } else {
            // console.log(response);
          const data = response.body.current;
                  
          callback(
            undefined,
            data.weather_descriptions[0] +
              ". It is " +
              data.temperature +
              " degrees but it feels like " +
              data.feelslike +
              " degrees."
          );
        }
    });
};

module.exports = forecast;
