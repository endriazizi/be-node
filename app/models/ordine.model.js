module.exports = (sequelize, Sequelize) => {
  const Ordine = sequelize.define("ordini", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    qta: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  return Ordine;
};