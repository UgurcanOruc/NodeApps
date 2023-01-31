const http = require('http');

 const url =
    "http://api.weatherstack.com/current?access_key=437edb256d3e5f997dda65a7b6c4e8ba&query=40,-75";
   
const request = http.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
      data += chunk.toString();
  });

    response.on("end", () => {
        const body = JSON.parse(data);
        console.log(body);
    });
});

request.on('error', (error) => {
    console.log(error);
});

request.end();