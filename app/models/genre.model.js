module.exports = (sequelize, Sequelize) => {
    const Genre = sequelize.define("genre", {
      genre: {
        type: Sequelize.STRING
      },
      gameID: {
        type: Sequelize.STRING
      }
    });
  
    return Genre;
  };