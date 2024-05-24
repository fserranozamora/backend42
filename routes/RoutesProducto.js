const express = require ('express');
const router = express.Router();
const ProductoController= require ('../controllers/ProductoController');

router.post('/', ProductoController.agregarProductos);
router.get('/', ProductoController.mostrarProductos);
router.get('/:id', ProductoController.mostrarUnProducto);
router.delete('/:id', ProductoController.eliminarProductos);
router.patch('/:id', ProductoController.modificarProductos);

module.exports = router;