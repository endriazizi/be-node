module.exports = (sequelize, Sequelize) => {
  const Atleta = sequelize.define("atleta", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    categoria: {
      type: Sequelize.STRING
    }

  });

  return Atleta;
};
