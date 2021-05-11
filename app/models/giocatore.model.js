module.exports = (sequelize, Sequelize) => {
  const Giocatore = sequelize.define("giocatore", {
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
    cognome: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  return Giocatore;
};