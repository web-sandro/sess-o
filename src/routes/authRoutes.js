const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const protegerRota = require('../middlewares/protegerRota');

router.get('/', authController.exibirHome);
router.get('/', (req, res) => {
  res.redirect('/login');
});
router.get('/login', authController.exibirLogin);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.get('/dashboard', protegerRota, authController.dashboard);

module.exports = router;
