module.exports = (sequelize, Sequelize) => {
  const Biglietto = sequelize.define("biglietto", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    descrizione: {
      type: Sequelize.STRING
    },
    prezzo: {
      type: Sequelize.FLOAT
    }
  });

  return Biglietto;
};
