const db = require("../models");
const { QueryTypes } = require('sequelize');
const Game = db.games;
const Plays = db.plays;
const Player = db.player;
const Genre = db.genre;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {

  db.sequelize.query("SELECT title FROM Games", 
  { type: QueryTypes.SELECT})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};


exports.getRecommendation = (req, res) => {
  const accountID = req.params.accountID;
  db.sequelize.query(`
    SELECT distinct title
    FROM Games as g, Plays as ps, Player as p, Genre as ge
    WHERE (SELECT distinct genre FROM Genre WHERE Genre.gameID=g.gameID) IN
        (SELECT distinct genre FROM Plays, Genre
            WHERE Plays.accountID= :id
            AND Plays.gameID=Genre.gameID)
        And g.gameID NOT IN (
            SELECT distinct gameID
            FROM Plays
            WHERE Plays.accountID= :id
        );
  `, 
  { type: QueryTypes.SELECT, replacements: {id: accountID} })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving recommendations."
    });
  });
};