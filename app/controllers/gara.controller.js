const db = require("../models");
const Gara = db.gara;
const User = db.users;
const Evento = db.evento;
const Op = db.Sequelize.Op;


exports.creaGara = (req, res) => {
  // Validate request
  // if (!req.body.title) {
  //   res.status(400).send({
  //     message: "Content can not be empty!"
  //   });
  //   return;
  // }

  // Create a Giocatore
  const bodyGara = {
    categoria: req.body.categoria

  };


  // req.user.createGiocatore(Giocatore)
  Gara.create(bodyGara)
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
exports.getGare = (req,res,next) => {
  console.log("zioooo mariooooo");
  Gara.findAll({include: [{ model : Evento }]})

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
  .then(gara => {
      // const result =[];
      // result.push(players);
      // res.json(result)
      console.log("GIOCATORI: ", gara);   
         res.json(gara);
      // res.json({ players : players});
  }).catch(
      err => console.log(err)
  );
};


