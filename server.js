// Dependencies
// =============================================================
var express = require("express");
var PORT = process.env.PORT || 3000;
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Reservations (DATA)
// =============================================================

var reservations = [
  {
    routeName: "reservation1",
    name: "tony",
    phone: 562,
    email: "tonyfengli@gmail.com",
    uniqueID: 1
  }
];


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/api/reservations", function(req, res) {
  return res.json(reservations);
});

app.post("/api/reservations", function(req, res) {
  var newReservation = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);

  reservations.push(newReservation);

  res.json(newReservation);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
