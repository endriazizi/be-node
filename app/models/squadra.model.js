module.exports = (sequelize, Sequelize) => {
  const Squadra = sequelize.define("squadra", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    },
    anno: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    allenatore: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  return Squadra;
};