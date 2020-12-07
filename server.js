const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();   

var corsOptions = {
  origin: "http://localhost:8082"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

const db = require("./app/models");
db.sequelize.sync();

const recommendations = require("./app/controller/recommendation.controller.js");

app.get("api/recommendations", recommendations.findAll);
// Get recommendations for accountID
app.get("api/recommendations/:id", recommendations.getRecommendation);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});