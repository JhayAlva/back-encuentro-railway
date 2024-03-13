var routingCliente = require('./routingCliente');
var routingTienda  = require('./routingTienda');

module.exports=function(servidorWeb){
    servidorWeb.use('/api/Cliente',routingCliente);
    servidorWeb.use('/api/Tienda',routingTienda);
}
