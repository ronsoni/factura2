import express from 'express';

module.exports = app => {

  // Settings
  app.set('port', process.env.PORT || 3001);
  app.set('json spaces', 4);

  // middlewares
  app.use(express.json());
   
  // Configurar cabeceras y cors
 
 
};

