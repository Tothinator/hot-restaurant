// Dependencies
var express = require('express');
var path = require('path');

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('assets'));

// Hot Restaurant Tables
var tables = [];

// Hot Restaurant Waiting List
var waitlist = [];

// Routes

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'assets', 'html',  'index.html'));
});

app.get('/reserve', function(req, res) {
    res.sendFile(path.join(__dirname, 'assets', 'html', 'reserve.html'));
}); 

app.get('/tables', function(req, res) {
    res.sendFile(path.join(__dirname, 'assets', 'html',  'tables.html'));
});

app.get('/api/tables', function(req, res) {
    return res.json(tables);
});

app.get('/api/waitlist', function(req, res) {
    return res.json(waitlist);
});

app.post('/api/reserve', function(req, res) {

    var newReservation = req.body;

    console.log(newReservation);

    if (tables.length <= 5) {
        tables.push(newReservation);
        console.log(tables);
    } else {
        waitlist.push(newReservation);
    }

    res.json(newReservation);
});

app.post('/api/clear', function(req, res) {

    tables = [];
    waitlist = [];

    res.json([]);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
}); 

