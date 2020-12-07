module.exports = (sequelize, Sequelize) => {
    const Player = sequelize.define("player", {
      accountID: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      }
    });
  
    return Player;
  };