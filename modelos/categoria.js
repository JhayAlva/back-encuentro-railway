const mongoose = require('mongoose');

const categoriasSchema = new mongoose.Schema({
    nombre: {type:String , required:true},
    path: {type:Number , required:true}
},{
    versionKey: false // Desactiva el campo __v
});

// Crea el modelo basado en el esquema
module.exports = mongoose.model('Categoria', categoriasSchema,'categorias');