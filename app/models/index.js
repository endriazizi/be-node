const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    define: {
      //https://sequelize.org/master/manual/model-basics.html
      freezeTableName: true //Enforcing the table name to be equal to the model name
    },
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


//Carico i modelli relativi alla base dati
db.users = require("./user.model.js")(sequelize, Sequelize);
db.roles = require("../models/role.model.js")(sequelize, Sequelize);
db.biglietto = require("./biglietto.model.js")(sequelize, Sequelize);
db.ordine= require("./ordine.model.js")(sequelize, Sequelize);
db.partita= require("./partita.model.js")(sequelize, Sequelize);
db.giocatore = require("./giocatore.model.js")(sequelize, Sequelize);
db.punteggio = require("./punteggio.model.js")(sequelize, Sequelize);
db.squadra = require("./squadra.model.js")(sequelize, Sequelize);
db.statistica = require("./statistica.model.js")(sequelize, Sequelize);
db.evento = require("./evento.model.js")(sequelize, Sequelize);
db.gara = require("./gara.model.js")(sequelize, Sequelize);


// Address.belongsTo(Customer); 
// Will add a customerId attribute to Address to hold the primary key value for Customer.
db.statistica.belongsTo(db.squadra); 

// db.users.belongsToMany(db.giocatore, { through: db.punteggi });
// db.giocatore.belongsToMany(db.users, { through: db.punteggi });

// -----------------------------------------------------------

db.roles.belongsToMany(db.users, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.users.belongsToMany(db.roles, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

// -----------------------------------------------------------

// N:N un biglietto ha molti user tramite ordine
db.biglietto.belongsToMany(db.users, {
  through: db.ordine,
  foreignKey: "bigliettoId",
  otherKey: "userId"
});
// N:N un user ha molti biglietti tramite ordine
db.users.belongsToMany(db.biglietto, {
  through: db.ordine,
  foreignKey: "userId",
  otherKey: "bigliettoId"
});

// -----------------------------------------------------------

// -----------------------------------------------------------

// N:N una partita ha molte squadre tramite punteggio
db.partita.belongsToMany(db.squadra, {
  through: db.punteggio,
  foreignKey: "partitaId",
  otherKey: "squadraId"
});
// N:N una squadre ha molte partite tramite punteggio
db.squadra.belongsToMany(db.partita, {
  through: db.ordine,
  foreignKey: "squadraId",
  otherKey: "partitaId"
});

// -----------------------------------------------------------

// -----------------------------------------------------------

// // 1:N un partita ha molti biglietti
// db.partita.hasMany(db.biglietto);
//   // , { as: "biglietti" });

// // // N:1 un biglietto ha molte partite
// db.biglietto.belongsTo(db.partita, {as: 'role'})


1

db.biglietto.belongsTo(db.partita, {as: 'partita',foreignKey: 'partitaId'});   
db.partita.hasMany(db.biglietto, {as: 'partita',foreignKey: 'partitaId'});

// -----------------------------------------------------------


//1:N
db.evento.hasMany(db.gara);
db.gara.belongsTo(db.evento);


//1:N
db.squadra.hasMany(db.giocatore);
db.giocatore.belongsTo(db.squadra);



db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
