const mongoose = require('mongoose');

let esquemaCuenta = new mongoose.Schema(
    {
        email:{type:String, required:true,match:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/},
        nombre:{type:String,required:true},
        password:{type:String, required:true},
        rol:{type:String,require:true}
    },{
        versionKey:false
    }
);

module.exports = mongoose.model('Cuenta',esquemaCuenta,'cuentas');