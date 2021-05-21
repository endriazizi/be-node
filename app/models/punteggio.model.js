module.exports = (sequelize, Sequelize) => {
  const Punteggio = sequelize.define("punteggio", {

    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    difficolta: {
      type: Sequelize.STRING
    },
    penalita: {
      type: Sequelize.STRING
    },
    esecuzione: {
      type: Sequelize.STRING
    },
    totalePunti: {
      type: Sequelize.INTEGER
    }

  });

  return Punteggio;
};
