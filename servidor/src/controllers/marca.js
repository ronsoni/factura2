function listMarca (req, res) {
    const marca = req.app.db.models.marca;
    marca.findOne({where: req.params
     
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
function listMarcas (req, res) {
    const marca = req.app.db.models.marca;
    marca.findAll( {      
      attributes: ["id", "nombre", "codigo"]}
      )
      .then(result => res.status(200).json(result)  )
      .catch(error => {
        res.status(412).json({msg: error.message});
      });
  }

  function saveMarca(req, res) {
    const marca = req.app.db.models.marca;
    marca.create(req.body)
      .then(result => res.json(result))
      .catch(error => {
        res.status(412).json({msg: error.message});
      });
    };

  function updateMarca(req, res) {
   
    var datosUpdate=req.body
   // console.log(req.params);
  //  console.log(datosUpdate);
    const marca = req.app.db.models.marca;
    marca.update(datosUpdate, {where:req.params})
    .then(result =>res.status(200).json(result) )
    .catch(error => {
      res.status(412).json({msg: error.message});
    });

   
  };
  module.exports={updateMarca,saveMarca,listMarcas,listMarca}
  