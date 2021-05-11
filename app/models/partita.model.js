module.exports = (sequelize, Sequelize) => {
  const Partita = sequelize.define("partita", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    data: {
      type: Sequelize.DATEONLY,
      allowNull: false
    }
  });

  return Partita;
};