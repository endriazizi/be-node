const { authJwt } = require("../middleware");
const punteggioController = require("../controllers/punteggio.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/crea/punteggio",
    // [authJwt.verifyToken, authJwt.isAdmin],
    punteggioController.creaPunteggio
  );

  app.get(
    "/api/lista/punteggi",
    // [authJwt.verifyToken, authJwt.isAdmin],
    punteggioController.getPunteggi
  );

  // app.get(
  //   "/api/lista/gare/eventi/filterbydisciplina",
  //   // [authJwt.verifyToken, authJwt.isAdmin],
  //   garaController.getFilterByDisciplina
  // );
};
