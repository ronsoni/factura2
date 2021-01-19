var bcrypt= require('bcrypt-nodejs');
const { fstat } = require('fs');
var fs= require('fs');
var path= require('path');
function getUsers(req, res) {
    const usuario = req.app.db.models.user;
    console.log(req.body);
       // usuario.findAll({where: {nombre:req.query.nombre, passw:req.query.passw}      
     usuario.findAll({})
      .then(result => res.status(200).send(result))
      .catch(error => {
        res.status(412).json({msg: error.message});
      });
  }
function listUsers (req, res) {
    const usuario = req.app.db.models.user;
    usuario.findAll( {      
      attributes: ["id", "nombre"]}
      )
      .then(result => res.status(200).json(result)  )
      .catch(error => {
        res.status(412).json({msg: error.message});
      });
  }
function saveUser(req, res) {
    const usuario = req.app.db.models.user;
    var params=req.body;
    console.log(req.body);
    var User=new usuario()
   // res.status(200).send({msg:req.body});
   if (params.password){ 
    bcrypt.hash(params.password,null,null,function(err,hash){
      User.password=hash
      if (params.nombre!=null && params.email!=null){
        User.nombre=params.nombre;
        User.role=params.role;
        User.email=params.email;
        User.imagen=params.imagen;
        User.apellido=params.apellido;
        User.save()
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({msg: error.message});
        });
        

        }
        else{
          res.status(412).json({msg: 'Falta datos'});

        }
    })
   }
   else{
    res.status(500).json({msg: 'Falta Passw'});
   }

   
  };

  function updateUser(req, res) {
   
    var datosUpdate=req.body
   // console.log(req.params);
  //  console.log(datosUpdate);
    const usuario = req.app.db.models.user;
    usuario.update(datosUpdate, {where:req.params})
    .then(result =>res.status(200).json(result) )
    .catch(error => {
      res.status(412).json({msg: error.message});
    });

   
  };
  function getImageFile(req, res){
    var imageFile=req.params.imageFile;
    var pathFile='./upload/users/'+imageFile;
 
    fs.exists(pathFile,function(exist){
        if(exist){
            res.sendFile(path.resolve(pathFile))
        }
        else{
            res.status(412).json({msg: 'no existe fichero'});
        }

    })

  }
  function imageUser(req, res){
    var file_name='sin_imagen';
    if (req.files){
        var file_path=req.files.image.path;
        var file_split=file_path.split('\\');
        var file_name=file_split[2];
        var f=file_name.split('\.');
        var file_ext=f[1];
        if (file_ext=='jpg' || file_ext=='gif'|| file_ext=='png'){
            const usuario = req.app.db.models.user;
            usuario.update({imagen:file_name}, {where:req.params})
            .then(result =>res.status(200).json({msg:'imagen subida correctamente'}) )
            .catch(error => {
              res.status(412).json({msg: error.message});
            });
        }
        else{
            res.status(412).json({msg: 'Extension no válida'});
        }
    
    }else{
        res.status(412).json({msg: 'sin imagen para subir'});
    }


  }
  function login(req, res){
    var params=req.body;
    var email=params.email;
    var pass=params.password;
    const jwt = req.app.services.jwt;
    
     // usuario.findAll({where: {nombre:req.query.nombre, passw:req.query.passw}   
     console.log('haciendo login')
     const usuario = req.app.db.models.user;
     usuario.findOne({where:{email:email}})     
      .then(result => {
        if (!result){
          res.status(404).json({msg: 'usuario o contraseña incorrecta'});
        }else{
          bcrypt.compare(pass,result.password,function(err,chk){
            if (chk){
              if (params.getHash){
                //devolver toket jws
                res.status(200).json({
                    token: jwt.createToken(result)
                }) 
              }else{
                res.status(200).json({user: result}) 
              }
              
            }else{
              res.status(404).json({msg: 'usuario o contraseña incorrecta'});
            }

          })
        }
      })    
      
      .catch(error => {
        res.status(412).json({msg: error.message});
      });
 
     
} 



module.exports={saveUser,getUsers,listUsers,login,updateUser,imageUser,getImageFile}

