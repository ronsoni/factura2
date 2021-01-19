function listLinea (req, res) {
    const linea = req.app.db.models.linea;
    linea.findOne({where: req.params
     
        }).then(result => {
          if (result) {
            res.json(result);
          } else {
            res.sendStatus(404);
          }
        })

        .catch(error => {
          res.status(412).json({msg: error.message});
        });
    }
function listLineas (req, res) {
    const linea = req.app.db.models.linea;
    linea.findAll( {      
      attributes: ["id", "nombre", "codigo", "id_rubro"]}
      )
      .then(result => res.status(200).json(result)  )
      .catch(error => {
        res.status(412).json({msg: error.message});
      });
  }

  function saveLinea(req, res) {
    const linea = req.app.db.models.linea;
    linea.create(req.body)
      .then(result => res.json(result))
      .catch(error => {
        res.status(412).json({msg: error.message});
      });
    };

  function updateLinea(req, res) {
   
    var datosUpdate=req.body
   // console.log(req.params);
  //  console.log(datosUpdate);
    const linea = req.app.db.models.linea;
    linea.update(datosUpdate, {where:req.params})
    .then(result =>res.status(200).json(result) )
    .catch(error => {
      res.status(412).json({msg: error.message});
    });

   
  };
  module.exports={updateLinea,saveLinea,listLinea,listLinea}
  