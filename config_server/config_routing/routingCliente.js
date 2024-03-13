var express=require('express');
var router = express.Router();
var usuarioController = require('../../controllers/usuarioController');

router.post('/Login',usuarioController.login);

module.exports=router;