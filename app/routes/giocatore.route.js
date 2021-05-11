const { authJwt } = require("../middleware");
const giocatoreController = require("../controllers/giocatore.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/admin/crea/giocatore",
    [authJwt.verifyToken, authJwt.isAdmin],
    giocatoreController.creaGiocatore
  );

  app.get(
    "/api/admin/lista/giocatori",
    [authJwt.verifyToken, authJwt.isAdmin],
    giocatoreController.getGiocatore
  );
};
