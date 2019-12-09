const Aulas = require('../models/Aulas');
const User = require('../models/User');

module.exports = {
async index(req, res){
  const {assunto} = req.query;

  const aulas = await Aulas.find({assuntos: assunto});
  return res.json(aulas);
},



    async store(req, res) {
       const {filename} = req.file;
       const {local, assuntos, preco} = req.body;
       const {user_id} = req.headers;

       const user = await User.findById(user_id);
       if(!user){
           return res.status(400).json({error: 'User nao existe'})
       }

       const aulas = await Aulas.create({
           user: user_id,
           thumbnail: filename,
           local,
           assuntos: assuntos.split(',').map(assuntos => assuntos.trim()),
           preco
       })
       return res.json(aulas)
    }
}