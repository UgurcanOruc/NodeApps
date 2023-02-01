const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for Express config
const publicDirectory = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');


// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);


// Setup static directory to serve
app.use(express.static(publicDirectory));


app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Ugurcan'
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Ugurcan",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    message: "This is a message",
    title: 'Help',
    name: 'Ugurcan'
  });
});

app.get('/help/*', (req, res) => {
 res.render("404", {
   message: "Help article not found!",
   title: "404",
   name: "Ugurcan",
 });
});

app.get('*', (req, res) => {
  res.render("404", {
    message: "My 404 page.",
    title: "404",
    name: "Ugurcan",
  });
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});