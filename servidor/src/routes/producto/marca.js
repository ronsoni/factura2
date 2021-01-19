"use strict";
module.exports = app => {
  
    var multipart=require('connect-multiparty');
    var md_upload=multipart({uploadDir: './upload/users'})
    const marca = app.db.models.marca;
    
    const marcaController = app.controllers.marca;

    const md_auth = app.middleware.authenticate;
 
    app.route('/api/marca/listAll').get(md_auth.ensureAuth,marcaController.listMarcas)
    app.route('/api/marca/listOne/:id').get(md_auth.ensureAuth,marcaController.listMarca)
    app.route('/api/marca/new').post(md_auth.ensureAuth,marcaController.saveMarca)
    app.route('/api/marca/update/:id').put(md_auth.ensureAuth,marcaController.updateMarca)
    //app.route('/api/marca/list/:id').get(md_auth.ensureAuth,marcaController.login)
   
    
  };