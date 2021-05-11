const db = require("../models");
const Evento = db.evento;
const User = db.users;
const Op = db.Sequelize.Op;


exports.creaEvento = (req, res) => {
  // Validate request
  // if (!req.body.title) {
  //   res.status(400).send({
  //     message: "Content can not be empty!"
  //   });
  //   return;
  // }

  // Create a Giocatore
  const bodyEvento = {
    regione: req.body.regione,
    citta: req.body.citta,
    fase: req.body.fase,
    data: req.body.data
  };


  // req.user.createGiocatore(Giocatore)
  Evento.create(bodyEvento)
    .then(data => {

      console.log("ciao");
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};
//GET - ALL
exports.getEvento = (req,res,next) => {
  Evento.findAll()

  // Giocatore.findAll({include: [{ model : User, attributes : ['id','username','updatedAt']}]})
  // .then(players => { 
  //     promises = [];
  //     players.forEach(p => {
  //         const postWithLike = Like.count({ where: { postId: p.id } })
  //             .then(likes => {
  //                 p.dataValues.likes = likes;
  //                 return p;
  //         });
  //         promises.push(postWithLike);
  //     });
  //     return Promise.all(promises);
  // })
  .then(evento => {
      // const result =[];
      // result.push(players);
      // res.json(result)
      console.log("GIOCATORI: ", evento);   
         res.json(evento);
      // res.json({ players : players});
  }).catch(
      err => console.log(err)
  );
};


