module.exports = (sequelize, Sequelize) => {
  const Gara = sequelize.define("gara", {
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

  return Gara;
};
