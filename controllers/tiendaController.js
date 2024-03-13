const Categoria=require('../modelos/categoria');
const Productos=require('../modelos/productos');
const Cuenta = require('../modelos/cuenta');
const mongoose=require('mongoose');

module.exports={
    recuperarCategorias:async(req,res,next)=>{
        let _categorias = await Categoria.find({});
        res.status(200).send(_categorias);
    },
    recuperarProductos:async(req,res,next)=>{
        let _productos = await Productos.find({});
        res.status(200).send(_productos);
    },
    agregarPlato:async(req,res,next)=>{
        try{
        let plato = req.body.newPlato;

        var _session = await mongoose.connection.startSession();
        await _session.startTransaction();   

        let _idNuevoPlato = new mongoose.Types.ObjectId();
        plato._id = _idNuevoPlato;
        let _insertPlato = await new Productos(plato).save({session:_session});
        await _session.commitTransaction();
        let _cuenta = await Cuenta.findOne({_id:req.body.idCuenta});
        res.status(200).send(
            {
              codigo: 0,
              mensaje:'Plato nuevo agregado',
              error: null,
              datoscliente: _cuenta,
              tokensesion: req.body.jwt,
              otrosdatos:null
            }
        );

        }catch(error){
            console.log('error en almacenar un nuevo plato...',error);
            res.status(200).send(
                {
                    codigo:2,
                    mensaje:`error al querer almacenar un nuevo plato`,
                    error: error.message,
                    datoscliente: null,
                    tokensesion: '', 
                    otrosdatos:null
                }    
            );   
        } 
    },
    EliminarPlato:async(req,res,next)=>{
       try{
        let idPlato = req.body.idPlato;

        var _session = await mongoose.connection.startSession();
        await _session.startTransaction();   

        let deletePlato = await Productos.deleteOne({_id:idPlato}).session(_session);

        await _session.commitTransaction();
        let _cuenta = await Cuenta.findOne({_id:req.body.idCuenta});
        res.status(200).send(
            {
              codigo: 0,
              mensaje:'Plato eliminado correctamente',
              error: null,
              datoscliente: _cuenta,
              tokensesion: req.body.jwt,
              otrosdatos:null
            }
        );

       }catch(error){
            console.log('error al querer eliminar el plato...',error);
            res.status(200).send(
                {
                    codigo:3,
                    mensaje:`error al querer eliminar el plato`,
                    error: error.message,
                    datoscliente: null,
                    tokensesion: '', 
                    otrosdatos:null
                }    
            );   
       }     
    },
    ModificarPlato:async(req,res,next)=>{
        try{
            let _plato = req.body.plato;
            console.log('datos del plato',_plato);
            var _session = await mongoose.connection.startSession();
            await _session.startTransaction();   
            
            const updatePlato = await Productos.updateOne(
                { _id: _plato._id },
                {
                    $set: {
                        nombre: _plato.nombre,
                        imagen: _plato.imagen,
                        categoria: _plato.categoria,
                        precio: _plato.precio,
                        tipos: _plato.tipos
                    }
                }
            );
            
            if (updatePlato.modifiedCount !== undefined && updatePlato.modifiedCount > 0) {
                console.log(`${updatePlato.modifiedCount} documento(s) modificado(s)`);
            } else {
                console.log('No se encontró ningún documento para actualizar');
            }
            await _session.commitTransaction();
            let _cuenta = await Cuenta.findOne({_id:req.body.idCuenta});
            res.status(200).send(
                {
                  codigo: 0,
                  mensaje:'Plato modificado',
                  error: null,
                  datoscliente: _cuenta,
                  tokensesion: req.body.jwt,
                  otrosdatos:null
                }
            );

        }catch(error){
            console.log('error al querer modificar el plato...',error);
            res.status(200).send(
                {
                    codigo:4,
                    mensaje:`error al querer modificar el plato`,
                    error: error.message,
                    datoscliente: null,
                    tokensesion: '', 
                    otrosdatos:null
                }    
            );   
        }
    }

}