const { authJwt } = require("../middleware");
const squadraController = require("../controllers/squadra.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/admin/crea/squadra",
    [authJwt.verifyToken],
    squadraController.creaSquadra
  );

  app.get(
    "/api/admin/lista/squadra",
    [authJwt.verifyToken],
    squadraController.getSquadra
  );
};
