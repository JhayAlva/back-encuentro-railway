const mongoose = require('mongoose');
const fs = require('fs');
const Producto = require('./modelos/productos');
const Cuenta = require('./modelos/cuenta');
const Categoria=require('./modelos/categoria');
const bcrypt=require('bcrypt');
mongoose.connect('mongodb+srv://jeremie:payetXD88@jeremie.j4tsyyq.mongodb.net/ElEncuentroDB', { useNewUrlParser: true, useUnifiedTopology: true });

// const insertDatos= async(nombreCategoria,pathCategoria)=>{
//     try{
//       const nuevaCategoria = new Categoria({
//         nombre: nombreCategoria,
//         path: pathCategoria
//       });
//       await nuevaCategoria.save();
//     }catch(error){

//         console.error(`Error al insertar archivo "${nombreCategoria}":`, error);
//     }
// }

// insertDatos('ALGO PARA PICAR',1);
// insertDatos('ENTREPANES',2);
// insertDatos('POTES DE LA CASA',3);
// insertDatos('IBÉRICOS',4);
// insertDatos('COMPLEMENTOS',5);
// insertDatos('TOSTAS',6);
// insertDatos('ENSALADAS',7);
// insertDatos('PESCADOS',8);
// insertDatos('CARNES',9);
// insertDatos('POSTRES',10);
// insertDatos('SUGERENCIAS',11);
// insertDatos('ESPECIALIDADES DE LA CASA',12);
// insertDatos('REFRESCOS',13);
// insertDatos('BEBIDAS CALIENTES',14);
// insertDatos('CERVEZAS',15);
// insertDatos('LICORES',16);
// insertDatos('WHISKY',17);

const insertCuenta = async(email,password,rol)=>{
    try{
        const nuevaCuenta = new Cuenta({
            email:email,
            password:bcrypt.hashSync(password,10),
            rol:rol
        })
        await nuevaCuenta.save();
        console.log(`Archivo "${nuevaCuenta}" insertado exitosamente en la colección "cuenta".`);
    }catch(error){
        console.error(`Error al insertar archivo "${nuevaCuenta}":`, error);
    }
   
}

// const insertProductos=async(nombre,precio,tipo,categoria,imagen)=>{
//     try{
//     const nuevoProducto=new Producto({
//         nombre:nombre,
//         precio:precio,
//         tipos:tipo,
//         categoria:categoria,
//         imagen:imagen
//     })

//     const rutaImagen = 'C:\\Users\\cash\\Desktop\\zapas\\jordan1\\img01.jpg';
//     if (fs.existsSync(rutaImagen)){
//         const imagen1Data = fs.readFileSync(rutaImagen).toString('base64');
//         nuevoProducto.imagen = 'data:image/jpeg;base64,' + imagen1Data;
//         await nuevoProducto.save();
//         console.log(`Archivo "${nombre}" insertado exitosamente en la colección "productos".`);
//     }else {
//         console.error(`El archivo "${rutaImagen}" no existe.`);
//     }

//     }catch(error){
//     console.error(`Error al insertar archivo "${nombre}":`, error);
//     }
// }

// let tipo =[ 
//     {nombreTipo:'Jamon'},
//     {nombreTipo:'Bacalao'},
//     {nombreTipo:'Cecina'},
// ]

// let tipo =[ 
//      {nombreTipo:'Jamon'},
//      {nombreTipo:'Chistorra'},
//     {nombreTipo:'Gulas y Gambas'},
// ]


// insertProductos('CROQUETAS','12.50',tipo,1);
// insertProductos('HUEVOS ROTOS','12.50',tipo,1);

insertCuenta('encuentrobar@gmail.com','BarEncuentro1!','Trabajador');




