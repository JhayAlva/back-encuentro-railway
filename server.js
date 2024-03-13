require('dotenv').config()
const express  =  require('express');
const pipeline = require('./config_server/configpipeline_middlewares');
const mongoose = require('mongoose');
const PORT= process.env.PORT || 3000;
var servidorWeb=express();
pipeline(servidorWeb)

servidorWeb.listen(PORT,(err)=>{
    if(!err){
        console.log(`............servidor web EXPRESS escuchando por el puerto ${PORT}`);
    }else{
        console.log('ERROR AL LANZAR EL SERVIDOR WEB');
    }
});

mongoose.connect(process.env.URL_MONGODB)
        .then(()=>console.log('.......conectados a la base de datos de EncuentroDB.....'))
        .catch((error)=>console.log('ERROR AL CONECTARSE A LA BBDD'));








