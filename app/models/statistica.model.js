module.exports = (sequelize, Sequelize) => {
  const Statistica = sequelize.define("statistica", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    puntitotali: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    partiteGiocate: {
      type: Sequelize.FLOAT,
      allowNull: false
    }
  });

  return Statistica;
};