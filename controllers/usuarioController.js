const bcrypt= require('bcrypt');
const jsonWebToken=require('jsonwebtoken');

const Cuenta = require('../modelos/cuenta');


function _generarJWT(email,nombre,rol,idcliente){
    return jsonWebToken.sign(
        { email,nombre, rol, idcliente },//payload o lista de claims personalizados del jwt
        process.env.JWT_SECRETKEY, //clave para firmar el jwt (debe ser secreta),
        { expiresIn:'1h', issuer:'http://localhost:3000 '} //options o lista de claims predefinidos
    );
}

module.exports={
    login:async(req,res,next)=>{
        try{
            let _cuentaCli = await Cuenta.findOne({email:req.body.email});
            if(bcrypt.compareSync(req.body.password,_cuentaCli.password)){
            res.status(200).send(
                    {
                        codigo: 0,
                        mensaje:'login oks...',
                        error: null,
                        datoscliente: _cuentaCli,
                        tokensesion: _generarJWT(_cuentaCli.email,_cuentaCli.nombre,_cuentaCli.rol,_cuentaCli._id),
                        otrosdatos:null
                    }    
                 );   
    
            }else{
             throw new Error('La contraseña es incorrecta, intentalo de nuevo');
            }
        }catch(error){
            console.log('error en login...', error.message);

            res.status(200).send(
                {
                    codigo:1,
                    mensaje:'login fallido',
                    error: error.message,
                    datoscliente: null,
                    tokensesion: null,
                    otrosdatos:null
                }
            );    
        }

    }
}