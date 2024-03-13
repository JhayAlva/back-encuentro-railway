require('dotenv').config()
const express  =  require('express');
const pipeline = require('./config_server/configpipeline_middlewares');
const mongoose = require('mongoose');

var servidorWeb=express();
pipeline(servidorWeb)

servidorWeb.listen(3000,(err)=>{
    if(!err){
        console.log('............servidor web EXPRESS escuchando por el puerto 3000');
    }else{
        console.log('ERROR AL LANZAR EL SERVIDOR WEB');
    }
});

mongoose.connect(process.env.URL_MONGODB)
        .then(()=>console.log('.......conectados a EncuentroDB.....'))
        .catch((error)=>console.log('ERROR AL CONECTARSE A LA BBDD'));








