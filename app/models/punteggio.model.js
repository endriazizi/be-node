module.exports = (sequelize, Sequelize) => {
  const Punteggio = sequelize.define("punteggio", {

    punti: {
      type: Sequelize.STRING
    }
  });

  return Punteggio;
};
