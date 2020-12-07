module.exports = app => {
    const recommendations = require("../controller/recommendation.controller.js");
  
    var router = require("express").Router();

    router.get("/", recommendations.findAll);
    // Get recommendations for accountID
    router.get("/:id", recommendations.getRecommendation);
  
    app.use('/api/recommendations', router);
  };