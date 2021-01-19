var jwt = require('jwt-simple');
var moment = require('moment');
var secret='clave_secreta_sin'
exports.ensureAuth=function(req,res,next){

     if (!req.headers.authorization){
        return res.status(403).json({msg:'Peticion sin cabecera de autentificacion'});
     }
     var token =req.headers.authorization.replace(/['"]+g/,'')
     try{
        var payload=jwt.decode(token, secret)
        if (payload.exp<=moment().unix()){
            return res.status(404).json({msg:'Token vencido'});
        }
        
     }
     catch(ex){
        return res.status(404).json({msg:'Token invalido'});

     }
     req.user=payload;

     next();

}