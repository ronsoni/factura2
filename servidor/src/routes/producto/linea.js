"use strict";
module.exports = app => {
  
    var multipart=require('connect-multiparty');
    var md_upload=multipart({uploadDir: './upload/users'})
    const linea = app.db.models.linea;
    
    const lineaController = app.controllers.linea;

    const md_auth = app.middleware.authenticate;
 
    app.route('/api/linea/listAll').get(md_auth.ensureAuth,lineaController.listLinea)
    app.route('/api/linea/listOne/:id').get(md_auth.ensureAuth,lineaController.listLinea)
    app.route('/api/linea/new').post(md_auth.ensureAuth,lineaController.saveLinea)
    app.route('/api/linea/update/:id').put(md_auth.ensureAuth,lineaController.updateLinea)
    //app.route('/api/marca/list/:id').get(md_auth.ensureAuth,marcaController.login)
   
    
  };