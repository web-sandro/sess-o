const userModel = require('../models/userModel');

function exibirFormularioCadastro(req, res) {
  res.render('cadastro');
}

async function cadastrar(req, res) {
  const { email, senha } = req.body;

  try {
    await userModel.criarUsuario(email, senha);
    res.redirect('/login');
  } catch (err) {
    res.status(500).send('Erro ao cadastrar usuário');
  }
}

module.exports = { exibirFormularioCadastro, cadastrar };
