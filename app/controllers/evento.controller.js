const db = require("../models");
const Giocatore = db.giocatore;
const User = db.users;
const Op = db.Sequelize.Op;


exports.creaGiocatore = (req, res) => {
  // Validate request
  // if (!req.body.title) {
  //   res.status(400).send({
  //     message: "Content can not be empty!"
  //   });
  //   return;
  // }

  // Create a Giocatore
  const bodyGiocatore = {
    nome: req.body.nome,
    cognome: req.body.cognome,
  };





  // req.user.createGiocatore(Giocatore)
  Giocatore.create(bodyGiocatore)
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
exports.getGiocatore = (req,res,next) => {
  Giocatore.findAll()

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
  .then(giocatori => {
      // const result =[];
      // result.push(players);
      // res.json(result)
      console.log("GIOCATORI: ", giocatori);   
         res.json(giocatori);
      // res.json({ players : players});
  }).catch(
      err => console.log(err)
  );
};


