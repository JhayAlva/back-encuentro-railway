var express=require('express');
var router = express.Router();
var tiendaController = require('../../controllers/tiendaController');

router.get('/GetCategorias',tiendaController.recuperarCategorias);
router.get('/GetProductos',tiendaController.recuperarProductos);
router.post('/AgregarPlato',tiendaController.agregarPlato);
router.post('/EliminarPlato',tiendaController.EliminarPlato);
router.post('/ModificarPlato',tiendaController.ModificarPlato);
module.exports=router;