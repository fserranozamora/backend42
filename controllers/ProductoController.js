const Producto = require('../models/Producto');

exports.agregarProductos = async(req, res) => {

    try {
        let productos = new Producto(req.body)
        await productos.save();
        res.send(productos);
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al agregar un producto')
    }
}

exports.mostrarProductos = async(req, res) => {

    try {
        let productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al mostrar los productos')
    }
}

exports.mostrarUnProducto = async(req, res) => {

    try {
        let productos = await Producto.findById(req.params.id);
        if(!productos){
            res.status(404).json({msg: "El producto no se encuentra con este ID"});
        }
        res.send(productos);
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al mostrar un producto en la web')
    }
}

exports.eliminarProductos = async(req, res) => {
    try{
        let productos = await Producto.findById(req.params.id);
        if(!productos){
            res.status(404).json({msg: "El producto no existe"});
            return
        }
        await Producto.findOneAndDelete({_id: req.params.id});
        res.json({msg: "El producto fue eliminado"});
    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error al eliminar un producto en la base de datos")
    }
}

exports.modificarProductos = async(req, res) => {
    try{
        let productos = await Producto.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!productos){
            return res.status(404).send('Producto no encontrado');
        }
        res.json(productos)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al modificar el Producto")
    }
}