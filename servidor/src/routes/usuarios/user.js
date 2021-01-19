"use strict";
module.exports = app => {
  
    var multipart=require('connect-multiparty');
    var md_upload=multipart({uploadDir: './upload/users'})
    const usuario = app.db.models.user;
    
    const controlador = app.controllers.usuario;

    const md_auth = app.middleware.authenticate;
    app.route('/api/users').get(md_auth.ensureAuth,controlador.getUsers)
    app.route('/api/user').post(md_auth.ensureAuth,controlador.saveUser)
    app.route('/api/listuser').get(controlador.listUsers)
    app.route('/api/login').post(controlador.login)
    app.route('/api/user-update/:id').put(md_auth.ensureAuth,controlador.updateUser)
    app.route('/api/imagen-user/:id').post([md_auth.ensureAuth,md_upload],controlador.imageUser) 
    app.route('/api/get-image-user/:imageFile').get(controlador.getImageFile) 
    
  };