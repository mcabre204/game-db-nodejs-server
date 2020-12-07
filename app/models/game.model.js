module.exports = (sequelize, Sequelize) => {
    const Game = sequelize.define("games", {
      gameID:{
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      version: {
        type: Sequelize.DECIMAL
      },
      price: {
        type: Sequelize.DECIMAL
      },
      contentWarning: {
        type: Sequelize.STRING
      }
    });
  
    return Game;
  };