const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/cadastro', userController.exibirFormularioCadastro);
router.post('/cadastro', userController.cadastrar);

module.exports = router;
