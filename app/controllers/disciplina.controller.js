const db = require("../models");
const Disciplina = db.disciplina;
const User = db.users;
const Evento = db.evento;
const Op = db.Sequelize.Op;


exports.creaDisciplina = (req, res) => {
  // Validate request
  // if (!req.body.title) {
  //   res.status(400).send({
  //     message: "Content can not be empty!"
  //   });
  //   return;
  // }

  // Create a Giocatore
  const bodyDisciplina = {
    nomeDisciplina: req.body.nomeDisciplina

  };


  // req.user.createGiocatore(Giocatore)
  Disciplina.create(bodyDisciplina)
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
exports.getDiscipline = (req,res,next) => {
  console.log("zioooo mariooooo");
  Disciplina.findAll()

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
  .then(discipline => {
      // const result =[];
      // result.push(players);
      // res.json(result)
      console.log("DISCIPLINE: ", discipline);   
         res.json(discipline);
      // res.json({ players : players});
  }).catch(
      err => console.log(err)
  );
};


exports.getEventoFilterByDisciplina = (req,res,next) => {
  const query = req.query
  console.log("query: ", req.query);
  Disciplina.findAll({ where: query })

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
  .then(discipline => {
      // const result =[];
      // result.push(players);
      // res.json(result)
      console.log("DISCIPLINE: ", discipline);   
         res.json(discipline);
      // res.json({ players : players});
  }).catch(
      err => console.log(err)
  );
};



