// core modules import
const path = require('path');

// third party packages
const express = require('express');
const bodyParser = require('body-parser');

// import routes

// import controllers

// port
const PORT = process.env.PORT || 3000;

// create an application object
const app = express();

// import ejs
app.set('view engine', 'ejs');
// tell express where the views directory is || default is 'views'
app.set('views', 'views');

// parsing body | dont before action middlewares
app.use(bodyParser.urlencoded({
    extended: true
}));

// static files | path is automatically put into public folder
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.write('<h1>This is Matthews Portfolio</h1>');
    res.end();
})

// application, listen to server
app.listen(PORT);