var express=require('express');
var cookieParser=require('cookie-parser');
var cors = require('cors');
var bodyParser = require('body-parser');
var routing = require('./config_routing/routingMain');

module.exports = function(servidorWebExpress){
    servidorWebExpress.use(cookieParser());
    servidorWebExpress.use(express.urlencoded({extended:true}));
    servidorWebExpress.use(express.json({limit:'10mb'}));
    servidorWebExpress.use(bodyParser.json({limit:'10mb'}));
    servidorWebExpress.use(cors());
    routing(servidorWebExpress)
}







