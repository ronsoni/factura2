"use strict";
module.exports = app => {
  
    var multipart=require('connect-multiparty');
    var md_upload=multipart({uploadDir: './upload/users'})
    const rubro = app.db.models.rubro;
    
    const rubroController = app.controllers.rubro;

    const md_auth = app.middleware.authenticate;
 
    app.route('/api/rubro/listAll').get(md_auth.ensureAuth,rubroController.listRubro)
    app.route('/api/rubro/listOne/:id').get(md_auth.ensureAuth,rubroController.listRubros)
    app.route('/api/rubro/new').post(md_auth.ensureAuth,rubroController.saveRubro)
    app.route('/api/rubro/update/:id').put(md_auth.ensureAuth,rubroController.updateRubro)
    //app.route('/api/marca/list/:id').get(md_auth.ensureAuth,marcaController.login)
   
    
  };