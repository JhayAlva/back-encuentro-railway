const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    nombre: {type:String , required:true},
    precio: {type:Number , required:true},
    tipos:[{
        nombreTipo:{type:String}
    }],
    categoria:{type:String, required:true},
    imagen:{type:String,required:true}
},{
    versionKey: false // Desactiva el campo __v
});

// Crea el modelo basado en el esquema
module.exports = mongoose.model('Producto', productoSchema,'productos');