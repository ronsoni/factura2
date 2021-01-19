function listRubro (req, res) {
    const rubro = req.app.db.models.rubro;
    rubro.findOne({where: req.params
     
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
function listRubros (req, res) {
    const rubro = req.app.db.models.rubro;
    rubro.findAll( {      
      attributes: ["id", "nombre"]}
      )
      .then(result => res.status(200).json(result)  )
      .catch(error => {
        res.status(412).json({msg: error.message});
      });
  }

  function saveRubro(req, res) {
    const rubro = req.app.db.models.rubro;
    rubro.create(req.body)
      .then(result => res.json(result))
      .catch(error => {
        res.status(412).json({msg: error.message});
      });
    };

  function updateRubro(req, res) {
   
    var datosUpdate=req.body
   // console.log(req.params);
  //  console.log(datosUpdate);
    const rubro = req.app.db.models.rubro;
    rubro.update(datosUpdate, {where:req.params})
    .then(result =>res.status(200).json(result) )
    .catch(error => {
      res.status(412).json({msg: error.message});
    });

   
  };
  module.exports={updateRubro,saveRubro,listRubro,listRubros}
  