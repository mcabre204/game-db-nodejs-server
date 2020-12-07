module.exports = (sequelize, Sequelize) => {
    const Plays = sequelize.define("plays", {
      accountID: {
        type: Sequelize.STRING
      },
      gameID: {
        type: Sequelize.STRING
      },
      hoursPlayed: {
          type: Sequelize.DECIMAL
      }
    });
  
    return Plays;
  };