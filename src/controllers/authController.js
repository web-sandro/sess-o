const userModel = require('../models/userModel');

function exibirHome(req, res) {
  res.render('home');
}

function exibirLogin(req, res) {
  res.render('login', { erro: null });
}

async function login(req, res) {
  const { email, senha } = req.body;
  const usuario = await userModel.autenticar(email, senha);

  if (usuario) {
    req.session.user_id = usuario.id;
    return res.redirect('/dashboard');
  }

  res.render('login', { erro: 'Credenciais inválidas' });
}


function logout(req, res) {
  req.session.destroy(() => {
    res.redirect('/login');
  });
}

function dashboard(req, res) {
  res.render('dashboard', { userId: req.session.user_id });
}

module.exports = { exibirHome, exibirLogin, login, logout, dashboard };
